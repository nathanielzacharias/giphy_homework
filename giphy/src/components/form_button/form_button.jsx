import React from 'react'
import axios from 'axios'

function Form_button(props) {

    const sendRequest = async () => {
        props.returnedData = await axios.get(`${process.env.GIPHY_API_request}`);
        props.gifURL = props.returnedData.data.data.images.original.url;
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