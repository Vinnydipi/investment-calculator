import React, { ReactNode } from "react";
import "./Card.css";

interface props
{
    children: ReactNode;
}

const Card: React.FC<props> = ({children}) =>
{
    return (
        <div>{children}</div>
    )
}

export default Card;