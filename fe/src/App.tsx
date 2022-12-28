import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopMenu from './template/main/TopMenu';
import Main from './template/main/main';

const App = (): JSX.Element => {
  return (
    <div className="App">
        <TopMenu />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/logo" element={<Main />}></Route>
        </Routes>
    </div>
  );
}

export default App;
