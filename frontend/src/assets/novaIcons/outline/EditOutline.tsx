import React from 'react';

import IconProps from '../IconProps';

const EditOutline: React.FC<IconProps> = ({ size, className }) => {
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
        d="M16.6158 4.58063C16.9876 4.20886 17.4918 4 18.0176 4C18.2779 4 18.5357 4.05128 18.7762 4.1509C19.0168 4.25052 19.2353 4.39655 19.4194 4.58063C19.6035 4.76471 19.7495 4.98325 19.8491 5.22376C19.9487 5.46428 20 5.72206 20 5.98239C20 6.24272 19.9487 6.5005 19.8491 6.74102C19.7495 6.98153 19.6035 7.20007 19.4194 7.38415L8.52146 18.2821C8.00882 18.7947 7.3665 19.1584 6.66317 19.3342L4 20L4.66579 17.3368C4.84163 16.6335 5.2053 15.9912 5.71794 15.4785L16.6158 4.58063Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 7L17 10" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
      <path
        d="M13 20L20 20"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditOutline;
