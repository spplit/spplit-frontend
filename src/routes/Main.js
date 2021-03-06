
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
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
        axios.get('http://localhost:8080/cards').then((res) => {
            setCardList(res.data)

        })
    }, [])

    return (
        <div>
            <Header />

            <Search />
            <List cards={cardList} />
            <QRFloating bottom={55} right={40} setData={setQrModalOn} data={qrModalOn} />
            <QRModal modalOn={qrModalOn} bottom={55} right={40} />
            {/* <ScrollupFloating bottom={50} right={40} /> */}
            <NavigationBar />
        </div>
    )
}

export default Main;