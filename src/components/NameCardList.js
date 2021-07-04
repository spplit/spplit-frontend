import React, { useState, useEffect } from 'react';
import Card from './NameCard.js';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.ul`
    position: absolute;
    margin-top: 10vh;
    margin-left: 10vw;
    width: 100%;
    height: 100%;
`;

const LastCard = styled.div`
    width: 100%;
    height: 9rem;
    background-color: transparent;
`;

const List = ({ result }) => {
    // const [cardList, setCardList] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8080/cards').then((res) => {
    //         setCardList(res.data)

    //     })
    // }, [])

    return (
        <div>
            <ListContainer>
                {result.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
                <LastCard />
            </ListContainer>
            
        </div>
    );
};

export default List;
