import React, { useState } from 'react';
import { ButtonPrimary } from './ButtonPrimary';

export default function Pricing({ pricing }) {
  const [pricePlan, setPricePlan] = useState(pricing.monthly);
  const [activePlan, setActivePlan] = useState('monthly');
  const togglePricingCards = (e) => {
    const activePricing = document.querySelectorAll(
      `.${e.target.getAttribute('data-plan')}`
    );

    activePricing.forEach((elm) => {
      elm.classList.remove('flip', 'flip-right', 'flip-left');
    });

    if (e.target.value === 'monthly') {
      setActivePlan('yearly');
      setPricePlan(pricing.annual);
      activePricing.forEach((elm, idx) => {
        if (idx === 0) {
          elm.classList.add('flip', 'flip-right');
        }
        elm.classList.add('flip', 'flip-left');
        console.log(elm);
      });
    } else {
      setActivePlan('monthly');
      setPricePlan(pricing.monthly);
      activePricing.forEach((elm, idx) => {
        if (idx === 0) {
          elm.classList.remove('flip', 'flip-right');
        }
        elm.classList.remove('flip', 'flip-left');
      });
    }
  };

  return (
    <section className='col-span-12 container h-full py-24 xl:pb-28 bg-background-secondary '>
      <div className='col-span-12 md:col-start-2 md:col-span-12 xl:col-start-2 xl:col-span-12 3xl:col-start-3 flex flex-col gap-10 md:gap-16 overflow-hidden items-center justify-center'>
        <div className='flex flex-col items-center gap-20 xl:gap-32 px-4 py-24'>
          {/** Intro **/}
          <div className='flex flex-col gap-10 items-center'>
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-heading-base text-center font-bold'>
                What deal suit you perfect
              </h3>

              <p className='text-heading-base/80 text-center font-light leading-7 text-xs  lg:text-lg max-w-md md:max-w-lg'>
                Meet out pricing plan
              </p>
            </div>

            {/* Toggle */}
            <div className='flex items-center gap-5'>
              <span className='text-heading-base xl:text-lg font-medium'>
                Monthly plan
              </span>
              <button className='p-1 xl:p-2 w-fit bg-primary-base rounded-full'>
                <input
                  type={'checkbox'}
                  value={activePlan}
                  onChange={togglePricingCards}
                  data-plan={activePlan}
                  className={
                    'bg-primary-base relative w-16 h-8 block appearance-none rounded-full checked:before:translate-x-full before:transition-transform before:duration-500  before:absolute before:w-1/2 before:h-full before:bg-white before:rounded-full before:shadow-md before:shadow-neutral-500 '
                  }
                />
              </button>
              <span className='text-heading-base xl:text-lg font-medium'>
                Annual plan
              </span>
            </div>
            {/* Toggle End */}
          </div>
          {/* Intro End */}

          {/** Pricing Cards **/}
          <div className='flex flex-col lg:flex-row gap-8 md:gap-16 xl:gap-8 items-center transition-all duration-700'>
            {pricePlan.map((plan, idx) => {
              return (
                // Card
                <div
                  key={plan.packName}
                  className={`${activePlan} max-w-[420px] xl:max-w-[500px] py-10 md:py-20 px-6 md:px-12 bg-background-base rounded-md shadow-xl lg:shadow-md flex flex-col gap-6 md:gap-8 lg:[&.active]:shadow-2xl lg:[&.active]:scale-[1.09] lg:[&.active]:translate-x-[-5rem] duration-300
                  ${idx === 1 && 'active'}   
                  flip         
                  `}
                >
                  {/* Card intro */}
                  <div className='flex flex-col gap-2 border-b-2 pb-6 '>
                    <h3 className='text-lg sm:text-xl md:text-2xl xl:text-3xl text-heading-base font-semibold'>
                      {plan.packName}
                    </h3>
                    <h3 className='text-lg sm:text-xl md:text-2xl xl:text-3xl text-primary-500 font-semibold'>
                      {plan.price}
                    </h3>
                    <p className='text-heading-base/60  font-light leading-5 text-xs  lg:text-lg max-w-md md:max-w-lg'>
                      {plan.audience}
                    </p>
                  </div>

                  {/* Card benefit */}
                  <ul className='flex flex-col gap-4 border-b-2 pb-6'>
                    {plan.benefits.map((benefit, idx) => {
                      return (
                        <li
                          key={idx}
                          className='text-heading-base/80 font-medium leading-5 text-xs  lg:text-lg max-w-md md:max-w-lg flex item'
                        >
                          <img
                            className='max-h-5 w-5 relative top-1'
                            src='../images/icons/check-circle.png'
                            alt='check success icon'
                          />
                          <span className='inline-block pl-2 md:pl-4'>
                            {benefit.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Card Btn */}
                  <div>
                    <ButtonPrimary
                      className={
                        'md:h-14 md:px-8 text-base-500 bg-primary-base/70'
                      }
                    >
                      Start free Trail
                    </ButtonPrimary>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Pricing Cards End*/}
        </div>
      </div>
    </section>
  );
}
