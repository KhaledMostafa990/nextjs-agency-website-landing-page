import { ContactForm } from './ContactForm';
import React, { useEffect, useRef, useState } from 'react';
import { ButtonPrimary } from './ButtonPrimary';

import { motion, useScroll } from 'framer-motion';
function Hero() {
  const section = useRef();
  const { scrollY } = useScroll();
  const [scrollYAxis, setScroll] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScroll(latest);
    });
  }, []);

  const ImgVariant = {
    offscreen: {
      x: '100%',
      opacity: 0.3,
    },
    onscreen: {
      x: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.65,
      },
    },
  };

  const heroTextVariant = {
    offscreen: {
      x: '-120%',
    },

    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.65,
      },
    },
  };
  const heroItem = {
    offscreen: {
      x: '-100%',
    },

    onscreen: {
      x: 0,
    },
  };

  return (
    <section
      ref={section}
      data-section='home'
      className='bg-primary-base/10 col-span-12 container xl:min-h-screen h-full pb-10 lg:pb-20 overflow-hidden'
    >
      <div className='w-full col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8 flex flex-col gap-12 lg:justify-between pt-36 lg:pt-40 xl:pt-56 lg:flex-row lg:place-self-center xl:justify-between'>
        {/* Hero Text Content */}
        <motion.div
          className='flex flex-col gap-7 md:gap-10  justify-start md:items-center lg:items-start flex-1'
          variants={heroTextVariant}
          initial='offscreen'
          animate='onscreen'
        >
          <motion.h1
            className=' text-heading-base text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:text-center lg:text-start'
            variants={heroItem}
            style={{
              translateX: `-${scrollYAxis * 0.12}px`,
            }}
          >
            <span className='md:block lg:pb-4'>Ultimate support </span>
            <span className='lg:inline-block lg:pb-4'>system for</span> leading
            <span className=''> agencies</span>
          </motion.h1>

          <motion.p
            className='text-heading-base leading-7 md:text-lg  max-w-md md:max-w-lg md:text-center lg:text-start'
            variants={heroItem}
            style={{
              translateX: `-${scrollYAxis * 0.09}px`,
            }}
          >
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </motion.p>
          {/* Conatct Form */}
          <motion.div
            className='w-full flex md:justify-center transition-opacity'
            variants={heroItem}
            style={{
              translateX: `-${scrollYAxis * 0.09}px`,
            }}
          >
            <ContactForm
              successMessage={'Thanks you'}
              errorMessege={'Please inter a valid email address '}
            >
              <div className={`h-full sm:w-[60%]`}>
                <ButtonPrimary
                  className={
                    'sm:text-base text-white border-2 border-transparent hover:text-primary-base hover:border-primary-base hover:bg-transparent shadow-none transition-all duration-700'
                  }
                >
                  get started
                </ButtonPrimary>
              </div>
            </ContactForm>
          </motion.div>

          {/* Sponsored brands */}
          <div className='flex items-center gap-3'>
            <strong className='font-light text-bodytxt-base/80 flex-2'>
              Sponsored by:
            </strong>

            <ul className='flex items-center gap-3 flex-1'>
              <li className='w-full'>
                <img
                  className='object-cover w-120 h-50'
                  alt='paypal sponser icon'
                  src={'../images/paypal.png'}
                  width={80}
                  height={80}
                />
              </li>
              <li className='w-full'>
                <img
                  className='object-cover w-120 h-50'
                  alt='google sponser icon'
                  src={'../images/google.png'}
                  width={80}
                  height={80}
                />
              </li>

              <li className='w-full'>
                <img
                  className='object-cover w-120 h-50'
                  alt='dropbox sponser icon'
                  src={'../images/dropbox.png'}
                  width={80}
                  height={80}
                />
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Hero img */}
        <div className='flex justify-center flex-1 items-center w-full'>
          <motion.figure
            className='block aspect-w-3 aspect-h-2 w-full max-w-[760px] max-h-[450px]'
            variants={ImgVariant}
            initial='offscreen'
            animate='onscreen'
            style={{ translateX: `${scrollYAxis * 0.15}px` }}
          >
            <img
              className='object-cover'
              src={'../images/banner.png'}
              alt={'Ultimate support system'}
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
