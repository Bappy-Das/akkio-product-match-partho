import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import FromDataProvider from './function';


function App() {
  return (
    <div className="App">
      <FromDataProvider>
          <Home/>
      </FromDataProvider>
      
    </div>
  );
}

export default App;
