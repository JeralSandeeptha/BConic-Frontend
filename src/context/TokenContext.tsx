import React, { createContext, useState } from 'react';
import { TokenContextType, TokenProviderProps } from '../types/model';

export const TokenContext = createContext<TokenContextType | null>(null);

const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('token');
  });

  const updateToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const clearToken = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <TokenContext.Provider value={{ token, updateToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
