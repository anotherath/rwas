import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  height: 100px;
  background-color: #211637;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
`;
const Text = styled.div``;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  cursor: pointer;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
`;

function NFT() {
  return (
    <Container>
      <Avatar src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" />
      <Text>Smart Finance </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text>Floor Price</Text>
        <Text>0.01 ETH</Text>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text>Top Offer</Text>
        <Text>0.008 ETH</Text>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "260px",
        }}
      >
        <Button>
          <ShoppingCartIcon />
          <Text>Buy</Text>
        </Button>

        <Button>
          <SellIcon />
          <Text>Sell</Text>
        </Button>
      </div>
    </Container>
  );
}

export default NFT;
