import { Dispatch, ReactNode, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"

export type TextfieldProps = {
    type?: string,
    placeholder?: string,
    value?: string,
    onChange: (value: string) => void,
    isContact?: boolean,
    name?: string;
}

export type TextAreaProps = {
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    isContact?: boolean
}

export type DashboardTextfieldProps = {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    isDescription?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type SectionProps = {
    marginTop?: string,
    marginBottom?: string,
    children?: ReactNode;
}

export type RoundedIconProps = {
    image: string,
}

export type AuthSubHeaderProps = {
    message: string,
    color?: string,
    fontWeight?: number,
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit',
}

export type QuoteTextProps = {
    quote: string,
}

export type AuthButtonProps = {
    title: string,
    textColor?: string,
    backgroundColor?: string,
    borderColor?: string,
    onClick?: () => void
}

export type AuthHeaderProps = {
    title: string
}

export type LableProps = {
    title: string
}

export type NavLinkProps = {
    id: number,
    iconName: string,
    name: string,
    route: string,
}

export type PageHeaderProps = {
    title: string,
    subTitle: string,
}

export type CourierProps = {
    _id?: string,
}

export type NoDataProps = {
    message: string,
}

export type BackButtonProps = {
    image: string
}

export type AlertProps = {
    type: 'warn' | 'error' | 'success',
    statusCode: number,
    message: string,
}