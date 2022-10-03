import React from 'react';

export function ContactForm({ errorMessege, vertical, dark, children }) {
  const responseMessege = errorMessege;

  const darkness = dark
    ? 'text-background-base bg-bodytxt-base/90'
    : 'bg-background-base text-bodytxt-base/90';

  const shadow = dark
    ? 'shadow-[-0.3px_-0.4px_0.2rem_rgba(0,0,0,0.2),0.3px_0.4px_0.2rem_rgba(0,0,0,0.2)]'
    : 'shadow-md';
  return (
    <form
      className={`relative w-full md:max-w-xl max-w-md h-full xl:h-14 flex gap-3 md:gap-5 items-center lg:items-start  ${
        vertical && 'flex-col md:flex-row'
      }`}
    >
      <div className='w-full h-full flex relative '>
        <input
          type='text'
          name='email'
          placeholder={'Enter your Email'}
          className={`${darkness} w-full text-sm px-4 xl:px-12 py-3 block rounded-md ${shadow} `}
        />
      </div>

      <small className='hidden text-primary-base absolute w-full top-[-1.5rem] text-[.78rem] text-start'>
        {responseMessege}
      </small>

      {/* Submit Button */}
      {children}
    </form>
  );
}
