import axios from 'axios'
import React, { useState } from 'react';

function Form_button(props) {

    const sendRequest = async () => {
        // props.returnedData = await axios.get(`${process.env.GIPHY_API_request}`);
        // props.gifURL = props.returnedData.data.data.images.original.url;
    
        // setReturnedData(await axios.get(`${process.env.GIPHY_API_request}`))
        props.setReturnedData = () => {await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=KGSl8OH7mlaXczeymeh8mG8ABxy7vAg2&tag=&rating=g`)}
        console.log('returnedData2 :', props.returnedData)
        props.setGifURL(props.returnedData.data.data.images.original.url)
        console.log('gifURL2 :', props.gifURL)
      }


    return (
        <div className="container">

            {/* <form action={ `${process.env.GIPHY_API_request}` } method="GET" name="outgoingRequest"> 
            <button type="submit">Gimme random</button>
            </form> */}

            <button onClick={sendRequest}>Gimme random</button>


        </div>
    )
}

export default Form_button