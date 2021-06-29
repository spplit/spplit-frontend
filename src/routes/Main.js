import React from 'react';
import Header from '../components/Header';
import ScrollupFloating from '../components/ScrollupFloating';

function Main() {
    return (
        <div>
            <Header />
            <ScrollupFloating bottom={80} right={40} />
        </div>
    )
}

export default Main;