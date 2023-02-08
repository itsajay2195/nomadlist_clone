import React, { useState } from 'react'
import styled from "styled-components";
import Tooltip from '../../CommonComponents/Tooltip';

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
                <Tooltip message="I'm trying something cool here">
                    <p style={{ backgroundColor: isHovered ? "#ff4742" : null, color: isHovered ? "white" : "grey", fontWeight: "bold", fontSize: '20px', display: 'flex', width: "100%", borderRadius: "12px", padding: "10px 20px" }}>{value}</p>
                </Tooltip>

            </div>
        </>
    )
}

export default SearchModalListITem
