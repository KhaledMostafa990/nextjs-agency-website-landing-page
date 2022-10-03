import React from 'react';

export function Logo({ Wrapperclasses, className, white }) {
  const logoSrc = !white ? `../images/logo.png` : `../images/logo-white.png`;
  return (
    <figure
      className={`flex items-center w-32 h-full xl:w-fit ${Wrapperclasses}`}
    >
      <img className={`${className}`} src={logoSrc} alt={'logo img'} />
    </figure>
  );
}
