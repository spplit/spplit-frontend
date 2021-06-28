import React from 'react';
import Header from '../components/Header';
import QRFloating from '../components/QRFloating';
import QRModal from '../components/QRModal';

function Main() {
    return (
        <div>
            <Header />
            <QRFloating bottom={40} right={40} />
            <QRModal bottom={40} right={40} />
        </div>
    )
}

export default Main;