import React from 'react'
import { Link } from 'react-router-dom'

export default function DotaGalleryLogo() {
  return (
    <Link to="/" className='dota-gallery-logo'>
         <img className="dota-img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79hGLqa1uMBuiu0oQ5257Moor52t5EOIN-Q&s"} /> 
    DotaGallery
    </Link> 
  )
}
