import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import QRCode from "react-qr-code";

const QRContainer = styled.div`
    background-color: white; 
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
const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); 
    z-index: 3;
`

function QRModal({ modalOn, bottom, right, modalRef }) {

    return (
        <>
            {modalOn ? (
                <Modal>
                    <QRContainer bottom={bottom} right={right} ref={modalRef}>
                        <QRCode value="Mango" size={150} />
                    </QRContainer>
                </Modal>
            ) :
                null
            }
        </>
    )
}

export default QRModal