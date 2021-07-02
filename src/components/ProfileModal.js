import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const ProfileContainer = styled.div `
    background-color: #d9d9d9;
    width: 13rem;
    height: 14rem;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileListContainer = styled.div`
    background-color: purple;
    width: 100%;
    height: 72%;
    display: flex;
    flex-direction: column;
`;

const ProfileItemContainer = styled.div `
    background-color: sandybrown;
    text-align: center;
    width: 100%;
    height: 30%;
`;


export default function ProfileModal () {
    const profileItems = [ 
        {
            name: 'MyNameCard'
        }, {
            name: 'Settings'
        }, {
            name: 'LOGOUT'
        }]
    const profileList = profileItems.map((item) => {
        return(
            <ProfileItemContainer>{ item.name }</ProfileItemContainer>
        )
    })

    return (
        <div>
            <ProfileContainer>
                <ProfileListContainer>
                    { profileList }
                </ProfileListContainer>
            </ProfileContainer>
        </div>
    )
}
