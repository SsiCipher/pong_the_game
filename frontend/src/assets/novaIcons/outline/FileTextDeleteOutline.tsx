import React from 'react';

import IconProps from '../IconProps';

const FileTextDeleteOutline: React.FC<IconProps> = ({ size, className }) => {
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
        d="M5 6C5 4.34315 6.34315 3 8 3H13.1716C13.702 3 14.2107 3.21071 14.5858 3.58579L18.4142 7.41421C18.7893 7.78929 19 8.29799 19 8.82843V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V6Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M9.5 12L14.5 17M14.5 12L9.5 17"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path d="M13 3V5C13 7.20914 14.7909 9 17 9H19" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
};

export default FileTextDeleteOutline;
