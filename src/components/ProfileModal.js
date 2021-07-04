import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: transparent; 
    z-index: 4;
`;

const ProfileContainer = styled.div `
    position: fixed;
    background-color: #d9d9d9;
    width: 11rem;
    height: 10rem;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2);
    top: ${(props) => `${props.top}px`};
    right: ${(props) => `${props.right}px`};
`;

const ProfileListContainer = styled.div`
    width: 100%;
    height: 72%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProfileItemButton = styled.button `
    background-color: transparent;
    text-align: center;
    border: none;
    width: 100%;
    height: 30%;
    &:hover {
        background-color: #bebebe;
        cursor: pointer;
    }
`;


const ProfileModal = ({modalOn, top, right, profileRef}) => {
    
    const profileItems = [ 
        {
            id: 1,
            url: '/mypage/mycard',
            name: 'MyNameCard'
        }, {
            id: 2,
            url: '/mypage/settings',
            name: 'Settings'
        }, {
            id: 3,
            name: 'LOGOUT'
        }]


    const profileList = profileItems.map((item, id) => {
        return(
            // 내 명함 등록하는 페이지로 넘어가는 링크인데 링크를 걸면 배경이...옹졸해짐
            // <Link to ={ item.url } style={{height: '100%'}}>
                <ProfileItemButton id={id}>
                    { item.name }
                </ProfileItemButton>
            // </Link>
        )
    })

    return (
        <div>
            {modalOn && (
                <Background>
                    <ProfileContainer top={ top } right={ right } ref={ profileRef }>
                        <ProfileListContainer>
                            { profileList }
                        </ProfileListContainer>
                    </ProfileContainer>
                </Background>
            )}    
        </div>
    )
}

export default ProfileModal;
