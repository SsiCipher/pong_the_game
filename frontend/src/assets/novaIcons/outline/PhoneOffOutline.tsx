import React from 'react';

import IconProps from '@assets/IconProps';

const PhoneOffOutline: React.FC<IconProps> = ({ size, className }) => {
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
      <path d="M11.2796 15.215L10.7075 16.0352L10.7075 16.0352L11.2796 15.215ZM15.9711 14.0343L16.2381 13.0706L16.2381 13.0706L15.9711 14.0343ZM11.9717 15.1101L12.7024 15.7928L12.7024 15.7928L11.9717 15.1101ZM18.4964 18.3779L17.5477 18.0617L17.5477 18.0618L18.4964 18.3779ZM10.0437 8.13029L11.0074 7.86337L11.0074 7.86336L10.0437 8.13029ZM5.70011 5.60505L6.01629 6.55375L6.01631 6.55374L5.70011 5.60505ZM9.18851 9.05601C9.21945 9.60742 9.69153 10.0294 10.243 9.99843C10.7944 9.9675 11.2163 9.49541 11.1854 8.94399L9.18851 9.05601ZM4.19758 13.5366C4.49392 14.0026 5.11196 14.1402 5.57801 13.8439C6.04406 13.5475 6.18164 12.9295 5.8853 12.4634L4.19758 13.5366ZM11.8517 14.3948C11.4393 14.1072 11.047 13.7798 10.6795 13.4124L9.26529 14.8266C9.71641 15.2777 10.1992 15.6806 10.7075 16.0352L11.8517 14.3948ZM16.2381 13.0706C14.3942 12.56 12.4532 13.1301 11.2411 14.4273L12.7024 15.7928C13.3985 15.0479 14.5675 14.6832 15.7042 14.9981L16.2381 13.0706ZM19.4451 18.6941C20.2626 16.2414 18.728 13.7603 16.2381 13.0706L15.7042 14.9981C17.2318 15.4212 17.9584 16.8294 17.5477 18.0617L19.4451 18.6941ZM11.0074 7.86336C10.3178 5.37344 7.83665 3.83886 5.38391 4.65636L6.01631 6.55374C7.24865 6.14301 8.65688 6.86963 9.07999 8.39722L11.0074 7.86336ZM7.01039 17.0815C8.08467 18.1558 10.4368 20.1046 12.8177 21.0936C14 21.5847 15.3374 21.9022 16.576 21.6033C17.9077 21.282 18.9079 20.3058 19.4451 18.6941L17.5477 18.0618C17.1851 19.1498 16.6444 19.5294 16.1069 19.6591C15.4763 19.8112 14.616 19.6749 13.5849 19.2466C11.5391 18.3968 9.40154 16.6442 8.4246 15.6673L7.01039 17.0815ZM10.7075 16.0352C11.4214 16.5331 12.2611 16.2651 12.7024 15.7928L11.2411 14.4273C11.2947 14.3699 11.3716 14.3232 11.4715 14.3062C11.5787 14.2879 11.7225 14.3047 11.8517 14.3948L10.7075 16.0352ZM11.1854 8.94399C11.1652 8.58459 11.1068 8.22232 11.0074 7.86337L9.07999 8.39721C9.14071 8.61644 9.17624 8.83721 9.18851 9.05601L11.1854 8.94399ZM5.38393 4.65635C4.34244 5.00346 3.54448 5.54993 3.02667 6.3C2.50874 7.05024 2.33949 7.9051 2.37541 8.74441C2.44494 10.3691 3.2888 12.1073 4.19758 13.5366L5.8853 12.4634C5.02255 11.1066 4.41981 9.73917 4.37358 8.6589C4.35162 8.1457 4.4572 7.7482 4.67256 7.43624C4.88805 7.1241 5.28184 6.79853 6.01629 6.55375L5.38393 4.65635Z" />
      <path
        d="M21 3L3 21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PhoneOffOutline;