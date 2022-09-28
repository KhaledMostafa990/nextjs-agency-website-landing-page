import React from 'react';
import logo from '../public/images/logo.png';

function Navigation() {
  return (
    <header className='w-full'>
      <figure>logo</figure>

      <nav>
        <ul>
          <li>home</li>
          <li>Adversite</li>
          <li>supports</li>
          <li>about</li>
          <li id='search-icon'></li>
        </ul>
      </nav>

      <button>login</button>
      <button>get Started</button>
    </header>
  );
}

export default Navigation;
