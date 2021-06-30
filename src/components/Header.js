import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logoimg from '../styles/images/spplit_logo.png';

const HeaderContainer = styled.div`
    background-color: white;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 6rem;
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



function Header() {
    const [name, setName] = useState('Mango');

    const logoClick = () => {
        console.log("warping to main page...")
    }
    
    const profileClick = () => {
        console.log("clicked")

    }

    return (
        <div>
            <HeaderContainer>
                <HeaderItemContainer>
                <LogoContainer onClick={ logoClick }>
                    <LogoImage src={ logoimg } />
                    <LogoName>Spplit!</LogoName>
                </LogoContainer>
                <ProfileContainer>
                    <ProfileName>{ name }'s Spplit!</ProfileName>
                    <ProfileImage onClick={ profileClick }></ProfileImage>
                </ProfileContainer>
                </HeaderItemContainer>
            </HeaderContainer>
        </div>
    )
};

export default Header;
