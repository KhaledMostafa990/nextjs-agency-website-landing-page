import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import lockIcon from '../public/images/icons/lock.png';

function Navigation() {
  const logoRef = useRef();
  const navRef = useRef();
  const menuBtnRef = useRef();
  const overlayRef = useRef();
  const headerRef = useRef();
  const [viewWidth, setviewportWidth] = useState(null);
  const [scrollLength, setsScrollLength] = useState(null);
  const handleResize = () => setviewportWidth(window.innerWidth);
  const handleScroll = () => setsScrollLength(window.scrollY);

  const menuHandler = menuClickHandler(
    menuBtnRef,
    navRef,
    logoRef,
    overlayRef,
    'active'
  );

  const handleHeaderState = (length) => {
    if (length > 5) {
      headerRef.current.classList.add('scrolled-down');
      headerRef.current.firstElementChild.classList.add('scrolled-down');
    } else {
      headerRef.current.classList.remove('scrolled-down');
      headerRef.current.firstElementChild.classList.remove('scrolled-down');
    }
  };

  if (viewWidth > 1024 && navRef.current.classList.contains('active')) {
    menuHandler();
  }
  if (scrollLength) {
    handleHeaderState(scrollLength);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleResize, handleScroll]);

  return (
    <header
      ref={headerRef}
      className='
    header container fixed bg-background-base 
    [&.scrolled-down]:shadow-md shadow-neutral-300 transition-all duration-[0.65s] '
    >
      <div className='col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8 flex justify-between items-center py-4 xl:py-8 [&.scrolled-down]:py-1.5 [&.scrolled-down]:xl:py-3.5 transition-all duration-[0.65s]  '>
        {/*logo*/}
        <figure className='flex items-center w-32 h-full xl:w-fit'>
          <Image src={logo} alt={'logo img'} />
        </figure>

        {/* OverLay on menu active*/}
        <div
          ref={overlayRef}
          className='lg:hidden w-screen absolute left-0 top-0 h-screen transition-colors duration-700 [&.active]:bg-black/50'
        />

        {/* Navigation items*/}
        <nav
          id='nav'
          ref={navRef}
          className='nav h-screen absolute top-0 bg-white min-w-[80%] max-w-xs transition-transform duration-1000 [&.active]:block right-0 translate-x-[100%] [&.active]:translate-x-[0%] z-10 pt-28 lg:min-w-fit lg:static lg:h-fit lg:w-fit lg:p-0 lg:translate-x-0 '
        >
          <figure
            className='w-32 flex items-center absolute top-6 left-8 transition-opacity duration-[3.5s] opacity-0 [&.active]:opacity-100 xl:w-fit lg:hidden'
            ref={logoRef}
          >
            <Image src={logo} alt={'logo img'} />
          </figure>
          <ul className='pl-8 lg:pl-0 flex flex-col lg:flex-row'>
            <li className='py-3 border-y-[.12rem] border-neutral-200 hover:bg-primary-base/[0.03 lg:py-0 border-none'>
              <a className='active capitalize text-bodytxt-base/60 font-medium hover:text-primary-base [&.active]:text-primary-base/80 lg:px-2 2xl:px-6 lg:text-bodytxt-base '>
                home
              </a>
            </li>
            <li className='py-3 border-b-[.12rem] border-neutral-200 hover:bg-primary-base/[0.03] lg:py-0 border-none'>
              <a className='capitalize text-bodytxt-base/60 font-medium hover:text-primary-base [&.active]:text-primary-base/80 lg:px-2 2xl:px-6 lg:text-bodytxt-base '>
                support
              </a>
            </li>
            <li className='py-3 border-b-[.12rem] border-neutral-200 hover:bg-primary-base/[0.03] lg:py-0 border-none'>
              <a className='capitalize text-bodytxt-base/60 font-medium hover:text-primary-base [&.active]:text-primary-base/80 lg:px-2 2xl:px-6 lg:text-bodytxt-base '>
                features
              </a>
            </li>
            <li className='py-3 border-b-[.12rem] border-neutral-200 hover:bg-primary-base/[0.03] lg:py-0 border-none'>
              <a className='capitalize text-bodytxt-base/60 font-medium hover:text-primary-base [&.active]:text-primary-base/80 lg:px-2 2xl:px-6 lg:text-bodytxt-base '>
                pricing
              </a>
            </li>
            <li className='py-3 border-b-[.12rem] border-neutral-200 hover:bg-primary-base/[0.03] lg:py-0 border-none'>
              <a className='capitalize text-bodytxt-base/60 font-medium hover:text-primary-base [&.active]:text-primary-base/80 lg:px-2 2xl:px-6 lg:text-bodytxt-base '>
                testimonials
              </a>
            </li>
          </ul>
        </nav>

        {/* header Buttons */}
        <div className='flex gap-6 xl:gap-12 items-center justify-center '>
          {/* Login */}
          <button className=' py-3 text-bodytxt-base capitalize font-semibold flex items-center justify-center gap-3'>
            <Image src={lockIcon} width={18} height={20} alt={'logo img'} />
            <span className='block'>login</span>
          </button>

          {/* Login */}
          <button className='hidden lg:block bg-primary-base/30 px-5 py-2.5 text-primary-base rounded-lg capitalize font-semibold'>
            get Started
          </button>

          {/* Menu Button */}
          <div className=' z-20 lg:hidden flex items-center'>
            <button
              id='menu-btn'
              className='custom-hamburger-menu w-[24px] h-[18px] flex gap-[4.5px] '
              type='button'
              aria-label='Toggle navigation'
              aria-controls='nav'
              aria-expanded='false'
              onClick={menuHandler}
              ref={menuBtnRef}
            >
              <span className='bg-slate-500 block w-6 h-[2.9px]'></span>
              <span className='bg-slate-500 block w-6 h-[2.9px]'></span>
              <span className='bg-slate-500 block w-6 h-[2.9px]'></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

function menuClickHandler(
  menuButton,
  menuRef,
  logoRef,
  overlayRef,
  activeClass
) {
  return () => {
    logoRef.current.classList.toggle(activeClass);
    menuRef.current.classList.toggle(activeClass);
    overlayRef.current.classList.toggle(activeClass);
    menuButton.current.classList.toggle(activeClass);
  };
}
