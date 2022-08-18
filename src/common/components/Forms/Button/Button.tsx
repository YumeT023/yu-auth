import React from 'react';
import { ButtonPropType } from '../../types/Form';
import './Button.css';

function Button({
  label,
  className,
  color = 'primary',
  expand = 'default',
  ...restProps
}: ButtonPropType) {
  return (
    <div className={`button__wrapper ${color} ${expand}`}>
      <button className={`form__button ${className}`} {...restProps}>{label}</button>
    </div>
  );
}

export default Button;
