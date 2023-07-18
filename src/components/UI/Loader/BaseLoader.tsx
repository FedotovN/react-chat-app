import classes from "./BaseLoader.module.scss"
import { borderColors } from "../../../types/UIColors"
export default function BaseLoader({
    size,
    borderColor
}: {
    size?: 'tiny' | 'small' | 'medium' | 'large',
    borderColor?: borderColors
}) {
    function getLoaderSize() {
        const sizesAplhabet = {
            tiny: 'min-h-[12.5px] w-[12.5px]',
            small: 'min-h-[17.5px] w-[17.5px]',
            medium: 'min-h-[22.5px] w-[22.5px]',
            large: 'min-h-[30px] w-[30px]'
        }    
        return sizesAplhabet[size || 'medium']
    }


    return (
        <div className={`${classes.baseLoader}`}>
            <div
            className={`
            ${getLoaderSize()} 
            ${borderColor || 'border-blue-600' }
            border-t-transparent
            border-r-transparent
            border-l-transparent
            border-2
            rounded-full` }>
            </div>
        </div>
    )
}