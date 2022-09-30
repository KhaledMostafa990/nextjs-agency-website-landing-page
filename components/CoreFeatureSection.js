import React from 'react';
function CoreFeatureSection() {
  return (
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
  );
}

export default CoreFeatureSection;
