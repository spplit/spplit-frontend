import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import QRCode from "react-qr-code";
import { ImZoomIn } from "react-icons/im"
import { ImZoomOut } from "react-icons/im"

const QRBoxContainer = styled.div`
    background-color: white; 
    width: 300px;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
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
const SizeupModal = styled.div`
    position: fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); 
    z-index: 3;
`
const QRcontainer = styled.div`
/* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 90%;
    width: 100%;
`
const SizeupQRBoxContainer = styled.div`
    background-color: white; 
    width: 450px;
    height: 450px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
`

const IconContainer = styled.div`
/* background-color: yellow; */
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0.4rem;
    &:hover{
        cursor: pointer;
    }
`
const IconText = styled.span`
    margin-left: 0.3rem;
    font-size: 0.9rem;
    font-family: 'PTSerif-bold';
`

function QRModal({ modalOn, sizeUp, setSizeUp, bottom, right, modalRef }) {
    const sizeupHandler = () => {
        setSizeUp(true)
    }
    const sizedownHandler = () => {
        setSizeUp(false)
    }

    //moalOn&&sizeUp : true > 큰 사이즈 modal
    //modalOn : true, sizeUp : false > 작은 사이즈 modal
    //modalOn : false > modal X
    return (
        <>
            {modalOn ? (sizeUp ?
                <SizeupModal>
                    <SizeupQRBoxContainer ref={modalRef}>
                        <QRcontainer>
                            <QRCode value="Mango" size={380} />
                        </QRcontainer>
                        <IconContainer onClick={sizedownHandler}>
                            <ImZoomOut size="1.2rem" />
                            <IconText>작게보기</IconText>
                        </IconContainer>
                    </SizeupQRBoxContainer>
                </SizeupModal> :
                <Modal>
                    <QRBoxContainer bottom={bottom} right={right} ref={modalRef}>
                        <QRcontainer>
                            <QRCode value="Mango" size={230} />
                        </QRcontainer>
                        <IconContainer onClick={sizeupHandler}>
                            <ImZoomIn size="1.2rem" />
                            <IconText>크게보기</IconText>
                        </IconContainer>
                    </QRBoxContainer>
                </Modal>) : null}
        </>
    )
}

export default QRModal