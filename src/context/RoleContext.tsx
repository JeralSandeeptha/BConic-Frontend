import React, { createContext, useState } from 'react';
import { RoleContextType, RoleProviderProps } from '../types/model';

export const RoleContext = createContext<RoleContextType | null>(null);

const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
    const [role, setRole] = useState<string | null>(() => {
        return localStorage.getItem('role');
    });

    const updateRole = (newToken: string) => {
        setRole(newToken);
        localStorage.setItem('role', newToken);
    };

    const clearRole = () => {
        setRole(null);
        localStorage.removeItem('role');
    };

    return (
        <RoleContext.Provider value={{ role, updateRole, clearRole }}>
            {children}
        </RoleContext.Provider>
    );
};

export default RoleProvider;
