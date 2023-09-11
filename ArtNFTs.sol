// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ArtNFTs is ERC721, Ownable {
    string private baseURI;
    uint   private total;
    uint   private num;
    uint   private price;
    IERC20 private WETH;
    uint   private limit;
    address private dev;

    mapping(address => uint) public buyNumOf;

    constructor
    (
        string memory _imageURI,
        uint _total,
        uint _price,
        uint _limit
    )
        ERC721("ArtNFTs", "ARTs")
    {
        WETH = IERC20(0x38cB7800C3Fddb8dda074C1c650A155154924C73);
        baseURI = _imageURI;
        total = _total;
        num = 0;
        price = _price;
        limit = _limit;
        dev = msg.sender;
    }

    function _baseURI()
    internal view virtual
    override returns (string memory)
    {
        return baseURI;
    }

    function tokenURI(uint256 tokenId)
    public view virtual
    override returns (string memory)
    {
        _requireMinted(tokenId);
        return _baseURI();
    }

    function getTotal()
    public view returns(uint)
    {
        return total;
    }

    function getNum()
    public view returns(uint)
    {
        return num;
    }

    function _mintTo(address _to)
    internal returns (bool)
    {
        require(num < total, "ArtNFTs function _mintTo(address _to): Num should less than total !!!");
        _mint(_to, num);
        num++;
        return true;
    }

    function buy(uint _amount) public returns(bool) {
        require(buyNumOf[msg.sender] + _amount <= limit, "ArtNFTs function buy(uint _amount): buyNumOf[msg.sender] + _amount <= limit");
        require(num + _amount <= total, "ArtNFTs function buy(uint _amount): Num + _amount <= total !!!");
        WETH.transferFrom(msg.sender, dev, price * _amount);
        for(uint i = 0; i < _amount; i++){
            _mintTo(msg.sender);
        }
        buyNumOf[msg.sender] += _amount;
        return true;
    }
}
