import React from 'react';
import { ComponentWithChild } from '../../../types/ComponentWithChild';

export function Header({ children }: ComponentWithChild) {
  return <div className="home__header">{children}</div>;
}
