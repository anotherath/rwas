import React from "react";
import styled from "styled-components";
import Dao from "../../Components/Dao";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 2000px;
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cột có chiều rộng bằng nhau */
  grid-auto-rows: auto; /* Chiều cao tự động theo nội dung */
  grid-auto-flow: row; /* Xuống dòng khi đủ 3 phần tử trên mỗi hàng */
`;

const Text = styled.div`
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: white;
`;

function Daos() {
  return (
    <Container>
      <Text>DAOs</Text>
      <Box>
        <Dao />
        <Dao />
        <Dao />
        <Dao />
        <Dao />
        <Dao />
      </Box>
    </Container>
  );
}

export default Daos;
