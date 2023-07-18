export default interface IBaseInputProps {
    className?: string,
    autoFocus?: boolean,
    label?: string,
    placeholder?: string,
    pixelWidth?: number,
    isFullWidth?: boolean,
    value?: string,
    onChange?: (value: string) => void, 
    onInput?: (value: string) => void
}