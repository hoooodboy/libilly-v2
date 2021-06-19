import React from 'react';
import styled from 'styled-components';
import BackgroundVideo from '../assets/peaches031.mp4';
import Header from '../components/Header';

const Home = () => {
    return (
        <HomeBlock>
            <Header/>
            <Background>
            <video autoPlay loop muted style={{width: '100%', height: '100%', objectFit: 'cover'}}>
                <source src={BackgroundVideo}/>
            </video>
            </Background>
        </HomeBlock>
    );
};

const HomeBlock = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
`;

const Background = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Home;
