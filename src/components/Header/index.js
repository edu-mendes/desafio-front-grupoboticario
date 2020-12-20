import React from "react";
import styled from "styled-components"
// import bank_logo from "../../assets/images/bank_logo.svg";
// import { corPrimaria } from "../UI/variaveis";

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;


`;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  background-color: #6f967e;
  margin-bottom: 5vh;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Header = () => {
  return (
    <StyledHeader>
     
    </StyledHeader>
  );
};

export default Header;
