import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import Sign from './pages/sign/sign';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  exact path='/shop' component={ShopPage} />
      <Route  exact path='/signin' component={Sign} />
      </Switch>
    
    </div>
  );
}

export default App;
