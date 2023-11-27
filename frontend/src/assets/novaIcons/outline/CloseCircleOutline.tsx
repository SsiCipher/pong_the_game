import React from 'react';

import IconProps from '../IconProps';

const CloseCircleOutline: React.FC<IconProps> = ({ size, className }) => {
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
      <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
};

export default CloseCircleOutline;
