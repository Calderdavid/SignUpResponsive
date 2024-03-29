import React from 'react'
import bg from '../assets/bg.png'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Main from './Main'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar/>
        <Main/>
      </Wrapper>
      
    </Container>
  )
}

const Container = styled.div`
    background: #EEFCFF;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

const Wrapper = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
`;






export default App

