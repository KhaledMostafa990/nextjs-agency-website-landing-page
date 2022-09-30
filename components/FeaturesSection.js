import Image from 'next/image';
import React, { useState } from 'react';
import rightArrow from '../public/images/icons/right-arrow.png';
import emoji from '../public/images/icons/emoji.png';
import messenger from '../public/images/messenger.png';
function FeaturesSection({ accordionData }) {
  return (
    <section
      id='core-feature'
      className='col-span-12 container h-full py-10 xl:pb-28'
    >
      <div className='col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8  flex flex-col gap-4 xl:flex-row xl:justify-between xl:gap-0'>
        {/* Feature image */}
        <figure className='place-self-center xl:w-full'>
          <Image
            src={messenger}
            width={800}
            height={850}
            layout='intrinsic'
            alt='premium feature'
          />
        </figure>

        {/* Feature description */}
        <div className='flex flex-col gap-8 xl:w-[85%] 2xl:w-[75%]'>
          {/* Intro */}
          <div className='flex flex-col gap-4 md:items-center xl:items-start'>
            <h2 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-heading-base font-bold text-start md:text-center xl:text-start'>
              <span className='md:block xl:inline'>
                Meet our premium features that
              </span>
              <span> will make you wow</span>
              <figure className='inline-block pl-4 relative  top-2'>
                <Image
                  src={emoji}
                  alt='arrow right'
                  width={32}
                  height={32}
                  layout='intrinsic'
                />
              </figure>
            </h2>

            <p className='text-heading-base text-start md:text-center xl:text-start font-light leading-7 md:text-lg max-w-md md:max-w-lg '>
              Build an incredible workplace and grow your business with Gusto's
              all-in-one platform with amazing contents.
            </p>
          </div>
          {/* Intro End  */}

          {/* Accordion  */}
          <div className='flex flex-col gap-4  xl-gap-6'>
            {accordionData.map(({ heading, desc }) => (
              <Accordion heading={heading} description={desc} />
            ))}
          </div>
          {/* Accordion End*/}
        </div>
        {/* Feature description End */}
      </div>
    </section>
  );
}

export default FeaturesSection;
function Accordion({ heading, description }) {
  const handleOpen = (e) => {
    const accordion = e.target;
    const allAccordions = [...accordion.parentElement.children];
    const content = accordion.querySelector('p');
    const arrow = accordion.querySelector('figure');

    allAccordions.forEach((element) => {
      element.querySelector('p').classList.remove('active');
      element.querySelector('figure').classList.remove('active');
      element.classList.remove('active');
    });
    accordion.classList.add('active');
    content.classList.add('active');
    arrow.classList.add('active');
  };
  return (
    <div
      className=' transition duration-700 py-4 px-5 sm:py-6 sm:px-8 xl:py-8 w-full rounded-lg bg-background-secondary [&.active]:bg-background-base flex flex-col gap-3 shadow-lg overflow-hidden'
      onClick={handleOpen}
    >
      <h3 className='text-bodytxt-secondary text-[.65rem] sm:text-sm lg:text-lg font-bold flex items-center justify-between pointer-events-none'>
        <span>{heading}</span>
        <figure className='opacity-100 [&.active]:opacity-0 transition-opacity'>
          <Image
            src={rightArrow}
            alt={'help and support icon'}
            layout='intrinsic'
            width={21}
            height={21}
          />
        </figure>
      </h3>

      <p className='transition-transform duration-700  will-change-auto text-heading-base font-light leading-7 md:text-lg max-w-md md:max-w-lg opacity-0 h-0 relative translate-y-[50%] [&.active]:translate-y-[0%] [&.active]:h-fit [&.active]:opacity-100  pointer-events-none '>
        {description}
      </p>
    </div>
  );
}
