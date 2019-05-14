import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import './App.scss';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const App = () => (
    <BrowserRouter>
          <header className='app-header'>
                <ul className='menu-bar'>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/Page1'>Page 1</Link></li>
                      <li><Link to='/Page2'>Page 2</Link></li>
                      <li><Link to='/Page3'>Page 3</Link></li>
                </ul>
          </header>

          <section className='app-body'>
                <Route path='/' exact component={Home} />
                <Route path='/Page1' component={Page1} />
                <Route path='/Page2' component={Page2} />
                <Route path='/Page3' component={Page3} />
          </section>
    </BrowserRouter>
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
