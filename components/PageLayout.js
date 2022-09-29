import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

function PageLayout({ children }) {
  return (
    <div
      id='page'
      className='font-primary bg-background-base text-base h-[2000px]'
    >
      <Navigation />

      {/* <main>{children}</main> */}

      {/* <Footer /> */}
    </div>
  );
}

export default PageLayout;
