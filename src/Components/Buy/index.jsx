import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #00000099;
`;

const Box = styled.div`
  width: 500px;
  height: 600px;
  background-color: #211637;
  border-radius: 10px;
`;

function Buy() {
  return (
    <Container>
      <Box>
        <div>Make Offer</div>
        <div>Buy now</div>
      </Box>
    </Container>
  );
}

export default Buy;
