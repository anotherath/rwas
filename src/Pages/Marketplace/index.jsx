import React from "react";
import styled from "styled-components";
import NFT from "../../Components/NFT";
import Buy from "../../Components/Buy";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2000px;
`;
const Box = styled.div`
  width: fit-content;
`;

const Text = styled.div`
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: white;
`;

function Marketplace() {
  return (
    <Container>
      <Box>
        <Text>NFTs Marketplace</Text>
        <NFT />
        <NFT />
        <NFT />
        <NFT />
        <NFT />
        <NFT />
      </Box>
    </Container>
  );
}

export default Marketplace;
