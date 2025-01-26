import React from 'react'

export default function ErrorPage() {
  return (
    <div className='error-page-body'>
      <span className="error-message">Oops! Error occurred!</span>
      <i className="fa-solid fa-bug bug-icon"></i> 
      <span>Couldn't find page</span>
    </div>
  )
}
