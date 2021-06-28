import React, { useState } from 'react'
import styled from 'styled-components'

const QRContainer = styled.div`
    background-color: #D9D9D9; 
    width: 250px;
    height: 250px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position : absolute;
    z-index: 1;
    bottom: ${(props) => `${props.bottom + 50}px`};
    right: ${(props) => `${props.right + 50}px`};
`

function QRModal({ bottom, right }) {
    const [modalOn, setModal] = useState(true);
    return (
        <div>
            {modalOn &&
                (<QRContainer bottom={bottom} right={right}>
                    value
                </QRContainer>)}
        </div>
    )
}

export default QRModal