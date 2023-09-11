import React from "react";
import { styled } from "styled-components";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Daos from "./Pages/Daos";
import Marketplace from "./Pages/Marketplace";
import Web3 from "web3";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const Background = styled.div`
  background-image: linear-gradient(#833ab4, #fdbb2d);
`;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/daos" element={<Daos />} />
    </>
  )
);

function App() {
  const [account, setAccount] = React.useState(
    "0x0000000000000000000000000000000000000000"
  );

  async function loadWeb3() {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loadBlockchainData() {
    try {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      if (accounts.length !== 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getnetwork() {
    window.web3.eth.net.getId().then(console.log);
  }

  React.useEffect(() => {
    loadWeb3();
    loadBlockchainData();
    getnetwork();
  }, []);

  return (
    <Background>
      <Nav account={account} />
      <RouterProvider router={router} />
    </Background>
  );
}

export default App;
