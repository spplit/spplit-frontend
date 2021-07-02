import React from "react"
import Card from "./Card.jsx"
import styled from "styled-components"

const ListContainer = styled.ul`
    position: absolute;
    margin-top: 17vh;
    margin-left: 10vw;
    width: 100%;
    height: 100%;
`

const List = ({ cards }) => {
    let cardList = cards.map((card) => <Card key={card.id} card={card} />)

    return <ListContainer>{cardList}</ListContainer>
}

export default List
