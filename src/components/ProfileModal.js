import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const ProfileContainer = styled.div `
    position: absolute;
    background-color: #d9d9d9;
    width: 11rem;
    height: 10rem;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
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
            name: 'MyNameCard'
        }, {
            id: 2,
            name: 'Settings'
        }, {
            id: 3,
            name: 'LOGOUT'
        }]
    const profileList = profileItems.map((id, item) => {
        return(
            <ProfileItemButton id={id}>
                { item.name }
            </ProfileItemButton>
        )
    })

    return (
        <div>
            {modalOn && (
                <ProfileContainer top={ top } right={ right } ref={ profileRef }>
                    <ProfileListContainer>
                        { profileList }
                    </ProfileListContainer>
                </ProfileContainer>
            )}    
        </div>
    )
}

export default ProfileModal;
