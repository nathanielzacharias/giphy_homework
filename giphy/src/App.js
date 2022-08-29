import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Form_button from './components/form_button/form_button';
import Title_header from './components/title_header/title_header.jsx'

function App() {
  // let returnedData = ""
  // let gifURL = ""

  const [returnedData, setReturnedData] = useState("")
  const [gifURL, setGifURL] = useState("")

  console.log('returnedData1 :', returnedData)
  console.log('gifURL1 :', gifURL)

  const sendRequest = async () => {
    // props.returnedData = await axios.get(`${process.env.GIPHY_API_request}`);
    // props.gifURL = props.returnedData.data.data.images.original.url;

    // setReturnedData(await axios.get(`${process.env.GIPHY_API_request}`))
    setReturnedData(await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=KGSl8OH7mlaXczeymeh8mG8ABxy7vAg2&tag=&rating=g`))
    console.log('returnedData2 :', returnedData)
    setGifURL(returnedData.data.data.images.original.url)
    console.log('gifURL2 :', gifURL)
  }

  return (
    <div className="container">

      <Title_header />

      {/* <Form_button returnedData setReturnedData gifURL setGifURL/> */}
      <button onClick={sendRequest}>Gimme random</button>

      <div>
        <img src={gifURL}></img>
      </div>

      {console.log('returnedData :', returnedData)}
      {console.log('gifURL :', gifURL)}

    </div>
  );
}

export default App;
