
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ScrollupFloating from '../components/ScrollupFloating';
import QRFloating from '../components/QRFloating';
import QRModal from '../components/QRModal';
import axios from 'axios';
import List from '../components/List';
import Search from '../components/Search';

function Main() {
    const [qrModalOn, setQrModalOn] = useState(false);
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/cards').then((res)=> {
            setCardList(res.data)

        })
    }, [])

    return (
        <div>
            <Header />
            <Search />
            <List cards={cardList}/>
            <QRFloating bottom={40} right={100} setData={setQrModalOn} data={qrModalOn} />
            <QRModal modalOn={qrModalOn} bottom={40} right={100} />
            <ScrollupFloating bottom={50} right={40} />
        </div>
    )
}

export default Main;