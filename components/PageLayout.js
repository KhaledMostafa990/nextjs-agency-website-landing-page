import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

function PageLayout({ children }) {
  return (
    <div id='page' className='font-primary bg-background-base text-base'>
      <Navigation />

      <main className='container'>{children}</main>

      <Footer />
    </div>
  );
}

export default PageLayout;
