import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import arrowRight from '../styles/images/arrowRight.png';
import axios from 'axios';
import Search from './Search';


const NavContainer = styled.div`
    background-color: white;
    background-color: #ffffff;
    z-index : 1;
    display: flex;
    width: 100%;
    height: 7rem;
    bottom: 0;
    position: fixed;
`;


const NavItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 75%;
    height: 7rem;
    margin: 0 auto;
    border-top: solid 1px #d9d9d9;
`;

const NavButton = styled.button`
    font-size: 18px;
    font-family: 'assistant-medium';
    background-color: transparent;
    border-radius: 15px;
    border: none;
    width: 9rem;
    height: 4rem;
    &:hover {
        background-color: #d9d9d9;
        cursor: pointer;
    }
    ${({ active }) =>
        active &&
        css`
          background-color: #29548e;
          &:hover {
            background: #29548e;
          }
        `}
`;

const MoreButton = styled.button`
    background-color: #29548e;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 5px;
    line-height: 100%;
    &:hover {
        background-color: #4672af;
        cursor: pointer;
    }
`;

const ArrowImage = styled.img`
    width: 0.6rem;
    vertical-align: middle;
`;

const MyQRContainer = styled.div`
    /* background-color: gray; */
    height: 100%;
    width: 7%;
`;

function NavigationBar() {
    const [clicked, setClicked] = useState(0);
    const [cardList, setCardList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/cards').then((res) => {
            setCardList(res.data)
        })
    }, []) 

    const isOn = (event) => {
        setClicked(event.target.id);
        console.log(event.target.id);
    };

    useEffect(
        (event) => {
            if (clicked !== null) {
                let clickedButton = document.getElementById(clicked);
                // console.log(clicked);
            }
        }, [clicked]
    );

    const buttons = [
        {
            id: 0,
            name: "Bookmark"
        }, {
            id: 1,
            name: "Work"
        }, {
            id: 2,
            name: "Activity"
        }, {
            id: 3,
            name: "Club"
        }];

    const buttonList = buttons.map((button, id) => {
        return (<NavButton id={id} active={clicked === id} onClick={() => setClicked(id)}>{button.name}</NavButton>)
    })

    const filter = cardList.filter((data)=>{
    
        if (buttons[clicked]["name"].toLowerCase() == data.division.toLowerCase()) {
            return data
        }

    })


    return (
        <div>
            <Search cardList={cardList} setCardList={setCardList} filter={filter}/>
            <NavContainer>
                <NavItemContainer>
                    {buttonList}
                    <MoreButton>
                        <ArrowImage src={arrowRight}></ArrowImage>
                    </MoreButton>
                </NavItemContainer>
                <MyQRContainer></MyQRContainer>
            </NavContainer>
            {/* <List result={result}/> */}
        </div>
    )
}

export default NavigationBar;