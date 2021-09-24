import React from 'react'
import axios from 'axios'
import './User.css'

const User = (props) => {

  return (
    <div className="user" onClick={props.clicked} >
        <img className="image" src={props.image} alt=""/>
        <h2 className="username">{props.name}</h2>
      
    </div>
  )
}

export default User
