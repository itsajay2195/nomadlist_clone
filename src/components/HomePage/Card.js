import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import CardItem from "./micro/CardItem";
import { CITIES } from "../../constants/cities";
import ActivityIndicator from "../../components/CommonComponents/ActivityIndicator";

const PAGE_SIZE = 4;
const Card = () => {
  const [page, setPage] = useState(0);
  const [cities, setCities] = useState(CITIES.slice(0, PAGE_SIZE));
  const [loading, setLoading] = useState(false);

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
    if(PAGE_SIZE * page >= CITIES.length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000
    );
    setCities(CITIES.slice(0, PAGE_SIZE * (page + 1)));
  }, [page])

  return (
    <>
      <CardContainer>
        {cities.map((city) => (
          <CardItem key={city.rank} item={city} />
        ))}
      </CardContainer>
      <div style={{ display: 'flex', width: "100%", justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator loading={loading} />
      </div>
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  margin: 30px 20px;
`;
