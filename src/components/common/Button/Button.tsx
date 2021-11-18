type ButtonPropsType = {
    text: string,
    id?: string,
    className?: string
}

const Button = ({ text, id, className }: ButtonPropsType) => (
    <button id={id} className={className}>{text}</button>
)

export default Button;