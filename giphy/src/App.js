import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Form_button from './components/form_button/form_button';
import Title_header from './components/title_header/title_header.jsx'

function App() {
  let returnedData = ""
  let gifURL = ""

  return (
    <div className="container">
      <Title_header />
      <Form_button returnedData="" gifURL="" />
      <div>
        <img src={gifURL}></img>
      </div>
      {console.log('returnedData :', returnedData)}
      {console.log('gifURL :', gifURL)}
    </div>
  );
}

export default App;
