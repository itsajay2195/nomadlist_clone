import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

function App() {
  return (
    <Image 
      src="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=25/https://nomadlist.com/assets/img/places/bangkok-thailand.jpg?1674345655"
    />
  );
}

export default App;