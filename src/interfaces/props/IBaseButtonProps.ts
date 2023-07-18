import { backgroundColors } from "../../types/UIColors"
export default interface IBaseButtonProps {
    children: any,
    className?: string,
    bgColor?: backgroundColors,
    onClick?: (e: React.MouseEvent) => void,
    disabled?: boolean
}