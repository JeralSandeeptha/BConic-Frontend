import { Dispatch, ReactNode, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"

export type HandleUserRegisterProps = {
    email: string,
    password: string,
    resetCredentials: () => void
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction,
};