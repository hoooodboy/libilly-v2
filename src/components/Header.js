import React, {useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import MenuIcon from '../assets/menu.png';
import LibillyLogo from '../assets/logo2.png'
import InstagramLogo from '../assets/instagram.png';
import Cancle from '../assets/cancle.png';

function Header() {

    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }
    
    return (
        <>
            <HeaderWrappr>
                <Menu onClick={onToggle} />
                <LibillyHome/>
                <Instagram/>
            </HeaderWrappr>
            <Wrapper open={open}>
                <ModalWrapper>
                    <CancleButton onClick={onToggle}/>
                    <Menu2>
                        <MenuContent>HOME</MenuContent>    
                        <MenuContent>SHOP</MenuContent>
                        <MenuContent>ABOUT</MenuContent>    
                        <MenuContent>CONTACT</MenuContent>
                    </Menu2>
                </ModalWrapper>
                <ModalOpacity onClick={onToggle}/>
            </Wrapper>
        </>
    )
}

const Menu = styled.div`
    width: 3vh;
    height: 3vh;
    background-image: url(${MenuIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
`;

const HeaderWrappr = styled.div`
    width: 90vw;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
`;

const Instagram = styled.div`
    width: 3vh;
    height: 3vh;
    background-image: url(${InstagramLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
`;

const LibillyHome = styled.div`
    width: 158px;
    height: 40px;
    cursor: pointer;
    background-image: url(${LibillyLogo});
    background: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    display: none;
    justify-content: space-between;
    ${props => props.open && css`
        display:flex;
    `}
    position: fixed;
    z-index: 2;
    top: 0;
`;
 
const Fadein = keyframes`
  0% {
    left: -200px;
  }
  100% {
    left: 0px;
  }
`;


const ModalWrapper = styled.div`
    width: 200px;
    height: 100vh;
    background: linear-gradient(0.25turn, #000, #000, #000, #1e0801);
    z-index: 3;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    
    animation: ${Fadein} 500ms ;
    ${props => props.open && css`
        display:flex;

    `}
`;

const ModalOpacity = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    top: 0;
    opacity: 0.4;
    z-index: 2;
`;

const CancleButton = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${Cancle});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 20px;
    top: 20px;
    &:hover{
        opacity: 0.4;
    }
`;

const Menu2 = styled.div`
    position: absolute;
    top: 70px;
    justify-content: center;
    cursor: pointer;
`;

const MenuContent = styled.div`
    margin-top: 20px;
    font-size: 15px;
    color: #fff;
    &:hover{
        color: #666;
    }
    width: 150px;
`;


export default Header;
