import React, { useState, useCallback } from "react";
import styled from "styled-components";
import SearchModalListITem from "./SearchModalListITem";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  padding: 2px;
  border: 2px solid gray;
  border-radius: 50px;
  width: 100%;
  @media (min-width: 720px) {
    width: 15%;
  }
`;

const Input = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  width: 80%;
  border: 0px solid gray;
  border-radius: 10px;
  background-color: inherit;
  margin: 0px 10px 0px 0px;
  height: 40px;
  outline: none;
`;

const Button = styled.button`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #ff4742;
  border: none;
  height: 35px;
  width: 35px;
  border-radius: 50px;
`;

const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
`;

const Modal = styled.div`
  background-color: #181818F2;
  display: flex;
  border-radius: 5px;
  border: 1px solid black;
  padding: 0px 20px;
  height: auto;
  max-width: auto;
`;
const SearchBar = ({ data }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = useCallback((text) => {
    setSearchText(text)
  }, [])

  const handleFilter = useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen]);

  const columns = 3;
  const itemsPerColumn = Math.ceil(data.length / columns);

  const dataColumns = [];
  for (let i = 0; i < columns; i++) {
    dataColumns.push(data.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
  }


  return (
    <>
      <FilterContainer onClick={handleFilter}>
        <Input type="text" placeholder="Search" onChange={handleSearch} />
        <Button onClick={handleFilter}>+</Button>
      </FilterContainer>
      <>
        {isModalOpen && (
          <ModalContainer>
            <Modal>
              {dataColumns.map((columnData, index) => (
                <div key={index} style={{ borderRight: index === dataColumns.length - 1 ? "none" : '0.25px solid black' }}>
                  {columnData.map(({ value }, itemIndex) => (
                    <SearchModalListITem key={itemIndex} value={value} />
                  ))}
                </div>
              ))}
            </Modal>
          </ModalContainer>
        )}
      </>
    </>
  );
};

export default SearchBar;
