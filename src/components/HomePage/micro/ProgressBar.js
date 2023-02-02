import React from 'react'
import styled from "styled-components";


const ProgressBar = () => {
  return (
    <div>
      
    </div>
  )
}

export default ProgressBar


const ProgressBarContainer = styled.div`
  height: 100px;
  width: 20px;
  background-color: #ddd;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
`;

const Progress = styled.div`
  height: ${props => props.percentage}%;
  width: 100%;
  background-color: #4caf50;
  border-radius: 10px;
`;