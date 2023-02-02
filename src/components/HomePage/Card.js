import React from "react";
import styled from "styled-components";
import CardItem from "./micro/CardItem";
import { CITIES } from "../../constants/cities";

const Card = () => {
  return (
    <CardContainer>
      {CITIES.map((city) => (
        <CardItem key={city.rank} item={city}/>
      ))}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  margin: 0px 10px;
`;
