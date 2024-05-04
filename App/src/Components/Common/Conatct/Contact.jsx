import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contacts}>
      <div className={styles.bubble}>
        <svg
          width="19"
          height="19"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9159 2.90341C19.4251 2.90744 20.1911 2.91549 20.8524 2.93427L21.1126 2.94366C21.4131 2.95439 21.7096 2.9678 22.0678 2.9839C23.4951 3.05097 24.469 3.27634 25.3235 3.60769C26.2089 3.94842 26.9548 4.40989 27.7006 5.15441C28.3828 5.82501 28.9106 6.63619 29.2474 7.5315C29.5787 8.38602 29.8041 9.35994 29.8711 10.7886C29.8872 11.1454 29.9007 11.4419 29.9114 11.7437L29.9194 12.004C29.9396 12.664 29.9476 13.43 29.9503 14.9391L29.9516 15.9399V17.6972C29.9549 18.6757 29.9446 19.6542 29.9208 20.6324L29.9127 20.8926C29.902 21.1944 29.8886 21.4909 29.8725 21.8477C29.8054 23.2764 29.5774 24.249 29.2474 25.1048C28.9116 26.0006 28.3836 26.812 27.7006 27.4819C27.0298 28.1638 26.2187 28.6916 25.3235 29.0287C24.469 29.36 23.4951 29.5854 22.0678 29.6524C21.7495 29.6674 21.4311 29.6808 21.1126 29.6927L20.8524 29.7007C20.1911 29.7195 19.4251 29.7289 17.9159 29.7316L16.9152 29.7329H15.1592C14.1802 29.7363 13.2013 29.726 12.2227 29.7021L11.9624 29.694C11.644 29.682 11.3256 29.6681 11.0073 29.6524C9.57998 29.5854 8.60607 29.36 7.7502 29.0287C6.855 28.6924 6.04414 28.1645 5.37445 27.4819C4.6917 26.8116 4.1634 26.0004 3.82639 25.1048C3.49504 24.2503 3.26967 23.2764 3.2026 21.8477C3.18765 21.5294 3.17424 21.211 3.16236 20.8926L3.15565 20.6324C3.13093 19.6542 3.11975 18.6757 3.12211 17.6972V14.9391C3.11837 13.9607 3.12821 12.9822 3.15162 12.004L3.16101 11.7437C3.17175 11.4419 3.18516 11.1454 3.20126 10.7886C3.26833 9.35994 3.4937 8.38737 3.82505 7.5315C4.16191 6.63527 4.69126 5.82384 5.37579 5.15441C6.04531 4.47223 6.85563 3.94438 7.7502 3.60769C8.60607 3.27634 9.57864 3.05097 11.0073 2.9839C11.3641 2.9678 11.6619 2.95439 11.9624 2.94366L12.2227 2.93561C13.2009 2.91177 14.1794 2.90149 15.1578 2.90475L17.9159 2.90341ZM16.5369 9.61079C14.758 9.61079 13.0519 10.3175 11.794 11.5753C10.5362 12.8332 9.82949 14.5393 9.82949 16.3182C9.82949 18.0971 10.5362 19.8031 11.794 21.061C13.0519 22.3189 14.758 23.0256 16.5369 23.0256C18.3158 23.0256 20.0218 22.3189 21.2797 21.061C22.5376 19.8031 23.2443 18.0971 23.2443 16.3182C23.2443 14.5393 22.5376 12.8332 21.2797 11.5753C20.0218 10.3175 18.3158 9.61079 16.5369 9.61079ZM16.5369 12.2937C17.0654 12.2937 17.5887 12.3977 18.077 12.5998C18.5653 12.802 19.009 13.0984 19.3828 13.472C19.7565 13.8456 20.053 14.2892 20.2554 14.7775C20.4577 15.2657 20.5619 15.789 20.562 16.3175C20.5621 16.846 20.4581 17.3693 20.2559 17.8576C20.0537 18.3459 19.7574 18.7896 19.3837 19.1634C19.0101 19.5372 18.5665 19.8337 18.0782 20.036C17.59 20.2383 17.0667 20.3425 16.5382 20.3426C15.4709 20.3426 14.4472 19.9186 13.6925 19.1639C12.9378 18.4091 12.5138 17.3855 12.5138 16.3182C12.5138 15.2508 12.9378 14.2272 13.6925 13.4725C14.4472 12.7177 15.4709 12.2937 16.5382 12.2937M23.581 7.59858C23.1362 7.59858 22.7097 7.77524 22.3953 8.08971C22.0808 8.40418 21.9041 8.8307 21.9041 9.27542C21.9041 9.72015 22.0808 10.1467 22.3953 10.4611C22.7097 10.7756 23.1362 10.9523 23.581 10.9523C24.0257 10.9523 24.4522 10.7756 24.7667 10.4611C25.0811 10.1467 25.2578 9.72015 25.2578 9.27542C25.2578 8.8307 25.0811 8.40418 24.7667 8.08971C24.4522 7.77524 24.0257 7.59858 23.581 7.59858Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.bubble}>
        <svg
          width="13"
          height="113"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_75)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.9516 26.3613L16.4595 11.0686L16.4775 11.0829L25.9376 0.122131H22.7763L15.0698 9.04344L8.9499 0.122131H0.65889L10.4542 14.3998L10.453 14.3986L0.12207 26.3613H3.28339L11.8512 16.4357L18.6606 26.3613H26.9516ZM7.69731 2.5075L22.4184 23.9759H19.9132L5.18022 2.5075H7.69731Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_75">
              <rect
                width="26.8295"
                height="26.8295"
                fill="white"
                transform="translate(0.12207 0.122131)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.bubble}>
        <svg
          width="23"
          height="23"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4067 23.7947L24.5293 19.0995L16.4067 14.4043V23.7947ZM34.4987 11.5403C34.7022 12.2759 34.843 13.2618 34.9369 14.5139C35.0465 15.7659 35.0934 16.8458 35.0934 17.7848L35.1873 19.0995C35.1873 22.527 34.9369 25.0467 34.4987 26.6587C34.1074 28.0673 33.1997 28.975 31.7912 29.3663C31.0556 29.5697 29.7096 29.7106 27.6438 29.8045C25.6092 29.914 23.7468 29.961 22.0252 29.961L19.5368 30.0549C12.9792 30.0549 8.89441 29.8045 7.2824 29.3663C5.87385 28.975 4.96612 28.0673 4.57485 26.6587C4.3714 25.9231 4.23054 24.9371 4.13664 23.6851C4.02709 22.4331 3.98013 21.3532 3.98013 20.4141L3.88623 19.0995C3.88623 15.672 4.13664 13.1523 4.57485 11.5403C4.96612 10.1317 5.87385 9.22399 7.2824 8.83273C8.01798 8.62927 9.36392 8.48842 11.4298 8.39451C13.4644 8.28496 15.3268 8.23801 17.0483 8.23801L19.5368 8.1441C26.0944 8.1441 30.1792 8.39451 31.7912 8.83273C33.1997 9.22399 34.1074 10.1317 34.4987 11.5403Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Contact;
