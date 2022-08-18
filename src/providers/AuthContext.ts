import { Context, createContext } from 'react';

// redefining createContext to not have a mandatory defaultValue params
type c = {
  <T = unknown>(defaultValue?: T): Context<typeof defaultValue>;
}

export const AuthContext = (<unknown>createContext as c)();
