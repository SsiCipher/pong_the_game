import React from 'react';

import IconProps from '@assets/IconProps';

const WinsIcon: React.FC<IconProps> = ({ size, className }) => {
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
        d="M8.21785 4.50603C7.18295 3.77244 6.09353 2.61546 5.89741 2C4.92303 3.30841 4.63493 5.31878 4.71216 6.93119C3.05059 8.64824 2 10.8731 2 13.1626C2 13.6206 2.03773 14.0706 2.11058 14.5098C2.67654 15.4623 4.09079 16.3445 5.15326 16.9052C6.57013 17.6528 8.13978 17.7912 9.38588 16.876L9.39929 16.8662L9.41369 16.8577C9.85806 16.5947 10.1224 16.092 10.1902 15.5438C10.2591 14.9872 10.1141 14.4834 9.87257 14.238L9.84803 14.2131L9.82993 14.1838C9.60507 13.8215 9.16124 13.6877 8.68284 13.8402C8.20445 13.9927 7.69322 14.4442 7.48625 15.2602L7.38625 15.6542L7.00055 15.4615C6.31179 15.1175 6.0227 14.4988 6.00482 13.8832C5.98726 13.2757 6.22913 12.6404 6.64014 12.1842L7.15539 12.5795C6.8481 12.9204 6.6614 13.4094 6.6746 13.8667C6.68365 14.1766 6.78212 14.4568 6.98364 14.6714C7.29509 13.9348 7.85222 13.451 8.46398 13.2559C9.18152 13.0271 9.97605 13.2076 10.3931 13.8479C10.7941 14.2769 10.9354 14.9724 10.8559 15.614C10.7744 16.2721 10.4492 16.9718 9.79002 17.3693C8.25504 18.4876 6.37286 18.2608 4.82066 17.4418C4.16626 17.0964 3.55536 16.6393 3.03389 16.1155C4.35088 19.5442 7.8966 22 12.064 22C16.2315 22 19.7773 19.5441 21.0942 16.1153C20.5727 16.6392 19.9617 17.0964 19.3073 17.4418C17.7551 18.2608 15.8729 18.4876 14.3379 17.3693C13.6787 16.9718 13.3535 16.2721 13.2721 15.614C13.1926 14.9724 13.3339 14.2769 13.7349 13.8479C14.152 13.2076 14.9464 13.0271 15.664 13.2559C16.2758 13.451 16.8328 13.9348 17.1443 14.6714C17.3459 14.4568 17.4444 14.1766 17.4533 13.8667C17.4666 13.4094 17.2798 12.9204 16.9726 12.5795L17.4878 12.1842C17.8989 12.6404 18.1407 13.2757 18.1231 13.8832C18.1052 14.4988 17.8161 15.1175 17.1274 15.4615L16.7417 15.6542L16.6417 15.2602C16.4347 14.4442 15.9235 13.9927 15.4452 13.8402C14.9668 13.6877 14.5228 13.8215 14.298 14.1838L14.2799 14.2131L14.2553 14.238C14.0138 14.4834 13.8688 14.9872 13.9377 15.5438C14.0056 16.092 14.2699 16.5947 14.7143 16.8577L14.7287 16.8662L14.742 16.876C15.9881 17.7912 17.5579 17.6528 18.9747 16.9052C20.0372 16.3445 21.3235 15.4622 21.8894 14.5097C21.9623 14.0705 22 13.6206 22 13.1626C22 10.9009 21.0022 8.70223 19.405 6.99391C19.4928 5.3712 19.21 3.32543 18.223 2C18.0266 2.61642 16.934 3.77607 15.8977 4.50948C14.7046 3.98988 13.405 3.6951 12.064 3.6951C10.726 3.6951 9.42098 3.98857 8.21785 4.50603ZM16.2926 6.60041L13.344 7.50918C13.344 7.50918 14.4833 8.90564 15.5554 8.46595C16.2943 8.163 16.2931 7.12189 16.2926 6.6373V6.60041ZM10.7839 7.50918L7.83531 6.60041V6.63754C7.83477 7.12203 7.8336 8.163 8.57238 8.46595C9.64454 8.90564 10.7839 7.50918 10.7839 7.50918ZM10.1854 11.7121C10.5782 11.4917 11.0157 11.3247 11.4887 11.2243C12.5884 10.9907 13.6863 11.1587 14.6007 11.6238C13.9834 9.71007 12.6925 8.40135 11.5822 8.63709C10.6315 8.83903 10.0983 10.1131 10.1854 11.7121Z"
      />
    </svg>
  );
};

export default WinsIcon;
