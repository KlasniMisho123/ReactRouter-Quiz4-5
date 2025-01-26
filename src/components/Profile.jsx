import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Profile() {
  let location = useLocation().pathname;
  const [currentUser, SetCurrentUser] = useState("")

  useEffect(()=>{
    if (location === "/profile" || location === "/profile/") {
      SetCurrentUser("Mixeil Silagava")
    } else {
      SetCurrentUser(location.split("/").pop())
    }
  },[])

  return (
    <div className='profile-body'>Made By {currentUser}</div>
  )
}
