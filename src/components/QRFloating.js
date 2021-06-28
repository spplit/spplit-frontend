import React, { useState } from 'react'
import styled from 'styled-components';

const FloatingButton = styled.a`
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
	width:60px;
	height:60px;
	bottom:${(props) => `${props.bottom}px`};
	right:${(props) => `${props.right}px`};
    border-radius:50px;
	box-shadow: 2px 2px 3px #999;
    background-color: #4672AF;
    color: white;
    &:hover{
        cursor: pointer;
    }
`

function QRFloating({ bottom, right }) {
    return (
        <div>
            <FloatingButton bottom={bottom} right={right}>
                QR
            </FloatingButton>
        </div>
    )
}

export default QRFloating;