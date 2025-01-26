import React from 'react'
import DotaGalleryLogo from './DotaGalleryLogo';
export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-pos'>
        <div className='footer-flex'> 
          <DotaGalleryLogo />
            <div className='reserved-p'>  All rights resevved@{currentYear}</div>         
        </div>
    </footer>
  )
}
