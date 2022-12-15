import React from "react";

export interface arrayCoins {
  name: string;
  svg: any;
}
[];

export const arrayCoinsIcon = [
  {
    name: "Ethereum",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#494958"
        ></path>
        <path
          d="M12.374 3V9.65234L17.9966 12.1649L12.374 3Z"
          fill="white"
          fill-opacity="0.6"
        ></path>
        <path
          d="M12.3736 3L6.75 12.1649L12.3736 9.65234V3Z"
          fill="white"
        ></path>
        <path
          d="M12.374 16.4758V20.9961L18.0002 13.2119L12.374 16.4758Z"
          fill="white"
          fill-opacity="0.6"
        ></path>
        <path
          d="M12.3736 20.9961V16.4751L6.75 13.2119L12.3736 20.9961Z"
          fill="white"
        ></path>
        <path
          d="M12.374 15.4301L17.9966 12.1652L12.374 9.6543V15.4301Z"
          fill="white"
          fill-opacity="0.2"
        ></path>
        <path
          d="M6.75 12.1652L12.3736 15.4301V9.6543L6.75 12.1652Z"
          fill="white"
          fill-opacity="0.6"
        ></path>
      </svg>
    ),
  },
  {
    name: "BSC",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0B90B"
        ></path>
        <path
          d="M7.52655 11.9998L5.69055 13.8486L3.8418 11.9998L5.69055 10.1511L7.52655 11.9998ZM12.0018 7.52459L15.1638 10.6866L17.0125 8.83784L13.8505 5.68859L12.0018 3.83984L10.153 5.68859L7.0038 8.83784L8.85255 10.6866L12.0018 7.52459ZM18.313 10.1511L16.477 11.9998L18.3258 13.8486L20.1618 11.9998L18.313 10.1511ZM12.0018 16.4751L8.8398 13.3131L7.0038 15.1618L10.1658 18.3238L12.0018 20.1598L13.8505 18.3111L17.0125 15.1491L15.1638 13.3131L12.0018 16.4751ZM12.0018 13.8486L13.8505 11.9998L12.0018 10.1511L10.153 11.9998L12.0018 13.8486Z"
          fill="white"
        ></path>
      </svg>
    ),
  },
  {
    name: "Avalanche",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4014 4.11719H4.58301V17.5853H19.4014V4.11719Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.9918 12.0006C23.9918 18.6193 18.6229 23.9847 11.9998 23.9847C5.37682 23.9847 0.0078125 18.6193 0.0078125 12.0006C0.0078125 5.38204 5.37682 0.0166016 11.9998 0.0166016C18.6229 0.0166016 23.9918 5.38204 23.9918 12.0006ZM8.60163 16.7697H6.27432C5.78528 16.7697 5.54372 16.7697 5.39643 16.6755C5.23734 16.5725 5.14012 16.4017 5.12834 16.2133C5.11949 16.0396 5.24029 15.8276 5.48186 15.4036L11.2283 5.28152C11.4728 4.85169 11.5965 4.63678 11.7527 4.55729C11.9206 4.47192 12.1209 4.47192 12.2888 4.55729C12.445 4.63678 12.5687 4.85169 12.8132 5.28152L13.9946 7.34233L14.0006 7.35285C14.2647 7.81397 14.3986 8.04781 14.4571 8.29323C14.5219 8.56114 14.5219 8.84377 14.4571 9.11168C14.3982 9.35897 14.2656 9.5945 13.9975 10.0626L10.979 15.3948L10.9712 15.4085C10.7054 15.8734 10.5707 16.109 10.384 16.2868C10.1807 16.4812 9.93616 16.6224 9.66808 16.702C9.42356 16.7697 9.14959 16.7697 8.60163 16.7697ZM14.4789 16.7697H17.8136C18.3056 16.7697 18.5531 16.7697 18.7005 16.6727C18.8595 16.5696 18.9597 16.3958 18.9686 16.2075C18.9771 16.0395 18.8589 15.8357 18.6274 15.4364C18.6194 15.4228 18.6114 15.409 18.6033 15.3949L16.9328 12.5392L16.9138 12.5071C16.6791 12.1104 16.5606 11.9101 16.4085 11.8326C16.2406 11.7473 16.0431 11.7473 15.8753 11.8326C15.7221 11.9121 15.5983 12.1212 15.3538 12.5421L13.6893 15.3978L13.6836 15.4077C13.44 15.828 13.3182 16.038 13.327 16.2104C13.3388 16.3988 13.436 16.5725 13.5951 16.6755C13.7394 16.7697 13.9869 16.7697 14.4789 16.7697Z"
          fill="#494958"
        ></path>
      </svg>
    ),
  },
  {
    name: "Polygon",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#494958"
        ></path>
        <path
          d="M16.3111 9.2789C16.0206 9.11273 15.6471 9.11273 15.3151 9.2789L12.9909 10.6498L11.4138 11.5222L9.13119 12.8931C8.84067 13.0593 8.46715 13.0593 8.13513 12.8931L6.35052 11.813C6.06 11.6468 5.85249 11.3145 5.85249 10.9406V8.86347C5.85249 8.53113 6.0185 8.19879 6.35052 7.99108L8.13513 6.95251C8.42565 6.78634 8.79917 6.78634 9.13119 6.95251L10.9158 8.03262C11.2063 8.19879 11.4138 8.53113 11.4138 8.90501V10.2759L12.9909 9.36198V7.94953C12.9909 7.61719 12.8249 7.28485 12.4929 7.07714L9.17269 5.12463C8.88218 4.95846 8.50865 4.95846 8.17663 5.12463L4.77342 7.11868C4.4414 7.28485 4.27539 7.61719 4.27539 7.94953V11.8545C4.27539 12.1869 4.4414 12.5192 4.77342 12.7269L8.13513 14.6795C8.42565 14.8456 8.79917 14.8456 9.13119 14.6795L11.4138 13.3501L12.9909 12.4361L15.2736 11.1068C15.5641 10.9406 15.9376 10.9406 16.2696 11.1068L18.0542 12.1453C18.3448 12.3115 18.5523 12.6439 18.5523 13.0177V15.0949C18.5523 15.4272 18.3863 15.7596 18.0542 15.9673L16.3111 17.0058C16.0206 17.172 15.6471 17.172 15.3151 17.0058L13.5305 15.9673C13.2399 15.8011 13.0324 15.4688 13.0324 15.0949V13.7655L11.4553 14.6795V16.0504C11.4553 16.3827 11.6213 16.715 11.9534 16.9228L15.3151 18.8753C15.6056 19.0414 15.9791 19.0414 16.3111 18.8753L19.6728 16.9228C19.9634 16.7566 20.1709 16.4242 20.1709 16.0504V12.1038C20.1709 11.7715 20.0049 11.4391 19.6728 11.2314L16.3111 9.2789Z"
          fill="white"
        ></path>
      </svg>
    ),
  },
  {
    name: "Solana",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#494958"
        ></path>
        <path
          d="M6.90998 15.2296C7.00007 15.1395 7.12394 15.0869 7.25532 15.0869H19.1694C19.3871 15.0869 19.4959 15.3497 19.342 15.5036L16.9885 17.8571C16.8984 17.9472 16.7746 17.9997 16.6432 17.9997H4.72912C4.51141 17.9997 4.40255 17.737 4.55645 17.5831L6.90998 15.2296Z"
          fill="white"
        ></path>
        <path
          d="M6.90998 6.44244C7.00382 6.35236 7.1277 6.2998 7.25532 6.2998H19.1694C19.3871 6.2998 19.4959 6.56256 19.342 6.71646L16.9885 9.06999C16.8984 9.16008 16.7746 9.21263 16.6432 9.21263H4.72912C4.51141 9.21263 4.40255 8.94988 4.55645 8.79598L6.90998 6.44244Z"
          fill="white"
        ></path>
        <path
          d="M16.9885 10.8082C16.8984 10.7181 16.7746 10.6655 16.6432 10.6655H4.72912C4.51141 10.6655 4.40255 10.9283 4.55645 11.0822L6.90998 13.4357C7.00007 13.5258 7.12394 13.5784 7.25532 13.5784H19.1694C19.3871 13.5784 19.4959 13.3156 19.342 13.1617L16.9885 10.8082Z"
          fill="white"
        ></path>
      </svg>
    ),
  },
  {
    name: "Cardano",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#494958"
        ></path>
        <path
          d="M8.55362 11.9413C8.51818 12.583 8.99217 13.1324 9.60791 13.1693C9.63006 13.1693 9.65221 13.1693 9.67436 13.1693C10.2945 13.1693 10.7951 12.6476 10.7907 12.0013C10.7907 11.355 10.2901 10.8333 9.66993 10.8379C9.07634 10.8379 8.58463 11.3227 8.55362 11.9413Z"
          fill="white"
        ></path>
        <path
          d="M4.38133 11.6415C4.18199 11.6276 4.00923 11.7892 4.00037 11.9969C3.99151 12.2047 4.14212 12.3847 4.34146 12.394C4.5408 12.4078 4.70914 12.2462 4.72243 12.0385C4.73571 11.8307 4.58067 11.6553 4.38133 11.6415Z"
          fill="white"
        ></path>
        <path
          d="M8.48342 5.17373C8.66062 5.0814 8.73149 4.85057 8.6429 4.66591C8.5543 4.48124 8.33281 4.40738 8.15562 4.49971C7.97843 4.59204 7.90755 4.81825 7.99615 5.00292C8.08474 5.1922 8.3018 5.27068 8.48342 5.17373C8.47899 5.17373 8.48342 5.17373 8.48342 5.17373Z"
          fill="white"
        ></path>
        <path
          d="M9.61616 7.23687C9.89081 7.09376 10.0016 6.7429 9.86423 6.45667C9.72691 6.17044 9.39024 6.05503 9.1156 6.19814C8.84095 6.34125 8.73021 6.69211 8.86753 6.97834C9.00485 7.26457 9.34152 7.37998 9.61616 7.23687Z"
          fill="white"
        ></path>
        <path
          d="M5.79812 8.65427C6.01075 8.79738 6.29426 8.73736 6.43601 8.51577C6.57333 8.29417 6.51575 7.99871 6.30312 7.85098C6.09049 7.70787 5.80698 7.76788 5.66523 7.98948C5.52348 8.21107 5.58549 8.51115 5.79812 8.65427Z"
          fill="white"
        ></path>
        <path
          d="M6.47682 11.4336C6.16674 11.4151 5.90538 11.6598 5.88766 11.983C5.86994 12.3061 6.10472 12.5785 6.4148 12.597C6.72489 12.6154 6.98624 12.3708 7.00396 12.0476C7.02168 11.7291 6.7869 11.4521 6.47682 11.4336Z"
          fill="white"
        ></path>
        <path
          d="M5.8607 15.3436C5.63478 15.4636 5.54176 15.7499 5.65693 15.9899C5.77211 16.2254 6.04675 16.3223 6.2771 16.2023C6.50302 16.0822 6.59605 15.796 6.48087 15.556C6.3657 15.3205 6.08662 15.2236 5.8607 15.3436Z"
          fill="white"
        ></path>
        <path
          d="M8.03089 10.2281C8.33654 10.4359 8.74408 10.3482 8.93899 10.0296C9.13833 9.71109 9.05416 9.28637 8.74851 9.08324C8.44286 8.87549 8.03532 8.96321 7.84041 9.28175C7.64107 9.59568 7.72523 10.0204 8.03089 10.2281Z"
          fill="white"
        ></path>
        <path
          d="M14.9199 7.19034C15.1768 7.36577 15.5268 7.29191 15.6951 7.02415C15.8634 6.75639 15.7925 6.39168 15.5356 6.21625C15.2787 6.04082 14.9287 6.11468 14.7604 6.38244C14.5877 6.65482 14.6585 7.01492 14.9199 7.19034Z"
          fill="white"
        ></path>
        <path
          d="M16.0612 5.13608C16.2295 5.25149 16.451 5.20071 16.5617 5.02528C16.6725 4.84985 16.6237 4.61902 16.4554 4.50361C16.2871 4.38819 16.0656 4.43897 15.9548 4.60979C15.8485 4.78522 15.8972 5.02066 16.0612 5.13608Z"
          fill="white"
        ></path>
        <path
          d="M15.0054 10.8281C14.3896 10.7912 13.8581 11.2852 13.8271 11.9269C13.7916 12.5686 14.2656 13.1226 14.8813 13.1549C14.9035 13.1549 14.9256 13.1549 14.9434 13.1549C15.5591 13.1549 16.0597 12.6332 16.0597 11.9869C16.0641 11.3729 15.599 10.8604 15.0054 10.8281Z"
          fill="white"
        ></path>
        <path
          d="M9.98488 10.1455C10.1754 10.5379 10.5608 10.7872 10.986 10.7872C11.6017 10.7872 12.1023 10.2656 12.1023 9.61925C12.1023 9.4392 12.0624 9.25916 11.9827 9.09296C11.7036 8.51589 11.0303 8.28506 10.481 8.5759C9.92729 8.87137 9.7058 9.57308 9.98488 10.1455Z"
          fill="white"
        ></path>
        <path
          d="M18.7503 8.6537C18.9762 8.53367 19.0648 8.24283 18.9496 8.00738C18.8345 7.77194 18.5554 7.6796 18.3295 7.79964C18.1035 7.91967 18.0149 8.20589 18.1257 8.44134C18.2453 8.67678 18.5199 8.77373 18.7503 8.6537Z"
          fill="white"
        ></path>
        <path
          d="M15.9154 9.02339C15.592 9.19421 15.4591 9.60508 15.623 9.94209C15.7869 10.2791 16.1812 10.4176 16.5046 10.2468C16.8279 10.076 16.9608 9.6651 16.7969 9.32809C16.633 8.99108 16.2388 8.8572 15.9154 9.02339Z"
          fill="white"
        ></path>
        <path
          d="M12.2619 4.96093C12.5144 4.97478 12.7315 4.77165 12.7492 4.50851C12.7669 4.24536 12.5676 4.01915 12.3151 4.00068C12.0626 3.98683 11.8455 4.18535 11.8278 4.44849C11.8145 4.71625 12.0094 4.94246 12.2619 4.96093Z"
          fill="white"
        ></path>
        <path
          d="M12.2567 7.97521C12.62 7.99829 12.93 7.70745 12.9478 7.32889C12.9699 6.95033 12.6908 6.62717 12.3276 6.60871C11.9644 6.58562 11.6543 6.87647 11.6366 7.25503C11.6188 7.63358 11.8935 7.95674 12.2567 7.97521Z"
          fill="white"
        ></path>
        <path
          d="M8.69597 14.9744C9.01935 14.8036 9.15224 14.3927 8.98834 14.0557C8.82444 13.7187 8.43019 13.5802 8.10681 13.751C7.78344 13.9218 7.65055 14.3327 7.81445 14.6697C7.97835 15.0067 8.3726 15.1452 8.69597 14.9744Z"
          fill="white"
        ></path>
        <path
          d="M12.6834 8.97746C12.3467 9.5176 12.4885 10.2378 13.0067 10.5886C13.525 10.9395 14.2161 10.7918 14.5527 10.2516C14.8894 9.7115 14.7476 8.99131 14.2294 8.64045C14.0477 8.5158 13.8351 8.45117 13.6181 8.45117C13.2415 8.45117 12.8916 8.64968 12.6834 8.97746Z"
          fill="white"
        ></path>
        <path
          d="M14.6282 13.8527C14.3491 13.2757 13.6758 13.0448 13.1265 13.3357C12.5728 13.6265 12.3513 14.3282 12.6304 14.9007C12.9095 15.4778 13.5828 15.7086 14.1321 15.4177C14.6814 15.1315 14.9073 14.439 14.6326 13.862C14.6326 13.8573 14.6326 13.8573 14.6282 13.8527Z"
          fill="white"
        ></path>
        <path
          d="M16.5805 13.7698C16.2749 13.562 15.8673 13.6497 15.6724 13.9683C15.4731 14.2868 15.5573 14.7115 15.8629 14.9147C16.1686 15.1224 16.5761 15.0347 16.771 14.7162C16.9704 14.4022 16.8862 13.9775 16.5805 13.7698Z"
          fill="white"
        ></path>
        <path
          d="M18.7247 12.0193C18.7424 11.6961 18.5076 11.4237 18.1975 11.4053C17.8874 11.3868 17.6261 11.6315 17.6084 11.9546C17.5906 12.2778 17.8254 12.5502 18.1355 12.5687C18.4412 12.5871 18.7069 12.3378 18.7247 12.0193Z"
          fill="white"
        ></path>
        <path
          d="M20.272 11.6043C20.0726 11.5905 19.8999 11.7521 19.891 11.9598C19.8821 12.1676 20.0327 12.3476 20.2321 12.3568C20.4314 12.3707 20.5998 12.2091 20.613 12.0014C20.6219 11.7936 20.4713 11.6182 20.272 11.6043Z"
          fill="white"
        ></path>
        <path
          d="M18.8129 15.3432C18.6003 15.2001 18.3167 15.2601 18.175 15.4817C18.0377 15.7033 18.0953 15.9987 18.3079 16.1465C18.5205 16.2896 18.804 16.2296 18.9458 16.008C19.0875 15.7864 19.0255 15.4863 18.8129 15.3432Z"
          fill="white"
        ></path>
        <path
          d="M8.54462 18.861C8.37629 18.7456 8.1548 18.7964 8.04406 18.9672C7.93331 19.1426 7.98204 19.3735 8.14594 19.4889C8.31427 19.6043 8.53576 19.5535 8.64651 19.3827C8.76168 19.2119 8.71295 18.9764 8.54462 18.861Z"
          fill="white"
        ></path>
        <path
          d="M16.1302 18.8249C15.953 18.9172 15.8822 19.148 15.9708 19.3327C16.0594 19.5174 16.2808 19.5912 16.458 19.4989C16.6352 19.4066 16.7061 19.1803 16.6175 18.9957C16.5289 18.8064 16.3119 18.7279 16.1302 18.8249C16.1347 18.8249 16.1302 18.8249 16.1302 18.8249Z"
          fill="white"
        ></path>
        <path
          d="M11.9292 15.0207C12.2659 14.4806 12.1241 13.7604 11.6059 13.4049C11.0876 13.0541 10.3965 13.2018 10.0554 13.7419C9.71435 14.2821 9.86053 15.0023 10.3788 15.3577C10.5604 15.4824 10.7731 15.547 10.9901 15.547C11.3711 15.5516 11.721 15.3531 11.9292 15.0207Z"
          fill="white"
        ></path>
        <path
          d="M9.69269 16.8071C9.43576 16.6316 9.08581 16.7055 8.91748 16.9733C8.74914 17.241 8.82002 17.6057 9.07695 17.7812C9.33388 17.9566 9.68383 17.8827 9.85216 17.615C10.0249 17.3472 9.95404 16.9825 9.69269 16.8071Z"
          fill="white"
        ></path>
        <path
          d="M12.3018 19.0368C12.0494 19.023 11.8323 19.2261 11.8146 19.4892C11.7969 19.7524 11.9962 19.9786 12.2487 19.997C12.5012 20.0109 12.7182 19.8124 12.736 19.5492C12.7493 19.2815 12.5543 19.0553 12.3018 19.0368Z"
          fill="white"
        ></path>
        <path
          d="M12.3056 16.0218C11.9423 15.9987 11.6322 16.2896 11.6145 16.6681C11.5924 17.0467 11.8714 17.3698 12.2347 17.3883C12.5979 17.4068 12.908 17.1205 12.9257 16.742C12.9479 16.368 12.6688 16.0403 12.3056 16.0218Z"
          fill="white"
        ></path>
        <path
          d="M14.9949 16.7607C14.7203 16.9084 14.6095 17.2593 14.7513 17.5455C14.893 17.8318 15.2297 17.9472 15.5043 17.7994C15.779 17.6563 15.8897 17.3055 15.7524 17.0192C15.6106 16.733 15.274 16.613 14.9949 16.7607Z"
          fill="white"
        ></path>
      </svg>
    ),
  },
];

const coins = () => {
  return <div>coins</div>;
};

export default coins;