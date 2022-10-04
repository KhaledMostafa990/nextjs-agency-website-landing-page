import { ContactForm } from './ContactForm';

import Image from 'next/image';
import React from 'react';
import heroImg from '../public/images/banner.png';
import paypalSpons from '../public/images/paypal.png';
import googleSpons from '../public/images/google.png';
import dropbox from '../public/images/dropbox.png';
import { ButtonPrimary } from './ButtonPrimary';
function Hero() {
  return (
    <section
      data-section='home'
      className='bg-primary-base/10 col-span-12 container xl:min-h-screen h-full pb-10 lg:pb-20'
    >
      <div className='w-full col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8 flex flex-col gap-12 lg:justify-between pt-36 lg:pt-40 xl:pt-56 lg:flex-row lg:place-self-center xl:justify-between'>
        {/* Hero Text Content */}
        <div className='flex flex-col gap-7 md:gap-10  justify-start md:items-center lg:items-start flex-1'>
          <h1 className=' text-heading-base text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:text-center lg:text-start'>
            <span className='md:block lg:pb-4'>Ultimate support </span>
            <span className='lg:inline-block lg:pb-4'>system for</span> leading
            <span className=''> agencies</span>
          </h1>

          <p className='text-heading-base leading-7 md:text-lg  max-w-md md:max-w-lg md:text-center lg:text-start'>
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          {/* Conatct Form */}
          <div className='w-full flex justify-center'>
            <ContactForm
              successMessage={'Thanks you'}
              errorMessege={'Please inter a valid email address '}
            >
              <div className={`h-full sm:w-[60%]`}>
                <ButtonPrimary className={'sm:text-base text-white'}>
                  get started
                </ButtonPrimary>
              </div>
            </ContactForm>
          </div>

          {/* Sponsored brands */}
          <div className='flex items-center gap-3'>
            <strong className='font-light text-bodytxt-base/80 flex-2'>
              Sponsored by:
            </strong>

            <ul className='flex items-center gap-3 flex-1'>
              <li>
                <Image alt='paypal sponser icon' src={paypalSpons} width={60} />
              </li>
              <li>
                <Image alt='google sponser icon' src={googleSpons} width={60} />
              </li>

              <li>
                <Image alt='dropbox sponser icon' src={dropbox} width={60} />
              </li>
            </ul>
          </div>
        </div>

        {/* Hero img */}
        <div className='flex justify-center flex-1 items-center'>
          <figure>
            <Image
              width={740}
              height={480}
              layout='intrinsic'
              src={heroImg}
              alt={'Ultimate support system'}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
