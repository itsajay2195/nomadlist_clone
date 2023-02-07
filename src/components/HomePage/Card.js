import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import CardItem from "./micro/CardItem";
import { CITIES } from "../../constants/cities";


const PAGE_SIZE = 4;
const Card = () => {
  const [page, setPage] = useState(0);
  const [cities, setCities] = useState(CITIES.slice(0, PAGE_SIZE));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      setPage(page => page + 1);
    }
  };

  useEffect(() => {
    setCities(CITIES.slice(0, PAGE_SIZE * (page + 1)));
  }, [page])
  
  return (
    <CardContainer>
      {cities.map((city) => (
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
