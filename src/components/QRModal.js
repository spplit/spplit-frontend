import React, { useState } from 'react'
import styled from 'styled-components'
import QRCode from "react-qr-code";

const QRContainer = styled.div`
    background-color: #D9D9D9; 
    width: 250px;
    height: 250px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position : fixed;
    z-index: 3;
    bottom: ${(props) => `${props.bottom + 70}px`};
    right: ${(props) => `${props.right + 50}px`};
`

function QRModal({ modalOn, bottom, right }) {

    return (
        <div>
            {modalOn && (<QRContainer bottom={bottom} right={right}>
                <QRCode value="hello" size={150} />
            </QRContainer>)
            }
        </div >
    )
}

export default QRModal