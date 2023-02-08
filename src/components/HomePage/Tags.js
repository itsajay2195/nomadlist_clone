import React from "react";
import styled from "styled-components";

const tagData = [
    { key: 1, value: "⛩ Asia" },
    { key: 2, value: "🇪🇺 Europe" },
    { key: 3, value: "💃 Latin America" },
    { key: 4, value: "🏄 Oceania " },
    { key: 5, value: "🌍 Africa " },
    { key: 6, value: "🕌 Middle East" },
  ];

const Tags = () => {
  return (
    <Container>
      {tagData.map((tag) => (
        <TagItem key={tag.key}>
          <span >{tag.value} </span>
        </TagItem>
      ))}
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  position:relative;
  flex: wrap;
  display:flex;
  margin:10px 0px;
  zIndex:10;
`;

const TagItem = styled.div`
  background-color: transparent;
  padding:8px;
  margin: 7px;
  border-radius: 32px;
  border: dashed 2px #30363d;
  opacity: 1;
  filter: saturate(0);
  cursor: cell;
  font-weight: bold;
  background-color:#181818F2;
`;
