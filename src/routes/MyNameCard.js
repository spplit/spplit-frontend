import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import AddCard from '../components/AddCard';
import useDetectAddClick from '../components/useDetectAddClick';
import styled from "styled-components"

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 750px;
    height: 250px;
    border: 1px solid black;
    border-radius: 30px;
    margin-bottom: 1rem;
    &:hover {
        cursor: pointer;
    }
    margin-top : 50px;
    margin-left : 50px;
`

const ProfileContainer = styled.div`
    width: 40%;
    height: 40%;
    margin: 30px;
`

const ProfileName = styled.div`
    font-family: "assistant-semibold";
    font-size: 32px;
    margin-bottom: 1rem;
`

const ProfileJob = styled.div`
    font-family: "assistant-regular";
    font-size: 28px;
    margin-bottom: 1rem;
`

const ProfilePhone = styled.div`
    font-family: "assistant-regular";
    font-size: 28px;
    margin-bottom: 1rem;
`

const ProfileEmail = styled.div`
    font-family: "assistant-regular";
    font-size: 28px;
    margin-bottom: 1rem;
`

const PhotoContainer = styled.div`
    width: 40%;
    height: 80%;
    margin: 30px;
    border: 1px solid #707070;
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

const BottomContainer = styled.div`
    width: 100%;
    height: 100px;
`

const AddButton = styled.button`
    font-family: "assistant-semibold";
    font-size: 25px;
    text-align : center;
    margin-top : 50px;
    margin-left : 50px;
`;

function MyNameCard() {

    const [myCard, setMyCard] = useState([])
    const [addModalOn, setAddModalOn] = useState(false)
    const { addRef } = useDetectAddClick(addModalOn, setAddModalOn)

    // 명함추가 모달 관리
    const addHandler = () => {
        setAddModalOn(true)
    }

    // 초기 데이터 fetch
    useEffect(() => {
        axios.get('http://localhost:8080/mycards').then((res) => {
            setMyCard(res.data)
        })
    }, []) 

    // myCard state 변경될 때마다 실행 (명함 추가, 삭제 시)
    useEffect(() => {
        setMyCard(myCard);
      }, [myCard]);


    return (
        <div>
            <AddButton onClick={addHandler}>Create my own NameCard</AddButton>
            <AddCard addModalOn={addModalOn} setAddModalOn={setAddModalOn} myCard={myCard} setMyCard={setMyCard} addRef={addRef}/>
            {myCard.map((myCard) => 
                <CardContainer id={myCard.id}>
                    <ProfileContainer>
                        <ProfileName>{myCard.name}</ProfileName>
                        <ProfileJob>{myCard.job}</ProfileJob>
                        <ProfilePhone>{myCard.phone}</ProfilePhone>
                        <ProfileEmail>{myCard.email}</ProfileEmail>
                    </ProfileContainer>
                    <PhotoContainer>
                        <PhotoImage src={myCard.imgUrl} alt="photo" />
                    </PhotoContainer>
                </CardContainer>)}   
            <BottomContainer></BottomContainer>
        </div>
        )
    }

export default MyNameCard;