import React from 'react';
import { Color } from './Global';

/*= === TextField ==== */
export interface TextFieldPropType extends React.InputHTMLAttributes<HTMLInputElement> {
  message?: string;
  lineColor?: Color | 'xeno';
}

/*= === Button ==== */
export interface ButtonPropType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: Color;
  expand?: 'block' | 'default';
  type?: 'submit' | 'reset' | 'button' | undefined;
}
