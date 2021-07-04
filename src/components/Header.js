import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logoimg from '../styles/images/spplit_logo.png';
import ProfileModal from './ProfileModal';
import useDetectProfileClick from './useDetectProfileClick';

const HeaderArea = styled.div`
    position: relative;
    width: 100%;
    height: 6rem;
`;

const HeaderContainer = styled.div`
    background-color: white;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 6rem;
    z-index : 1;
    transition: 0.4s ease;
    &.hide {
        transform: translateY(-6rem);
    }
`;

const HeaderItemContainer = styled.div`
    /* background-color: pink; */
    display: flex;
    align-items: center;
    width: 95%;
    margin: 0 auto;
    height: 4rem;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

const LogoImage = styled.img`
    width: 3rem;
    height: auto;


`;

const LogoName = styled.div`
    font-family: 'PTSerif-bold';
    color: #29548e;
    font-size: 40px;
    margin-left: 1rem;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    display: flex;
`;

const ProfileName = styled.div`
    font-family: "assistant-semibold";
    margin-right: 10px;
`;

const ProfileImage = styled.div`
    background-color: #d9d9d9;
    overflow: hidden;
    width: 50px;
    height: 50px;
    border-radius: 70%;
    &:hover {
        cursor: pointer;
    }
`;

const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    }
}



const Header = () => {
    const [name, setName] = useState('Mango');
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const [profileModalOn, setProfileModalOn] = useState(false);
    const { profileRef } = useDetectProfileClick(profileModalOn, setProfileModalOn);

    const logoClick = () => {
        console.log("warping to main page...")
    }

    const profileHandler = () => {
        console.log("clicked")
        setProfileModalOn(true)
        
    }

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    }

    const throttleScroll = throttle(handleScroll, 50);

    useEffect(() => {
        documentRef.current.addEventListener("scroll", throttleScroll);
        return () => documentRef.current.removeEventListener("scroll", throttleScroll);
    }, [pageY]);



    return (
        <div>
            <HeaderArea>
                <HeaderContainer className={hide && 'hide'}>
                    <HeaderItemContainer>
                    <LogoContainer onClick={ logoClick }>
                        <LogoImage src={ logoimg } />
                        <LogoName>Spplit!</LogoName>
                    </LogoContainer>
                    <ProfileContainer>
                        <ProfileName>{ name }'s Spplit!</ProfileName>
                        <ProfileImage onClick={ profileHandler }></ProfileImage>
                    </ProfileContainer>
                    </HeaderItemContainer>
                </HeaderContainer>
                <ProfileModal modalOn={ profileModalOn } top={ 85 } right={ 45 } profileRef={ profileRef }/>
            </HeaderArea>
        </div>
    )
};

export default Header;
