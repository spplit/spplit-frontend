import React, { useState } from 'react';
import Header from '../components/Header';
import QRFloating from '../components/QRFloating';
import QRModal from '../components/QRModal';

function Main() {
    const [qrModalOn, setQrModalOn] = useState(true);

    return (
        <div>
            <Header />
            <QRFloating bottom={40} right={40} setData={setQrModalOn} data={qrModalOn} />
            <QRModal modalOn={qrModalOn} bottom={40} right={40} />
        </div>
    )
}

export default Main;