import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Profile() {
  const [currentUser,SetCurrentUser] = useState("")
  return (
    <div className='profile-body'>Mixeil Silagava</div>
  )
}
