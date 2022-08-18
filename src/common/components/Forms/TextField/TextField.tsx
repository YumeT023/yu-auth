import React, { useState } from 'react';
import { TextFieldPropType } from '../../types/Form';
import './TextField.css';

function TextField(
  {
    className = '',
    placeholder = '',
    required,
    onChange,
    lineColor = 'primary',
    message,
    ...restProps
  }: TextFieldPropType,
) {
  const [isFilled, setIsFilled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(e.target.value.length > 0);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <div className={`textfield__wrapper ${lineColor}`}>

        <input className={`input__field ${className}`} onChange={handleChange} {...restProps} />

        <span className={`input__placeholder ${isFilled ? 'float__placeholder' : ''}`}>
          {placeholder + (required ? '*' : '')}
        </span>
      </div>

      <small className="textfield__helper">
        {message}
      </small>
    </>
  );
}

export default TextField;
