import React from 'react';
export function ButtonPrimary({ children, className }) {
  return (
    <button
      type='submit'
      className={`min-h-full h-10 basis-[40%] bg-primary-base px-3 xs:px-5 text-primary-700 rounded-lg capitalize text-xs sm:text-lg  font-bold shadow-md ${className}`}
    >
      {children}
    </button>
  );
}
