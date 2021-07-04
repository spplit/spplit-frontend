import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import styled from 'styled-components';
import searchImg from "../styles/images/search.png";
import List from './NameCardList';

const SearchArea = styled.div`
    position: relative;
    width: 100vw;
    height: 3vw;
`;

const SearchContainer = styled.div`
    display : inline-block;
    background-color : #ffffff;
    width : 100vw;
    height : 3vw;
    position: fixed;
    z-index : 1;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    transition: 0.4s ease;
    &.hide {
        transform: translateY(-6rem);
    }
`;

const SearchContents = styled.input`
    transition: width .25s linear;
    width : 20%;
    height: 50%;
    font-family: "assistant-regular";
    background-color: #d9d9d9;
    color: #29548e;
    border: none;
    font-size : 1rem;
    border-radius : 0.6rem;
    padding : 1vh;
    margin-left : 10vw;
    padding-left: 0.8rem;
    &:focus {
        outline: none;
        width: 23%;
    }
`;

const SearchButton = styled.img`
    width : 25px;
    height : 25px;
    margin-left : 0.8vw;
    margin-top : 1vh;
    vertical-align: top;
    &:hover{
        cursor: pointer;
    }
`; 

const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    }
}

const Search = ({filter}) => {
    const [query, setQuery] = useState(null);
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    }

    const throttleScroll = throttle(handleScroll, 50);

    useEffect(() => {
        documentRef.current.addEventListener("scroll", throttleScroll);
        })
        return () => documentRef.current.removeEventListener("scroll", throttleScroll);
    }, [pageY]);

    
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

    const result = filter.filter((data)=>{

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
            <SearchArea>
                <SearchContainer className={hide && 'hide'}>
                    <SearchContents placeholder="검색해보세요!" value={query} onChange={e => setQuery(e.target.value)} onKeyPress={onEnterPress}/>
                    <SearchButton src={searchImg} onClick={btnClick} />
                </SearchContainer>
                <List result={result}/>
            </SearchArea>
        </div>
    )
}
export default Search;
