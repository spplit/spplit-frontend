import React from 'react'
import styled from 'styled-components';

const FloatingButton = styled.a`
    position:fixed;
    z-index: 2;
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
    &:active{
        box-shadow: 1px 1px 2px #999;
    }
`

function QRFloating(props) {
    const { bottom, right, qrButtonRef } = props;

    return (
        <div>
            <FloatingButton bottom={bottom} right={right} ref={qrButtonRef}>
                QR
            </FloatingButton>
        </div>
    )
}

export default QRFloating;