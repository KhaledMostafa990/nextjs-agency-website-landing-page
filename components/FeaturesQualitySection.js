import React from 'react';
import { ButtonPrimary } from './ButtonPrimary';

export default function FeaturesQualitySection({ featureQuality }) {
  const handleClickSlider = (e) => {
    const clickedElement = e.target;
    const length = clickedElement.getAttribute('data-length');
    const slidesConatiner =
      clickedElement.parentElement.parentElement.nextElementSibling;
    [...slidesConatiner.children].forEach((elm) =>
      elm.classList.add('invisible', 'opacity-0')
    );

    [...slidesConatiner.children][length].classList.remove(
      'invisible',
      'opacity-0'
    );

    slidesConatiner.style.setProperty('transform', `translateX(-${length}00%)`);
    console.log(clickedElement.parentElement.parentElement);
  };
  return (
    <section className='col-span-12 container h-full py-10 xl:pb-28 bg-secondary'>
      <div className='col-start-2 col-span-10 xl:col-start-2 xl:col-span-12 flex flex-col  gap-10 md:gap-16 overflow-hidden'>
        {/* Tabs */}
        <div className='overflow-scroll'>
          <ul className='snap-x  bg-secondary w-max flex gap-4 md:gap-8 py-5'>
            {featureQuality.map(({ name, icon }, idx) => (
              <li
                data-length={`${idx}`}
                onClick={handleClickSlider}
                className='snap-mandatory snap-start min-w-fit flex-1 flex md:flex-col items-center md:items-start gap-2 md:gap-3'
                key={name}
              >
                <img
                  className='w-7 h-7 pointer-events-none'
                  src={icon}
                  alt={`${name} icon`}
                />
                <button className='md:border-t-2 md:pt-3 text-sm lg:text-lg md:border-primary-base text-white [&.active]:text-primary-base pointer-events-none'>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Tabs End */}

        {/* Feature */}
        <div className='flex  items-center gap-5  relative transition-all  duration-700'>
          {featureQuality.map(({ name, heading, desc }, idx) => (
            <div
              className={`flex flex-col gap-5 md:gap-10 min-w-full xl:flex-row-reverse transition-opacity ${
                idx === 0 ? 'visible opacity-100' : 'invisible opacity-0'
              } `}
              key={name}
            >
              <figure className='aspect-w-7 aspect-h-5 xl:aspect-w-10 xl:aspect-h-4 xl:w-full xl:left-16'>
                <img
                  className='object-cover rounded-md'
                  src='../images/dashboard.png'
                />
              </figure>

              <div className='flex flex-col gap-6 xl:w-[70%]'>
                <h3 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>
                  {heading}
                </h3>

                <p className='text-white text-start font-light leading-7 text-xs  lg:text-lg max-w-md md:max-w-lg'>
                  {desc}
                </p>

                <div>
                  <ButtonPrimary className='text-white'>
                    More Details
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Feature End*/}
      </div>
    </section>
  );
}
