import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <nav className='nav'>
      <img src='favicon.png' alt='main' />
      <h1>TextTo<span>Speech</span></h1>
      <a href="https://github.com/Ibadullah5" target="_blank" rel="noreferrer" >
        Github
      </a>
    </nav>
  )
}

export default Nav