import React from "react";
import styled from "styled-components";

const colorIndicator = (data) => {
    
    if (data <= 50) {
      return "red";
    } else if (data <= 70) {
      return "yellow";
    } else {
      return "#4caf50";
    }
  };
const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <Progress
        percentage={percentage}
        barColor={() => colorIndicator(percentage)}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  height: 20px;
  width: 100px;
  background-color: #ddd;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.barColor};
  border-radius: 10px;
`;
