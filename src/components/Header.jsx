import React, { useEffect, useState } from 'react'
import DotaGalleryLogo from './DotaGalleryLogo'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  let location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname)

  function handleSelectedNav(selected) {
    setCurrentPage(selected)
  }

  useEffect(()=>{
    if(location.pathname==="/") {
      setCurrentPage("")
    } else {
      setCurrentPage(location.pathname)
    }
  },[location])

  return (
    <header>
      <div className='header-pos'> 
      <button onClick={()=>{handleSelectedNav("")}} className={"invisible-btn " + (currentPage === "" ? 'active-page-button' : "")}> <DotaGalleryLogo /> </ button>
        <nav className='nav-bar'>
          <button onClick={()=>{handleSelectedNav("")}} className={currentPage === "" ? 'active-page-button' : ""}> <Link to="/">Home</Link> </button>
          <button onClick={()=>{handleSelectedNav("/gallery")}} className={currentPage === "/gallery" ? 'active-page-button' : ""}> <Link to="/gallery">Gallery</Link> </button>
          <button onClick={()=>{handleSelectedNav("/profile")}} className={currentPage === "/profile" ? 'active-page-button' : ""}> <Link to="/profile">Profile</Link> </button>
        </nav>
      </div>
    </header>
  )
}
