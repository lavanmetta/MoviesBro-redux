import React from 'react'
import notFound from '../../images/notFound.png'
import './PageNotFound.scss'
function PageNotFound() {
  return (
    <div className='page-not-found'>
     <img src={notFound} alt="not found" />
     <p>Page not Found</p>
    </div>
  )
}

export default PageNotFound
