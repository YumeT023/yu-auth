import React from 'react';
import { ComponentWithChild } from '../../../types/ComponentWithChild';

export function FormWrapper({ children }: ComponentWithChild) {
  return (
    <div className="form__wrapper">
      <div>
        <h4>Yu-auth</h4>
      </div>
      {children}
    </div>
  );
}
