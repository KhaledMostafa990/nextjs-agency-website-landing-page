import React from 'react';

export function Logo({ Wrapperclasses, className, white }) {
  const logoSrc = !white ? `../images/logo.png` : `../images/logo-white.png`;
  return (
    <figure
      className={`flex items-center w-fit h-full xl:w-fit ${Wrapperclasses}`}
    >
      <img
        className={`object-cover ${className}`}
        src={logoSrc}
        alt={'logo img'}
        width={162}
        height={27}
      />
    </figure>
  );
}
