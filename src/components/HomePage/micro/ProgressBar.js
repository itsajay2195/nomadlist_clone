import React from "react";
import styled from "styled-components";

const ProgressBar = ({percentage}) => {
  return (
    <ProgressBarContainer>
      <Progress percentage={percentage} />
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
  background-color: #4caf50;
  border-radius: 10px;
`;
