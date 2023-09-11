import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 220px;
  height: 320px;
  border-radius: 20px;
  background-color: #211637;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 20px;
`;

const Avatar = styled.img`
  margin-top: 20px;
  height: 125px;
  width: 125px;
  border-radius: 100px;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: white;
`;

const Info = styled.div`
  font-size: 18px;
  color: white;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

function Dao() {
  return (
    <Container>
      <Avatar src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" />
      <div
        style={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Name>Smart Money</Name>
        <Info>56k members</Info>
        <Button>Join</Button>
      </div>
    </Container>
  );
}

export default Dao;
