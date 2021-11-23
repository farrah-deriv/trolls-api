type ButtonPropsType = {
    text: string;
    id?: string;
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

const Button = ({ text, id, clickHandler, className }: ButtonPropsType) => (
    <button id={id} className={className} onClick={clickHandler}>
        {text}
    </button>
);

export default Button;
