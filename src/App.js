import "./App.scss";
import links from './data/links.json';
// import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Links</h1>
      <ul>
        {links.map((link, index) => {

          return (
            <li key={index}>
              <a target="_blank" href={link.url} rel="noreferrer">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
