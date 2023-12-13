import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

const Unblock: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg 
    widths={size || 24}
    height={size || 24}
    xmlns="http://www.w3.org/2000/svg" 

    viewBox="0 0 13 15" 
    fill="currentColor"
    className={className}
    >
    <path d="M12.5685 0.629135C12.6518 0.545822 12.7869 0.545822 12.8702 0.629135C12.9535 0.712448 12.9535 0.847525 12.8702 0.930838L11.7411 2.06L12.8702 3.18917C12.9535 3.27248 12.9535 3.40756 12.8702 3.49087C12.7869 3.57418 12.6518 3.57418 12.5685 3.49087L11.4394 2.3617L10.3102 3.49087C10.2269 3.57418 10.0918 3.57418 10.0085 3.49087C9.92517 3.40756 9.92517 3.27248 10.0085 3.18917L11.1377 2.06L10.0085 0.930838C9.92517 0.847525 9.92517 0.712448 10.0085 0.629135C10.0918 0.545822 10.2269 0.545822 10.3102 0.629135L11.4394 1.7583L12.5685 0.629135Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.67981 1.41972C3.91248 1.41972 2.47978 2.85243 2.47978 4.61976C2.47978 6.38709 3.91248 7.8198 5.67981 7.8198C7.44715 7.8198 8.87985 6.38709 8.87985 4.61976C8.87985 2.85243 7.44715 1.41972 5.67981 1.41972ZM3.75979 4.61976C3.75979 3.55936 4.61942 2.69974 5.67981 2.69974C6.74021 2.69974 7.59984 3.55936 7.59984 4.61976C7.59984 5.68016 6.74021 6.53978 5.67981 6.53978C4.61942 6.53978 3.75979 5.68016 3.75979 4.61976Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.67982 14.2199C3.53788 14.2199 2.03314 13.5617 1.09069 12.4836C0.703982 12.0412 0.516467 11.5341 0.535495 11.0147C0.554129 10.506 0.76811 10.047 1.07249 9.67611C1.67223 8.94527 2.69562 8.45981 3.75979 8.45981H7.59984C8.66401 8.45981 9.6874 8.94527 10.2871 9.67611C10.5915 10.047 10.8055 10.506 10.8241 11.0147C10.8432 11.5341 10.6556 12.0412 10.2689 12.4836C9.32649 13.5617 7.82175 14.2199 5.67982 14.2199ZM2.05441 11.6411C2.69394 12.3728 3.80532 12.9399 5.67982 12.9399C7.55431 12.9399 8.66569 12.3728 9.30522 11.6411C9.50008 11.4182 9.55087 11.2223 9.54498 11.0615C9.53869 10.89 9.46454 10.6915 9.29764 10.4881C8.95481 10.0703 8.303 9.73982 7.59984 9.73982H3.75979C3.05663 9.73982 2.40482 10.0703 2.06199 10.4881C1.89509 10.6915 1.82094 10.89 1.81465 11.0615C1.80876 11.2223 1.85955 11.4182 2.05441 11.6411Z" />
    </svg>
    // <svg
    //   width={size || 24}
    //   height={size || 24}
    //   viewBox="0 0 24 24"
    //   fill="currentColor"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    //   aria-hidden="true"
    // >
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M12.0088 1.62914C12.0921 1.54582 12.2272 1.54582 12.3105 1.62914L14.8705 4.18917C14.9538 4.27248 14.9538 4.40756 14.8705 4.49087C14.7872 4.57418 14.6521 4.57418 14.5688 4.49087L12.0088 1.93084C11.9255 1.84752 11.9255 1.71245 12.0088 1.62914Z"

    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M14.8706 1.62914C14.7873 1.54582 14.6522 1.54582 14.5689 1.62914L12.0089 4.18917C11.9256 4.27248 11.9256 4.40756 12.0089 4.49087C12.0922 4.57418 12.2273 4.57418 12.3106 4.49087L14.8706 1.93084C14.9539 1.84752 14.9539 1.71245 14.8706 1.62914Z"

    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M7.68002 3.69969C6.61962 3.69969 5.76 4.55932 5.76 5.61972C5.76 6.68012 6.61962 7.53974 7.68002 7.53974C8.74042 7.53974 9.60004 6.68012 9.60004 5.61972C9.60004 4.55932 8.74042 3.69969 7.68002 3.69969ZM4.47998 5.61972C4.47998 3.85238 5.91269 2.41968 7.68002 2.41968C9.44735 2.41968 10.8801 3.85238 10.8801 5.61972C10.8801 7.38705 9.44735 8.81976 7.68002 8.81976C5.91269 8.81976 4.47998 7.38705 4.47998 5.61972Z"

    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M7.6803 13.9397C5.80581 13.9397 4.69443 13.3726 4.0549 12.641C3.86004 12.4181 3.80925 12.2221 3.81514 12.0614C3.82142 11.8899 3.89557 11.6913 4.06248 11.488C4.40531 11.0702 5.05712 10.7397 5.76028 10.7397H9.60033C10.3035 10.7397 10.9553 11.0702 11.2981 11.488C11.465 11.6913 11.5392 11.8899 11.5455 12.0614C11.5514 12.2221 11.5006 12.4181 11.3057 12.641C10.6662 13.3726 9.5548 13.9397 7.6803 13.9397ZM3.09118 13.4834C4.03363 14.5616 5.53837 15.2197 7.6803 15.2197C9.82224 15.2197 11.327 14.5616 12.2694 13.4834C12.6561 13.041 12.8437 12.534 12.8246 12.0145C12.806 11.5058 12.592 11.0469 12.2876 10.676C11.6879 9.94511 10.6645 9.45965 9.60033 9.45965H5.76028C4.69611 9.45965 3.67272 9.94511 3.07298 10.676C2.7686 11.0469 2.55462 11.5058 2.53598 12.0145C2.51696 12.534 2.70447 13.041 3.09118 13.4834Z"

    //   />
    // </svg>
  );
};

export default Unblock;