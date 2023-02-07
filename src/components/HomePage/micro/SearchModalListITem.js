import React, {useState} from 'react'

const SearchModalListITem = ({value}) => {
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
                <p style={{ backgroundColor: isHovered ? "#ff4742": null, color: isHovered ? "white": "grey", fontWeight: "bold", fontSize: '20px', display: 'flex', width: "100%", borderRadius: "12px", padding: "10px 20px" }}>{value}</p>
            </div>
        </>
    )
}

export default SearchModalListITem