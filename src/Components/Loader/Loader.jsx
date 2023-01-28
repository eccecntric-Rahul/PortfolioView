import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div id='wrapper'>
    <div id='loading'>
      <div class='bulletouter'>
        <div class='bulletinner'></div>
        <div class='mask'></div>
        <div class='dot'></div>
      </div>
      <p>loading...</p>
    </div>
  </div>
  
  )
}

export default Loader