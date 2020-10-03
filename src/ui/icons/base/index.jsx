import React from 'react';

export default function Icon({
  children,
  active = false,
  size = 16,
  onClick,
}) {
  return (
    <svg
      onClick={onClick}
      style={{ height: size, width: size }}
      fill={active ? 'blue' : 'grey'}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'>
      {children}
    </svg>
  );
}
