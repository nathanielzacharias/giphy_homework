import React from 'react'

function ShowGIF(props) {
  return (
    <div>
        <img src={props.gifURL}></img>
    </div>
  )
}

export default ShowGIF