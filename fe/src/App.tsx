import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
