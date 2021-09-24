import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User';

const Profile = () => {
    const [profile,setProfile] = useState([])
    console.log(profile);
    

    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2")
        .then(res=>setProfile(res.data.data)
        )
    },[])

    // const profileClicked = (id) =>{
    //     // axios.get(`"https://reqres.in/api/users/${id}"`).then(
    //     //     res=>console.log(res)4
            
    //     )
        
    // }

  return (
    <div className="profile">
        {profile.map((user)=>{
            return (
                <User 
                key={user.id}
                name={`${user.first_name} ${user.last_name}`}
                image={user.avatar}
                clicked={()=>profileClicked(user.id)}
                />
            )
        })}

      
    </div >
  )
}

export default Profile
