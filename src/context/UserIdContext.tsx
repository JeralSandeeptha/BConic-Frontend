import React, { createContext, useState, ReactNode } from 'react';
import { IdContextType, IdProviderProps } from '../types/model';

export const IdContext = createContext<IdContextType | null>(null);

const IdProvider: React.FC<IdProviderProps> = ({ children }) => {
  const [id, setId] = useState<string | null>(() => {
    return localStorage.getItem('id');
  });

  const updateId = (id: string) => {
    setId(id);
    localStorage.setItem('id', id);
  };

  const clearId = () => {
    setId(null);
    localStorage.removeItem('id');
  };

  return (
    <IdContext.Provider value={{ id, clearId, updateId }}>
      {children}
    </IdContext.Provider>
  );
};

export default IdProvider;
