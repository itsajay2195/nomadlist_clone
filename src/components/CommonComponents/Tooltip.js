import React, { useState } from 'react'
import styled from "styled-components";

const Tooltip = ({ message,children,top, left, bottom }) => {
    return (
        <TooltipSpan  top={top} left={left} bottom={bottom} data-tooltip={message}>
            {children}
        </TooltipSpan>
    )
}

export default Tooltip

const TooltipSpan = styled.span`
  position: relative;
  &::before {
    content: attr(data-tooltip);
    display: none;
    position: absolute;
    top:${(props) => props.top || null};
    left:${(props) => props.left || null};
    bottom:${(props) => props.bottom || "40px"};
    background-color: #181818F2;
    color: white;
    padding: 5px 10px;
    width:200px;
    height:25px;
    border-radius: 5px;
    font-size: 10px;
    z-index:10;
    border-radius:10px;
    opacity: 0.75 ;
  filter:  saturate(0%) brightness(1);
    transform:;
  }

  &:hover::before {
    display: block;
  }
`;