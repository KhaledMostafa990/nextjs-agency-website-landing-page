import { Logo } from './Logo';
import logo from '../public/images/logo.png';

import React from 'react';
import { ContactForm } from './ContactForm';
import { ButtonPrimary } from './ButtonPrimary';

function Footer() {
  return (
    <footer className='container bg-secondary gap-y-16 lg:gap-y-20 pt-12 xl:pt-28'>
      <div className='col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8'>
        <div className='flex flex-col gap-10 lg:gap-20 items-center'>
          {/* Intro */}
          <div className='flex flex-col gap-2 items-center'>
            <h3 className='text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl  text-center font-bold'>
              Subscribe to get notified about update
            </h3>
            <p className='text-white/60 text-center font-extralight text-xs xl:text-lg leading-7 lg:max-w-md'>
              By subscribing with your mail, you will accept our privacy policy
            </p>
          </div>

          {/* Contact Form */}
          <div className='w-full h-full flex justify-center'>
            <ContactForm
              successMessage={'Thanks you'}
              errorMessege={'Please enter a valid email address'}
              vertical
              dark
            >
              <div className={`h-full w-full md:w-fit`}>
                <ButtonPrimary className={'text-white sm:text-base'}>
                  Subscribe us
                </ButtonPrimary>
              </div>
            </ContactForm>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className='col-span-12 container bg-[#2B293E] py-8 '>
        <div className='col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8'>
          <div className='flex flex-col lg:flex-row gap-7 lg:gap-0 items-center lg:justify-between'>
            <div className='flex flex-col lg:flex-row gap-7 lg:gap-1 items-center'>
              <Logo white />

              {/* CopyRights */}
              <h4 className='text-white/70 text-[9px] xl:text-[10px] text-center lg:text-start'>
                &copy; Copyright {new Date().getFullYear()} GUI Design by{' '}
                <a href='https://startuplanding.redq.io/'>StartupLanding</a>
                <span className='block md:inline'>
                  {' '}
                  Coded by<a href='#'> Khaled.</a>
                </span>
              </h4>
            </div>

            <ul className='flex'>
              <li className='pl-2'>
                <a
                  href='#home'
                  className='active capitalize text-white text-xs md:text-base font-medium lg:px-2 xl:px-4 '
                >
                  home
                </a>
              </li>
              <li className='pl-2'>
                <a
                  href='#support'
                  className='capitalize text-white text-xs md:text-base font-medium lg:px-2 xl:px-4 '
                >
                  support
                </a>
              </li>
              <li className='pl-2'>
                <a
                  href='#Features'
                  className='capitalize text-white text-xs md:text-base font-medium lg:px-2 xl:px-4 '
                >
                  features
                </a>
              </li>
              <li className='pl-2'>
                <a
                  href='#Pricing'
                  className='capitalize text-white text-xs md:text-base font-medium lg:px-2 xl:px-4 '
                >
                  pricing
                </a>
              </li>
              <li className='pl-2'>
                <a
                  href='#Testimonials'
                  className='capitalize text-white text-xs md:text-base font-medium lg:px-2 xl:px-4 '
                >
                  testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* </div> */}
    </footer>
  );
}

export default Footer;
