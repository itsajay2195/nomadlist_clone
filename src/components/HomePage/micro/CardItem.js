import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const PICK_KEYS = ["cost", "overall", "fun", "safety"];
const formrHoverData = (dataset) => {
  let obj1 = [];
  PICK_KEYS.reduce((acc, key) => {
    acc["name"] = key;
    acc[key] = dataset[key];
    obj1.push(acc);
    acc = {};
    return acc;
  }, {});
  return obj1;
};
const CardItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [onHoverDataSet] = useState(formrHoverData(item));
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { img } = item;
  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img
        style={{ height: "100%", width: "100%", borderRadius: 20 }}
        src={img}
      ></img>
      <ImageOverlay
        backgroundColor={`rgba(0, 0, 0, ${isHovered ? 0.5 : 0.25})`}
      />

      <>
        {isHovered ? (
          <HoveredItem onHoverDataSet={onHoverDataSet} />
        ) : (
          <DefaultItem item={item} />
        )}
      </>
    </Item>
  );
};

export default CardItem;

const HoveredItem = ({ onHoverDataSet }) => {
  // console.log("onHoverDataSet11", onHoverDataSet);
  return (
    <HoveredItemContainer>
      <div style={{display: 'flex', flexDirection:'column', flex:1, justifyContent: 'center'}}>
        {onHoverDataSet.map((data, index) => (
            <div
              key={`${data.name}-${index}`}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:'space-evenly',
                padding:'10px'
              }}
            >
              <div style={{display:'flex', flex:0.5, flexDirection:'row'}}>
              <P style={{color:'white'}}>{data.name}</P>
              <P style={{color:'white'}}>{data.name}</P>
              </div>
              <div >
              <ProgressBar percentage={25} />
              </div>
              
            </div>
      
        ))}
      </div>
    </HoveredItemContainer>
  );
};

const DefaultItem = ({ item }) => {
  const { city, country, internetSpeed, rank } = item;
  return (
    <>
      <TopItem>
        <TopLeftItem>
          {rank}
          <P
            style={{ height: "3px", width: "100%", backgroundColor: "white" }}
          ></P>
        </TopLeftItem>
        <TopRightItemwrapper>
          <WifiIconWrapper>
            <svg viewBox="0 0 24 24" width="20" height="25" fill="white">
              <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" />
            </svg>
          </WifiIconWrapper>

          <InternetSpeed>
            <P fontSize={"16px"}>{internetSpeed}</P>
            <P fontSize={"12px"}>mbps</P>
          </InternetSpeed>
        </TopRightItemwrapper>
      </TopItem>
      <CenterItem>
        {city}
        <H1>{country}</H1>
      </CenterItem>
      <BottomItem>
        <BottomLeft>
          🌥
          <BottomLeftTemperature>
            <P fontSize={"8px"} textAlign={"center"}>
              feels 20
            </P>
            <P fontSize={"16px"} textAlign={"center"}>
              30
            </P>
          </BottomLeftTemperature>
          <Smiley>🥵</Smiley>
          <AQI>
            <P>AQI</P>
            <P fontSize={"8px"} textAlign={"center"}>
              6
            </P>
          </AQI>
          <Smiley>😷</Smiley>
        </BottomLeft>
        <BottomRight>$2,187</BottomRight>
      </BottomItem>
    </>
  );
};
const Item = styled.div`
  position: relative;
  height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 300px;
  cursor: zoom-in;
`;
const TopItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 10px;
  bottom: 0;
  left: 20px;
  right: 20px;
`;

const TopLeftItem = styled.p`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 24px;
  text-align: center;
`;

const TopRightItemwrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InternetSpeed = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: white;
  font-size: 24px;
  padding-left: 5px;
`;

const CenterItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 20px;
  right: 20px;
  font-weight: var(--bold);
  color: white;
  font-size: 24px;
`;
const WifiIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: center;
`;
const H1 = styled.h1`
  font-weight: var(--bold);
  color: white;
  font-size: 16px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor || rgba(0, 0, 0, 0.27)};
  border-radius: 20px;
`;

const BottomItem = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 10;
  bottom: 10px;
  left: 20px;
  right: 20px;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  color: white;
  font-size: 24px;
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: white;
  font-size: 22px;
`;

const BottomLeftTemperature = styled.div`
  flex-direction: column;
  padding-left: 10px;
`;
const P = styled.p`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "8px"};
  text-align: ${(props) => props.textAlign || "center"};
`;

const AQI = styled.div`
  flex-direction: column;
  padding-left: 10px;
`;

const Smiley = styled.span`
  padding: 0px 5px;
`;

const HoveredItemContainer = styled.div`
  display: flex;
  position: absolute;
  flex:1;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
