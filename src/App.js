import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';
import Widget from './Widget';
import Login from './Login';

function App() {
  const user = "";
  return (
    <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />
            <div className="app__body">
          <Sidebar />
        <Feed />
        <Widget />
      </div>
      </>
        )}
        
    </div>
  );
}

export default App;
