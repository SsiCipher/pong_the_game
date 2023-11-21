import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

const Camera: React.FC<IconProps> = ({ size, className }) => {
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
      d="M10.2902 2C8.49207 2 6.89571 3.15059 6.3271 4.85641C6.26345 5.04736 6.10666 5.19256 5.91139 5.24138L5.10615 5.44269C3.28064 5.89906 2 7.53928 2 9.42097V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9.42097C22 7.53928 20.7194 5.89906 18.8938 5.44268L18.0886 5.24138C17.8933 5.19256 17.7365 5.04736 17.6729 4.85641C17.1043 3.15059 15.5079 2 13.7098 2H10.2902ZM12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11ZM8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13Z"
    />
  </svg>
  );
};

export default Camera;