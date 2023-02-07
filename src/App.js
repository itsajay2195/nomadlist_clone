import React, {useState} from "react";
import "./App.css";
import Publications from "./components/HomePage/Publications";
import Banner from "./components/HomePage/Banner";
import styled from "styled-components";
import Tags from "./components/HomePage/Tags";
import Card from "./components/HomePage/Card";
import SeachBar from "./components/HomePage/micro/SeachBar";
import { SEARCH_MODAL_DATA } from "./constants/cities";
const App = () => {
 
  return (
    <Container>
      <Banner />
      <div style={{ padding: 30 }}>
        <Publications />
        <SeachBar data={SEARCH_MODAL_DATA} />
        <Tags />
        <Card />
      </div>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color:#181818;
`;




