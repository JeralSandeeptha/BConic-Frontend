import { Dispatch, ReactNode, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"

export interface IdContextType {
    id: string | null;
    updateId: (newId: string) => void;
    clearId: () => void;
}

export interface IdProviderProps {
    children: ReactNode;
}

export interface TokenContextType {
    token: string | null;
    updateToken: (newToken: string) => void;
    clearToken: () => void;
}

export interface TokenProviderProps {
    children: ReactNode;
}

export interface RoleContextType {
    role: string | null;
    updateRole: (newToken: string) => void;
    clearRole: () => void;
}

export interface RoleProviderProps {
    children: ReactNode;
}