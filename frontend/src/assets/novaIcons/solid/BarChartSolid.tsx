import React from 'react';

import IconProps from '../IconProps';

const BarChartSolid: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V8ZM8 10C8.55228 10 9 10.4477 9 11V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V11C7 10.4477 7.44772 10 8 10ZM16 12C16.5523 12 17 12.4477 17 13V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V13C15 12.4477 15.4477 12 16 12Z"
      />
    </svg>
  );
};

export default BarChartSolid;
