
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import ScrollupFloating from '../components/ScrollupFloating';
import QRFloating from '../components/QRFloating';
import QRModal from '../components/QRModal';
import axios from 'axios';
import List from '../components/List';
import Search from '../components/Search';
import useDetectQrClick from '../components/useDetectQrClick';
import useDetectItemClick from '../components/useDetectItemClick';

function Main() {
    const [cardList, setCardList] = useState([]);
    const { modalOn, qrButtonRef, modalRef } = useDetectQrClick();
    // const { itemModalOn, setItemModalOn, itemRef } = useDetectItemClick();
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
            <QRFloating bottom={55} right={40} qrButtonRef={qrButtonRef} />
            <QRModal modalOn={modalOn} bottom={55} right={40} modalRef={modalRef} />
            {/* <ScrollupFloating bottom={50} right={40} /> */}
            <NavigationBar />
        </div>
    )
}

export default Main;