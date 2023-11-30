import React from 'react';

import IconProps from '../IconProps';

const MoreHorizontaCircleOutline: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M8 13.15C8.63513 13.15 9.15 12.6351 9.15 12C9.15 11.3649 8.63513 10.85 8 10.85C7.36487 10.85 6.85 11.3649 6.85 12C6.85 12.6351 7.36487 13.15 8 13.15Z"
        stroke="currentColor"
        strokeWidth={0.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13.15C16.6351 13.15 17.15 12.6351 17.15 12C17.15 11.3649 16.6351 10.85 16 10.85C15.3649 10.85 14.85 11.3649 14.85 12C14.85 12.6351 15.3649 13.15 16 13.15Z"
        stroke="currentColor"
        strokeWidth={0.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.15C12.6351 13.15 13.15 12.6351 13.15 12C13.15 11.3649 12.6351 10.85 12 10.85C11.3649 10.85 10.85 11.3649 10.85 12C10.85 12.6351 11.3649 13.15 12 13.15Z"
        stroke="currentColor"
        strokeWidth={0.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MoreHorizontaCircleOutline;
