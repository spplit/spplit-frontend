import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import searchImg from "../styles/images/search.png";
import List from '../components/List';

const SearchContainer = styled.div`
    display : inline-block;
    background-color : #ffffff;
    width : 100vw;
    height : 3vw;
    position: fixed;
    margin-top : 5vw;
    z-index : 1;
`;

const SearchContents = styled.input`
    width : 22%;
    height: 50%;
    font-family: "assistant-regular";
    color: #29548e;
    font-size : 1.3rem;
    border: 0.1rem solid #32558A;
    border-radius : 1.5rem;
    padding : 1vh;
    margin-left : 10vw;
`;

const SearchButton = styled.img`
    width : 35px;
    height : 35px;
    margin-left : 1vw;
    margin-top : 1vh;
    vertical-align: top;
    &:hover{
        cursor: pointer;
    }
`; 

const Search = () => {
    const [cardList, setCardList] = useState([])
    const [query, setQuery] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8080/cards').then((res) => {
            setCardList(res.data)
        })
    }, []) 
    
    // Enter시 btn클릭과 동일효과
    const onEnterPress = (e) => {
        if (e.key == 'Enter') {
            console.log("entered")
            btnClick();
        }
    }

    // btn 클릭시 value값을 query에 담아서 서버에 요청(?) -> 검색결과창이 따로 필요할듯
    const btnClick = () => {
        console.log("clicked")
        console.log(query)
        
        // async function get() {
        //     const result = await axios(`http://localhost:8080/cards?query=${query}`)
        //     setData(result.data)
        // }

        // get()
    }

    const result = cardList.filter((data)=>{

        const tagCheck = (query, tagList) => {
            let x = false;
            for (var i in tagList) {
                for (let j = 0; j < tagList.length; ++j){
                    if (tagList[j].toLowerCase().includes(query.toLowerCase())) {
                        x = true
                    }
                }
                return x;
                }
            }

        if(query == null) {
            return data
        }

        else if(data.name.toLowerCase().includes(query.trim().toLowerCase()) || data.job.toLowerCase().includes(query.trim().toLowerCase()) 
            || data.phone.includes(query.trim().toLowerCase()) || data.email.toLowerCase().includes(query.trim().toLowerCase()) 
            || data.notes.toLowerCase().includes(query.trim().toLowerCase()) || (tagCheck(query.trim(), data.tags))){
            return data
        }

    })


    return (
        <div>
            <SearchContainer>
                <SearchContents placeholder="검색해보세요!" value={query} onChange={e => setQuery(e.target.value)} onKeyPress={onEnterPress}/>
                <SearchButton src={searchImg} onClick={btnClick} />
            </SearchContainer>
            <List result={result}/>
        </div>
    )
}
export default Search;
