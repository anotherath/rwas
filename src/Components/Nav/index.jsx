import React from "react";
import styled from "styled-components";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 95px;
  width: 100%;
`;

const Text = styled.a`
  font-size: 18px;
  color: white;
  border-bottom: ${(props) => (props.choice ? "2px solid white" : "none")};
  text-decoration: none;
  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  cursor: pointer;
`;

function Nav(props) {
  return (
    <Container>
      <Logo src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/372900547_661330282633669_337335104563438735_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=9gJiUvEtGNQAX-X-R08&_nc_ht=scontent.fhph1-2.fna&oh=03_AdQmi8mziDGoIZgD9GTUXcSm4uKEiQBtOrsU7dnj7m5-JQ&oe=6517D49A" />
      <Text choice={window.location.pathname === "/"} href="/">
        Home
      </Text>
      <Text choice={window.location.pathname === "/mint"} href="/mint">
        Mint
      </Text>
      <Text
        choice={window.location.pathname === "/marketplace"}
        href="/marketplace"
      >
        NFTs Marketplace
      </Text>
      <Text choice={window.location.pathname === "/daos"} href="/daos">
        DAOs
      </Text>
      <Text choice={window.location.pathname === "/trade"} href="/trade">
        Trade
      </Text>
      <Button onClick={() => window.location.replace("/profile")}>
        <AccountBalanceWalletIcon />
        <div style={{ paddingLeft: "10px" }}>
          {props.account[0]}
          {props.account[1]}
          {props.account[2]}
          {props.account[3]}
          {props.account[4]}
          {props.account[5]}. . .{props.account[38]}
          {props.account[39]}
          {props.account[40]}
          {props.account[41]}
        </div>
      </Button>
    </Container>
  );
}

export default Nav;
