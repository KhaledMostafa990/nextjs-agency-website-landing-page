import React from 'react';
import emoji from '../public/images/icons/emoji.png';
import Image from 'next/image';
export default function CoreFeatureSection({ accordionData }) {
  return (
    <>
      <section
        data-section='features'
        className='col-span-12 container h-full py-10 xl:pb-28'
      >
        <div className='col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8  flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-0'>
          {/* Feature image */}
          <figure className='place-self-center xl:w-full'>
            <img
              className='object-fit'
              src={'../images/messenger.png'}
              width={750}
              height={850}
              layout='intrinsic'
              alt='premium feature'
            />
          </figure>

          {/* Feature description */}
          <div className='flex flex-col gap-8 lg:w-[65%] 2xl:w-[75%]'>
            {/* Intro */}
            <div className='flex flex-col gap-4 md:items-center lg:items-start'>
              <h2 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-heading-base font-bold text-start md:text-center lg:text-start'>
                <span className='md:block lg:inline'>
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

              <p className='text-heading-base text-start md:text-center lg:text-start font-light leading-7 md:text-lg max-w-md md:max-w-lg '>
                Build an incredible workplace and grow your business with
                Gusto's all-in-one platform with amazing contents.
              </p>
            </div>
            {/* Intro End  */}

            {/* Accordion  */}
            <div className='flex flex-col gap-4  xl-gap-6'>
              {accordionData.map(({ heading, desc }) => (
                <Accordion key={heading} heading={heading} description={desc} />
              ))}
            </div>
            {/* Accordion End*/}
          </div>
          {/* Feature description End */}
        </div>
      </section>

      <section className='col-span-12 container h-full py-10 xl:pb-28'>
        <div className='col-start-3 col-span-9 lg:col-start-2 lg:col-span-10 3xl:col-start-3 3xl:col-span-8  flex flex-col gap-4 lg:flex-row-reverse lg:justify-between xl:gap-0'>
          {/* Feature image */}
          <figure className='block lg:flex-1 aspect-h-4 aspect-w-3 lg:aspect-h-2 lg:aspect-w-3'>
            <img
              className='object-cover'
              src='../images/app.png'
              alt='agency app image'
            />
          </figure>

          {/* Feature description */}
          <div className='flex flex-col gap-8 md:gap-12 lg:w-[55%]  lg:pt-24 2xl:pt-12 2xl:flex-1 '>
            {/* Intro */}
            <div className='flex flex-col gap-5 md:items-center lg:items-start'>
              <h2 className='text-2xl md:text-4xl text-heading-base font-semibold md:font-bold text-center md:text-center lg:text-start'>
                <span className='md:block '>Built in one app to make</span>
                <span> instant reply with in lowest minutes</span>

                <figure className=' inline-block pl-4 relative top-1'>
                  <img
                    className='w-6'
                    src='../images/icons/emoji.png'
                    alt='angel icon'
                  />
                </figure>
              </h2>

              <p className='text-heading-base text-center md:text-center lg:text-start font-light leading-7 md:text-lg max-w-md md:max-w-lg'>
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever.
              </p>
            </div>
            {/* Intro End  */}

            {/* feature list */}
            <div className='flex flex-col gap-5 md:gap-7 md:justify-center'>
              <div className='flex flex-col sm:flex-row gap-3 md:gap-20'>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <img
                      className='w-8 pr-3 inline-block'
                      src='../images/icons/check-circle.png'
                      alt='check success icon'
                    />
                    <span className='md:text-lg'> Medical and vision</span>
                  </li>
                  <li>
                    <img
                      className='w-8 pr-3 inline-block'
                      src='../images/icons/check-circle.png'
                      alt='check success icon'
                    />
                    <span className='md:text-lg'> Life insurance</span>
                  </li>
                  <li>
                    <img
                      className='w-8 pr-3 inline-block'
                      src='../images/icons/check-circle.png'
                      alt='check success icon'
                    />
                    <span className='md:text-lg'> 400(k) savings</span>
                  </li>
                </ul>

                <ul className='flex flex-col gap-3'>
                  <li>
                    <img
                      className='w-8 pr-3 inline-block'
                      src='../images/icons/check-circle.png'
                      alt='check success icon'
                    />
                    <span className='md:text-lg'> HSAs and FSAs</span>
                  </li>
                  <li>
                    <img
                      className='w-8 pr-3 inline-block'
                      src='../images/icons/check-circle.png'
                      alt='check success icon'
                    />
                    <span className='md:text-lg'> Commuter benefits</span>
                  </li>
                  <li>
                    <img
                      className='w-8 pr-3 inline-block'
                      src='../images/icons/check-circle.png'
                      alt='check success icon'
                    />
                    <span className='md:text-lg'> 529 college savings</span>
                  </li>
                </ul>
              </div>

              {/* explore link */}
              <a href='#' className='text-link'>
                <span className='inline-block pr-2'> Explore more</span>
                <span className='inline-block w-2.5 h-2.5 border-link border-2 border-t-0 border-l-0 rotate-[-45deg] '></span>
              </a>
            </div>
          </div>
          {/* Feature description End */}
        </div>
      </section>
    </>
  );
}
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
      className=' bg-background-secondary py-4 px-5 sm:py-6 sm:px-8 xl:py-8 w-full h-[4.5rem] [&.active]:h-[11rem] flex flex-col gap-3 rounded-lg [&.active]:bg-background-base drop-shadow-md hover:drop-shadow-xl [&.active]:drop-shadow-xl  transition-all duration-1000 cursor-pointer overflow-hidden'
      onClick={handleOpen}
    >
      <h3 className='text-bodytxt-secondary text-[.65rem] sm:text-sm lg:text-lg font-bold flex items-center justify-between pointer-events-none'>
        <span>{heading}</span>
        <figure className='opacity-100 [&.active]:rotate-90 [&.active]:scale-75  transition-transform duration-700'>
          <img
            src={'../images/icons/right-arrow.png'}
            alt={'help and support icon'}
          />
        </figure>
      </h3>

      <p className='text-heading-base font-light leading-7 md:text-lg max-w-md md:max-w-lg opacity-0 relative translate-y-[-40%] [&.active]:translate-y-[0%] [&.active]:opacity-100 pointer-events-none transition-all duration-[.84s]'>
        {description}
      </p>
    </div>
  );
}
