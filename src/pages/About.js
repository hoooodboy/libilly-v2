import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Dog from '../assets/dog.mp4';

const About = () => {
    return (
        <AboutBlock>
            <Header/>
            <AboutInfo>
                <video autoPlay loop muted style={{width: '100%', height: '100%', objectFit: 'contain'}}>
                    <source src={Dog}/>
                </video>
            </AboutInfo>
            <SpanBlock>
                <Span>Libilly는 로컬 스트리트문화를 기반으로 전개하는 브랜드입니다.</Span>
                <Span>거리의 다양한 영감을 디자인 뿐만 아니라 사진과 영상 등을 통해 표현합니다.</Span>
            </SpanBlock>
        </AboutBlock>
    )
}

const AboutBlock = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AboutInfo = styled.div`
    width: 350px;
    height: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`;

const SpanBlock = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const Span = styled.div`
    color: #fff;
    margin-top: 30px;
    font-weight: 900;
    font-size: 2.25vh;
`;
export default About;