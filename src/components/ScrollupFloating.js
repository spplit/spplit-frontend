import React from 'react';
import styled from 'styled-components';

const ScrollFloatButton = styled.a`
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
	width:40px;
	height:40px;
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

function ScrollupFloating(props) {
    const { bottom, right } = props;
    const clickHandler = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <ScrollFloatButton bottom={bottom} right={right} onClick={clickHandler}>
                up
            </ScrollFloatButton>
        </div>
    )
}

export default ScrollupFloating