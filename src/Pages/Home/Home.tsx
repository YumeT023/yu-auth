import React from 'react';
import { Wrapper } from '../../common/components/Global';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

export function Home() {
  return (
    <Wrapper>
      <Header>
        <button className="home__header__btn">
          Logout
          <i className="fas fa-door-open" />
        </button>
      </Header>
      <HomePage />
    </Wrapper>
  );
}
