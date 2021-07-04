import React, { useState } from "react";
import styled from "styled-components";
import NameCardModal from "./NameCardModal.js";
import useDetectItemClick from "./useDetectNameCardClick";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    height: 200px;
    border: none;
    transition: box-shadow 300ms cubic-bezier(0.41, 0.25, 0.08, 1) 0ms;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    margin-bottom: 2.3rem;
    &:hover {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.25), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`

const ProfileContainer = styled.div`
    width: 45%;
    height: 40%;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
    padding-left: 1.3rem;

    
`

const ProfileName = styled.div`
    font-family: "assistant-semibold";
    font-size: 25px;
    margin-bottom: 10px;
`

const ProfileJob = styled.div`
    font-family: "assistant-regular";
    font-size: 19px;
    margin-bottom: 4rem;
`

const ProfileTags = styled.div`
    font-family: "assistant-light";
    font-size: 20px;

`

const Tag = styled.span`
    width: 2rem;
    background-color: #d9d9d9;
    margin-right: 0.8rem;
    text-align: center;
    padding: 0.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 5px;
`;

const PhotoContainer = styled.div`
    width: 50%;
    height: 100%;
    margin-left: auto;
    border: none;
    border-radius: 15px;
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
                            <Tag>{tag} </Tag>
                        ))}
                    </ProfileTags>
                </ProfileContainer>
                <PhotoContainer>
                    <PhotoImage src={card.imgUrl}></PhotoImage>
                </PhotoContainer>
            </CardContainer>
            <NameCardModal modalOn={itemModalOn} card={card} top={250} left={300} itemRef={itemRef} />
        </div>
    )
}

export default Card;
