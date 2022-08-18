import React from 'react';
import { WrapperType } from '../types/Global';
import './Wrapper.css';

export function Wrapper(props: WrapperType) {
  const { children, color } = props;
  return (
    <div className="Wrapper" color={color}>
      {children}
    </div>
  );
}
