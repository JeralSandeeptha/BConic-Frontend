import { Dispatch, ReactNode, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { ICourier, UpdateUser, User } from "./model";

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

export type HandleAddCourierProps = {
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction,
    userId: string | null,
    senderName: string | null,
    senderAddress: string | null,
    recepientName: string | null,
    recepientAddress: string | null,
    additionalInfo: string | null,
    mobile: string | null,
    token: string
};

export type HandleUserLoginProps = {
    email: string,
    password: string,
    resetCredentials: () => void
    setError: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    navigate: NavigateFunction,
    updateToken: (token: string) => void,
    updateId: (id: string) => void
    updateRole: (id: string) => void
};

export type GetSingleUserProps = {
    token: string,
    setUser: Dispatch<SetStateAction<User | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdateUser | undefined>>,
    id: string | null
}

export type UpdateUserProps = {
    id: string,
    setUser: Dispatch<SetStateAction<User | undefined>>,
    setFormData?: Dispatch<SetStateAction<UpdateUser | undefined>>,
    formData?: UpdateUser | undefined
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    getSingleUser?: (props: GetSingleUserProps) => void,
    token: string
}

export type GetCouriersByUserIdProps = {
    userId: string | null,
    setCourieres: Dispatch<SetStateAction<ICourier[]>>
    token: string
}

export type GetAllCouriersProps = {
    setCourieres: Dispatch<SetStateAction<ICourier[]>>
    token: string
}

export type GetCourierProps = {
    courierId: string | undefined,
    setCourier: (data: any) => void,
    token: string
}

export type UpdateCourierById = {
    courierId: string | undefined,
    status: string | undefined,
    setError: Dispatch<SetStateAction<boolean>>,
    setSuccess: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setStatusCode: Dispatch<SetStateAction<number>>,
    setMessage: Dispatch<SetStateAction<string>>,
    token: string,
    navigate: NavigateFunction
}
