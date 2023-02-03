import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 ;
  padding: 2px;
  border: 2px solid gray;
  border-radius: 50px;
  width: 15%;
`;

const Input = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  width:80%;
  border:none;
  background-color: inherit;
  margin : 0px 10px 0px 0px;
  height: 40px;
  
`;

const Button = styled.button`
  font-size: 28px;
  display:flex;
  justify-content:center;
  color:black;
  background-color: #ff4742;
  border: none;
  height:35px;
  width:35px;
  border-radius: 50px;
`;

const SeachBar = ({ handleSearch, handleFilter }) => {
  return (
    <FilterContainer>
      <Input type="text" placeholder="Search" onChange={handleSearch} />
      <Button onClick={handleFilter}>+</Button>
    </FilterContainer>
  );
};

export default SeachBar;
