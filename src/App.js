import React from "react";
import "./App.css";
import Publications from "./components/HomePage/Publications";
import Banner from "./components/HomePage/Banner";
import styled from "styled-components";
import Tags from "./components/HomePage/Tags";
import Card from "./components/HomePage/Card";

const App = () => {
  return (
    <Container>
      <Banner />
      <Publications />
      <Tags />
      <Card />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
