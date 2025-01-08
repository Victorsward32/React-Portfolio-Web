import React, { forwardRef } from 'react';
import styles from './CommonButton.module.css'; // Assuming CSS modules are being used

const CommonButton = forwardRef(({ 
  iconPosition = "left", 
  Icon, 
  children, 
  variant = "default", 
  ...props 
}, ref) => {
  const buttonClass = `${styles.customButton} ${styles[`variant-${variant}`]} ${styles[`icon-position-${iconPosition}`]}`;

  return (
    <button
      ref={ref}
      className={buttonClass}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon className={styles.icon} />}
      <span className={styles.text}>{children}</span>
      {iconPosition === "right" && Icon && <Icon className={styles.icon} />}
    </button>
  );
});

export default CommonButton;
