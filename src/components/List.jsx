import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.ul`
    position : absolute;
    margin-top : 17vh;
    margin-left : 10vw;
    width : 100%;
    height : 100%;
`;

const List = ({result}) => {

    // const [cardList, setCardList] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8080/cards').then((res) => {
    //         setCardList(res.data)

    //     })
    // }, [])  

    return (
        <ListContainer>
        {result.map((card) => 
        <Card key={card.id} card={card} />)}    
        </ListContainer>
    )
}

export default List;