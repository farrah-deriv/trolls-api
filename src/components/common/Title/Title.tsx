import React from "react";

interface TitlePropsType {
    headerSize: string;
}

const Title: React.FC<TitlePropsType> = ({
    headerSize,
    children
}) => {
    const Title = headerSize as keyof JSX.IntrinsicElements || "h1" as keyof JSX.IntrinsicElements;
    return (
        <Title>
            {children}
        </Title>
    )
};

export default Title;