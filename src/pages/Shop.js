import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import GlobalteeImg from '../assets/globaltee.png';
// import DogteeImg from '../assets/dogtee.png';
// import BillylogohoodieImg from '../assets/billylogohoodie.png';
// import Logo031teeImg from '../assets/031tee.png';
// import Shorts031Img from '../assets/031shorts.png';
// import Hoodie031Img from '../assets/031hoodie.png';
// import Fuck031Img from '../assets/031fuck.png';
// import Crewneck031Img from '../assets/031crewneck.png';
// import GrayhoodImg from '../assets/grayhood.png';
// import LibillyjacketImg from '../assets/libillyjacket.png';
// import Ma1Img from '../assets/ma1.png';
// import SocksImg from '../assets/socks.png';
import LibillyglobalteewhiteImg from '../assets/libillyglobalteewhite.png';
import FuckteewhiteImg from '../assets/fuckteewhite.png';
import LibillylogoteeImg from '../assets/libillylogotee.png';
import Flame031sleaveImg from '../assets/flame031sleave.png';
import DogteewhiteImg from '../assets/dogteewhite.png';
import NumberlogoteewhiteImg from '../assets/numberlogoteewhite.png';
import SockswhiteImg from '../assets/sockswhite.png';

const Shop = () => {
    return (
        <ShopBlock>
            <Header/>
            <SalesList>
                <ShopWrapper>
                    {/* <Hoddie />
                    <Dogtee />
                    <Billylogohoodie />
                    <Logo031tee />
                    <Shorts031 />
                    <Hoodie031 />
                    <Fuck031 />
                    <Crewneck031 />
                    <Grayhood />
                    <Libillyjacket />
                    <Ma1 />
                    <Socks /> */}
                    <Libillyglobalteewhite/>
                    <Fuckteewhite />
                    <Libillylogotee />
                    <Flame031sleave/>
                    <Dogteewhite/>
                    <Numberlogoteewhite />
                    <Sockswhite/>
                </ShopWrapper>
            </SalesList>
        </ShopBlock>
    )
}

const ShopBlock = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200px;
`;

const SalesList= styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200px;
`;

const ShopWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10vw;
    align-self: flex-start;
`;

const Hoddie = styled.div`
    width: 250px;
    height: 250px;
    margin: 20px auto;
    background-image: url(${GlobalteeImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s ease-in-out;  
    &:hover{
        transform: scale(1.07); 
    }
`;

// const Dogtee = styled(Hoddie)`
//     background-image: url(${DogteeImg});
// `;

// const Billylogohoodie = styled(Hoddie)`
//     background-image: url(${BillylogohoodieImg});
// `;

// const Logo031tee = styled(Hoddie)`
//     background-image: url(${Logo031teeImg});
// `;

// const Shorts031 = styled(Hoddie)`
//     background-image: url(${Shorts031Img});
// `;

// const Hoodie031 = styled(Hoddie)`
//     background-image: url(${Hoodie031Img});
// `;

// const Fuck031 = styled(Hoddie)`
//     background-image: url(${Fuck031Img});
// `;

// const Crewneck031 = styled(Hoddie)`
//     background-image: url(${Crewneck031Img});
// `;

// const Grayhood = styled(Hoddie)`
//     background-image: url(${GrayhoodImg});
// `;

// const Libillyjacket = styled(Hoddie)`
//     background-image: url(${LibillyjacketImg});
// `;

// const Ma1 = styled(Hoddie)`
//     background-image: url(${Ma1Img});
// `;

// const Socks = styled(Hoddie)`
//     background-image: url(${SocksImg});
// `;

const Libillyglobalteewhite = styled(Hoddie)`
    background-image: url(${LibillyglobalteewhiteImg});
`;

const Fuckteewhite = styled(Hoddie)`
    background-image: url(${FuckteewhiteImg});
`;

const Libillylogotee = styled(Hoddie)`
    background-image: url(${LibillylogoteeImg});
`;

const Flame031sleave = styled(Hoddie)`
    background-image: url(${Flame031sleaveImg});
`;

const Dogteewhite = styled(Hoddie)`
    background-image: url(${DogteewhiteImg});
`;

const Numberlogoteewhite = styled(Hoddie)`
    background-image: url(${NumberlogoteewhiteImg});
`;

const Sockswhite = styled(Hoddie)`
    background-image: url(${SockswhiteImg});
`;

export default Shop;