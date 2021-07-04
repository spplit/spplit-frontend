import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import AddNameCardModal from '../components/AddNameCardModal';
import useDetectAddClick from '../components/useDetectAddClick';
import styled from "styled-components";
import Header from "../components/Header";

const CardListContainer = styled.div`
    background-color: #eaeaea;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 3rem;
    width: 55rem;
    height: 100rem;
    border-radius: 15px;
`;

const AddButtonContainer = styled.div `
    background-color: #d9d9d9;
    border-radius: 15px;
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CardListTitle = styled.div`
    font-family: Assistant-medium;
    font-size: 2rem;
    margin-left: 2rem;
`;

const AddButton = styled.button`
    background-color: #4672af;
    font-family: "assistant-semibold";
    font-size: 10rem;
    width: 4rem;
    height: 4rem;
    font-size: 25px;
    text-align : center;
    border-radius: 50px;
    border: none;
    margin-left: auto;
    margin-right: 1rem;
    transition: 0.3s;
    transition: box-shadow 300ms cubic-bezier(0.41, 0.25, 0.08, 1) 0ms;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.15);
    &:hover {
        background-color: #29548e;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.25), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    }
`;

const CardContainer = styled.div`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    height: 200px;
    border: none;
    transition: box-shadow 300ms cubic-bezier(0.41, 0.25, 0.08, 1) 0ms;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    margin: 1.5rem 3rem;
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

const BottomContainer = styled.div`
    width: 100%;
    height: 100px;
`

const Footer = styled.div`
    width: 100%;
    height: 6rem;
    bottom: 0;
`



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
            <Header />
            <CardListContainer>
                <AddButtonContainer>
                    <CardListTitle>My NameCard</CardListTitle>
                    <AddButton onClick={addHandler}>+</AddButton>
                </AddButtonContainer>
            
            <AddNameCardModal addModalOn={addModalOn} setAddModalOn={setAddModalOn} myCard={myCard} setMyCard={setMyCard} addRef={addRef}/>
            {myCard.map((myCard) => 
                <CardContainer id={myCard.id}>
                    <ProfileContainer>
                        <ProfileName>{myCard.name}</ProfileName>
                        <ProfileJob>{myCard.job}</ProfileJob>
                    </ProfileContainer>
                    <PhotoContainer>
                        <PhotoImage src={myCard.imgUrl} alt="photo" />
                    </PhotoContainer>
                </CardContainer>)}   
            <BottomContainer></BottomContainer>
            </CardListContainer>
            <Footer />
        </div>
        )
    }

export default MyNameCard;