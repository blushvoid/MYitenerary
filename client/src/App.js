import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Landing from './components/Landing';
import Cities from './components/Cities';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch />
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={Cities} />

    </div>
    </BrowserRouter>
  );
}

export default App;
