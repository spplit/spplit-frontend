import React, { useState } from "react"
import styled from "styled-components"
import Item from "./Item.jsx"
import useDetectItemClick from "./useDetectItemClick"

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 750px;
    height: 250px;
    border: 1px solid #707070;
    border-radius: 30px;
    margin-bottom: 1rem;
    &:hover {
        cursor: pointer;
    }
`

const ProfileContainer = styled.div`
    width: 40%;
    height: 40%;
    margin: 30px;
`

const ProfileName = styled.div`
    font-family: "assistant-semibold";
    font-size: 32px;
    margin-bottom: 10px;
`

const ProfileJob = styled.div`
    font-family: "assistant-regular";
    font-size: 28px;
    margin-bottom: 50px;
`

const ProfileTags = styled.div`
    font-family: "assistant-medium";
    font-size: 30px;
`

const PhotoContainer = styled.div`
    width: 40%;
    height: 75%;
    border: 1px solid #707070;
    border-radius: 15px;
    margin: 30px;
    background-color: #d9d9d9;
    object-fit: fill;
`

const PhotoImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: fill;
`

const Card = ({ card }) => {
    const [itemModalOn, setItemModalOn] = useState(false)
    const { itemRef } = useDetectItemClick(itemModalOn, setItemModalOn)

    const itemHandler = () => {
        const id = card.id
        console.log(id, "가 클릭됨")
        setItemModalOn(true)
    }

    return (
        <div>
            <CardContainer className="card" id={card.id} onClick={itemHandler}>
                <ProfileContainer>
                    <ProfileName>{card.name}</ProfileName>
                    <ProfileJob>{card.job}</ProfileJob>
                    <ProfileTags>
                        {card.tags.map((tag) => (
                            <span>{tag} </span>
                        ))}
                    </ProfileTags>
                </ProfileContainer>
                <PhotoContainer>
                    <PhotoImage src={card.imgUrl}></PhotoImage>
                </PhotoContainer>
            </CardContainer>
            <Item modalOn={itemModalOn} card={card} top={250} left={300} itemRef={itemRef} />
        </div>
    )
}

export default Card
