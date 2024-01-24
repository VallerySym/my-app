import React from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar  />
      <Content  />
    </div>
  );
}

export default App;
