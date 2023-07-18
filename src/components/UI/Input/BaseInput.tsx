import IBaseInputProps from '../../../interfaces/props/IBaseInputProps'

export default function BaseInput({
    className,
    value,
    autoFocus,
    onChange,
    onInput,
    label,
    placeholder,
    ...props
}: IBaseInputProps) {
    return (
        <div className = {`${className}  flex flex-col gap-2 w-full text-gray-500`}>
            { label 
                ? <label htmlFor="input" className='text-xs'>{label}</label>
                : ''
            }
            <input
                {...props}
                id='input'
                className={
                    'outline-0 text-sm border border-gray-200 rounded h-8 p-1 focus:border-blue-400 transition-colors w-full'
                }
                autoFocus={autoFocus}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value as string)}
                onInput={(e) => onInput?.((e.target as HTMLInputElement).value)}
                type="text" />
        </div>
    )
}