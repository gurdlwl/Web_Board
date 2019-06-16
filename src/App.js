import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Home from './Home';
import Board from './Board';
import User from './User/Login';

import './App.scss';

import Stores from './Stores';

const App = () => (
    <Provider stores={Stores}>
          <BrowserRouter>
                <header className='app-header'>
                      <ul className='menu-bar'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/board'>게시판</Link></li>
                      </ul>
                </header>

                <section className='app-body'>
                      <Route path='/' exact component={Home} />
                      <Route path='/board/:command?/:postid?' exact component={Board} />
                      <Route path='/user/login' exact component={User}/>
                </section>
          </BrowserRouter>
    </Provider>
);

/*
class App extends React.Component{

  state = {
    location: 0
  };

  render() {
    let {location} = this.state;
    return (
        <div>
          { location === 0 && <Home /> }
          { location === 1 && <Page1 /> }
          { location === 2 && <Page2 /> }
          { location === 3 && <Page3 /> }
        </div>
    );
  }
}
*/

export default App;
