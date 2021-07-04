import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import ScrollupFloating from '../components/ScrollupFloating';
import QRFloating from '../components/QRFloating';
import QRModal from '../components/QRModal';
import axios from 'axios';
import List from '../components/NameCardList';
import Search from '../components/Search';
import useDetectQrClick from '../components/useDetectQrClick';
import ProfileModal from '../components/ProfileModal';


function Main() {

    //useEffect를 사용해서 메인페이지로 들어오면 밑에 마진이 생겨서 NavBar에 명함이 가려지지 않게 하고 싶음
    // useEffect(() => {
    //     document.body.style.cssText = `
    //         padding-bottom: 100px;
    //     `;
    //     return () => {
    //         document.body.style.cssText = '';
    //     };
    // }, []);
  
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