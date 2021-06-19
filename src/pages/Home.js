import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Video from '../assets/peaches031.mp4';

const Home = () => {
    return (
        <HomeBlock>
            <Header/>
            <Background/>
        </HomeBlock>
    );
};

const HomeBlock = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Background = styled.div`
    width: 250px;
    height: 250px;
    background-image: url(${Video});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Home;
