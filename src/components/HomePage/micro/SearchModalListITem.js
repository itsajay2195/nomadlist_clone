import React, { useState } from 'react'
import styled from "styled-components";

const SearchModalListITem = ({ value }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ padding: "10px 10px" }}>
                <TooltipSpan data-tooltip="I'm trying something cool here">
                    <p style={{ backgroundColor: isHovered ? "#ff4742" : null, color: isHovered ? "white" : "grey", fontWeight: "bold", fontSize: '20px', display: 'flex', width: "100%", borderRadius: "12px", padding: "10px 20px" }}>{value}</p>
                </TooltipSpan>

            </div>
        </>
    )
}

export default SearchModalListITem

const TooltipSpan = styled.span`
  position: relative;
  &::before {
    content: attr(data-tooltip);
    display: none;
    position: absolute;
    bottom:40px;
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
  }

  &:hover::before {
    display: block;
  }
`;