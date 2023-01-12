import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopMenu from './template/main/TopMenu';
import Main from './template/main/main';
import Purchase from './template/purchase/Purchase';
import 'bootstrap/dist/css/bootstrap.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
        <TopMenu />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/logo' element={<Main />}></Route>
          <Route path='/purchase/*' element={<Purchase />}></Route>
          <Route path='/material' element={<Main />}></Route>
        </Routes>
    </div>
  );
}

export default App;
