import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logoimg from '../styles/images/spplit_logo.png';
import appleLogo from '../styles/images/appleLogo.png';
import windowsLogo from '../styles/images/windowsLogo.png';

const OuterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderContainer = styled.div`
    /* background-color: aqua; */
    display: flex;
    align-items: center;
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

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    display: flex;
`;

const LandingLink = styled.button`
    font-family: "assistant-semibold";
    border: none;
    background-color: transparent;
    font-size: 20px;
    
`;

const MainBox = styled.div`
    /* background-color: purple; */
    width: 100%;
    height: 50rem;
    display: flex;
`;

const ImageBox = styled.div`
    width: 50%;
    background-color: aliceblue;
`;

const TextBox = styled.div`
    width: 50%;
    /* background-color: antiquewhite; */
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

`;

const MainText = styled.p`
    font-family: Assistant-bold;
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0;
`;

const SubText = styled.p`
    font-family: Assistant-Regular;
    margin-top: 0;
    margin-bottom: 4rem;
`;

const DownloadContainer = styled.div`
    display: flex;
    margin: 0 auto;
`;

const DownloadButton = styled.div`
    background-color: #29548e;
    width: 10rem;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        box-shadow: 3px #d9d9d9;
    }
`;

const DownloadText = styled.p`
    color: white;
    width: 1rem;
    height: 1rem;
    font-family: Assistant-Bold;
`;

const DownloadImage = styled.image`
    width: 100px;
    height: 100px;

`;



function Landing() {

    return (
        <div>
            <OuterContainer>
                <HeaderContainer>
                <HeaderItemContainer>
                    <LogoContainer>
                        <LogoImage src={ logoimg } />
                        <LogoName>Spplit!</LogoName>
                    </LogoContainer>
                    <LinkContainer>
                        <LandingLink>SIGN UP</LandingLink>
                        <LandingLink>LOG IN</LandingLink>
                    </LinkContainer>
                </HeaderItemContainer>
                </HeaderContainer>
                <MainBox>
                    <ImageBox></ImageBox>
                    <TextBox>
                        <MainText>
                            Still Not Spplitting?
                        </MainText>
                        <SubText>
                            Stop looking through the heap of papers - let’s be professional
                        </SubText>
                        <DownloadContainer>
                            <DownloadButton>
                                <DownloadImage src={ windowsLogo } />
                                <DownloadText>DOWNLOAD</DownloadText>
                            </DownloadButton>
                            <DownloadButton>
                                <DownloadImage src={ appleLogo } />
                                <DownloadText>DOWNLOAD</DownloadText>
                            </DownloadButton>
                        </DownloadContainer>
                    </TextBox>
                </MainBox>
            </OuterContainer>
        </div>
    )
};

export default Landing;