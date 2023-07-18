import { backgroundColors, textColors, borderColors } from "../../types/UIColors"
export default interface IBaseButtonProps {
    children: any,
    className?: string,
    bgColor?: backgroundColors,
    textColor?: textColors,
    borderColor?: borderColors,
    onClick?: (e: React.MouseEvent) => void,
    disabled?: boolean
}