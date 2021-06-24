import { Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import Landing from './routes/Landing';
import Login from './routes/Login';
import SignUp from './routes/SignUp'
import Main from './routes/Main';
import NotFound from './routes/NotFound';
import MyPage from './routes/MyPage';

function App() {
  return (
    <div>
      <header>
        <Link to="/login">
          <button>login</button>
        </Link>
        <Link to="/singup">
          <button>singup</button>
        </Link>
        <Link to="/main">
          <button>main</button>
        </Link>
        <Link to="/mypage/settings">
          <button>settings</button>
        </Link>
        <Link to="/mypage/mycard">
          <button>namecard</button>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/singup" component={SignUp} />
        <Route path="/main" component={Main} />
        <Route path="/mypage" component={MyPage} />
        <Route component={NotFound} />
      </Switch>
    </div>

  );
}

export default App;
