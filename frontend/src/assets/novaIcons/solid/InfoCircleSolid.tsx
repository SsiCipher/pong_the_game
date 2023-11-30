import React from 'react';

import IconProps from '../IconProps';

const InfoCircleSolid: React.FC<IconProps> = ({ size, className }) => {
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
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12.2666 11C12.8189 11 13.2666 11.4477 13.2666 12V16C13.2666 16.5523 12.8189 17 12.2666 17C11.7143 17 11.2666 16.5523 11.2666 16V12C11.2666 11.4477 11.7143 11 12.2666 11ZM11.2666 8C11.2666 7.44772 11.7143 7 12.2666 7H12.2766C12.8289 7 13.2766 7.44772 13.2766 8C13.2766 8.55228 12.8289 9 12.2766 9H12.2666C11.7143 9 11.2666 8.55228 11.2666 8Z"
      />
    </svg>
  );
};

export default InfoCircleSolid;
