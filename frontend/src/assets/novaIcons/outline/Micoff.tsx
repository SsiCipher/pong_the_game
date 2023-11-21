import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

const Micoff: React.FC<IconProps> = ({ size, className }) => {
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
    <path d="M15 11.5C15 12.0523 15.4477 12.5 16 12.5C16.5523 12.5 17 12.0523 17 11.5H15ZM8.01876 3.33309C7.65043 3.74461 7.68545 4.37681 8.09698 4.74513C8.50851 5.11346 9.1407 5.07844 9.50903 4.66691L8.01876 3.33309ZM11 4H13V2H11V4ZM15 6V11.5H17V6H15ZM13 14H11V16H13V14ZM11 14C9.89543 14 9 13.1046 9 12H7C7 14.2091 8.79086 16 11 16V14ZM13 4C14.1046 4 15 4.89543 15 6H17C17 3.79086 15.2091 2 13 2V4ZM11 2C9.81524 2 8.74976 2.51635 8.01876 3.33309L9.50903 4.66691C9.87667 4.25615 10.4078 4 11 4V2ZM9 12V8H7V12H9ZM13.897 13.7883C13.6284 13.9234 13.3246 14 13 14V16C13.6437 16 14.2546 15.8472 14.7958 15.575L13.897 13.7883Z" />
    <path
      d="M19 11V12C19 12.7013 18.8797 13.3744 18.6586 14M5 11V12C5 15.3137 7.68629 18 11 18H13C14.3062 18 15.5149 17.5826 16.5 16.874"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path d="M12 18L12 21" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    <path
      d="M3 3L21 21"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};

export default Micoff;