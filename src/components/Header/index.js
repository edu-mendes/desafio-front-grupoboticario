import React from "react";
import styled from "styled-components"
// import bank_logo from "../../assets/images/bank_logo.svg";
// import { corPrimaria } from "../UI/variaveis";



const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  background-color: #6f967e;
  margin-bottom: 5vh;
`;



const Header = () => {
  return (
    <>
      <StyledHeader />
    </>
  );
};

export default Header;
