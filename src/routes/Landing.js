import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logoimg from '../styles/images/spplit_logo.png';
import appleLogo from '../styles/images/appleLogo.png';
import windowsLogo from '../styles/images/windowsLogo.png';
import LandingImange from '../styles/images/SpplitLanding.png';

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
    margin-right: 0.8rem;
    width: 6rem;
    height: 2rem;
    font-family: "assistant-semibold";
    border: none;
    border-radius: 15px;
    background-color: transparent;
    font-size: 20px;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
        background-color: #29548e;
        color: white;
    }
    
`;

const MainBox = styled.div`
    /* background-color: purple; */
    width: 100%;
    height: 50rem;
    display: flex;
`;

const ImageBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Image = styled.img`
    margin: auto;
    display: inline-block;
    width: 55rem;
    margin-left: 15rem;
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
    flex-direction: row;
    margin: 0 auto;
`;

const DownloadButton = styled.div`
    background-color: #29548e;
    width: 10rem;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
        background-color: #4672af;
    }
`;

const DownloadText = styled.div`
    color: white;
    font-family: Assistant-Bold;
    margin-left: 0.3rem;
`;

const DownloadImage = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.3rem;
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
                        <Link to="/signup"><LandingLink>SIGN UP</LandingLink></Link>
                        <Link to="/login"><LandingLink>LOG IN</LandingLink></Link>
                    </LinkContainer>
                </HeaderItemContainer>
                </HeaderContainer>
                <MainBox>
                    <ImageBox>
                        <Image src={ LandingImange } />
                    </ImageBox>
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