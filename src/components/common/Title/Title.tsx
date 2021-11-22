import React from "react";

interface TitlePropsType {
    headerSize: string;
    className: string
}

const Title: React.FC<TitlePropsType> = ({
    className,
    headerSize,
    children
}) => {
    const Title = headerSize as keyof JSX.IntrinsicElements || "h1" as keyof JSX.IntrinsicElements;
    return (
        <Title id="title" className={className}>
            {children}
        </Title>
    )
};

export default Title;
