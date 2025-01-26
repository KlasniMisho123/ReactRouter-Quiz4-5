import React from 'react'

export default function ErrorPage() {
  return (
    <div className='error-page-body'>
      <div className='error-div'> 
        <i className="fa-solid fa-bug bug-icon"></i> 
        <span> Opps! Error occurred! </span>
        <span>Couldn't find page</span>
      </div>
    </div>
  )
}
