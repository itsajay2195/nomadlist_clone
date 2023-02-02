import React from "react";
import "../HomePage/css/Publication.css";
import { PUBLICATION_CONSTANT } from "../../constants/cities";
import styled from "styled-components";

const Publications = ({ item }) => {
  return (
    <PublicationsWrapper>
       {/* <svg viewBox="0 0 1440 120" class="wave" fill="red">
        <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
      </svg> */}
      <SeenText>as seen in</SeenText>
      {PUBLICATION_CONSTANT.map((item) => (
          <img
          key={item.key}
          style={{
            width: "auto",
            height: 15,
            paddingLeft: 25,
            paddingRight: 25,
          }}
          src={item.img}
          alt="description"
        />
      ))}
    </PublicationsWrapper>
  );
};

export default Publications;

const PublicationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  opacity: 0.75 !important;
  filter: invert(100%) saturate(0%) brightness(2);
`;

const SeenText = styled.p`
  font-size: 10px;
  opacity: 0.5;
  margin: 0;
  margin-right: 7px;
  display: inline-block;
  vertical-align: middle;
`;