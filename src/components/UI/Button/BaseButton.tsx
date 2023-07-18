import { useEffect, useRef } from 'react' 
import IBaseButtonProps from "../../../interfaces/props/IBaseButtonProps"
export default function BaseButton({
    children,
    className,
    bgColor,
    onClick,
    ...props
}: IBaseButtonProps) {

    return (
        <button
        className={`
            ${className ? className : ''}
            ${bgColor ? bgColor : 'bg-blue-600'}
            px-3 py-2
            whitespace-nowrap
            text-ellipsis
            overflow-hidden
            rounded
            shadow
            text-gray-100
            text-xs
            hover:opacity-90
            transition-all
            flex
            justify-center 
            items-center `}
        onClick={onClick}
        >{children}</button>
    )
}