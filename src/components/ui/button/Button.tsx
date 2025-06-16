import s from './Button.module.css'

export type ButtonPropsType = {
    title: string
    onClick?: () => void
    className?: string
    disabled?: boolean
}

export const Button = ({title, onClick,disabled}:ButtonPropsType) => {
    return <button onClick={onClick} className={s.button} disabled={disabled}>{title}</button>
}