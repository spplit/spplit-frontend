import { Route, Link } from 'react-router-dom';
import React from 'react';
import Settings from './Settings';
import MyNameCard from './MyNameCard';

// function for nested routing
function MyPage({ match }) {
    return (
        <>
            <Route path="/mypage/settings" component={Settings} />
            <Route path="/mypage/mycard" component={MyNameCard} />
        </>
    )
}

export default MyPage;