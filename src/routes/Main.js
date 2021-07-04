
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

function Main() {
  
    // const [cardList, setCardList] = useState([]);
    const { modalOn, qrButtonRef, modalRef, sizeUp, setSizeUp } = useDetectQrClick();


    return (
        <div>
            <Header />
            {/* <Search /> */}
            <QRFloating bottom={55} right={40} qrButtonRef={qrButtonRef} />
            <QRModal modalOn={modalOn} sizeUp={sizeUp} setSizeUp={setSizeUp} bottom={55} right={40} modalRef={modalRef} />
            {/* <ScrollupFloating bottom={50} right={40} /> */}
            <NavigationBar />
        </div>
    )
}

export default Main;