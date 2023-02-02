import React, { useState } from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Container>
      <img
        style={{ height: "100%", width: "100%", objectFit: "resize" }}
        src={
          "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="logo"
      ></img>
      {/* <img style={{height:'100%', width:'100%'}} src={video} alt="" /> */}
  
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
`;

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex: 1;
//   a {
//     font-weight: 600;
//     text-transform: uppercase;
//     padding: 0 10px;
//     flex-wrap: nowrap;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const RightMenu = styled.div`
//   display: flex;
//   align-items: center;
//   a {
//     font-weight: 600;
//     text-transform: uppercase;
//     margin-right: 10px;
//   }
// `;

// const CustomMenu = styled(MenuIcon)`
//   cursor: pointer;
// `;

// const BurgerNav = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   background: white;
//   width: 300px;
//   z-index: 16;
//   list-style: none;
//   padding: 20px;
//   text-align: start;
//   transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
//   transition: transform 0.3s ease-in-out;
//   li {
//     padding: 15px 0;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.2);
//     a {
//       font-weight: 600;
//     }
//   }
// `;

// const CustomClose = styled(CloseIcon)`
//   cursor: pointer;
// `;

// const CloseWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;
