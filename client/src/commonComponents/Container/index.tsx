import { PropsWithChildren } from "react";

interface ContainerProps {
    className?: string;
}

export default function Container({children, className}: PropsWithChildren<ContainerProps>){
    return (
        <div className={`flex p-4 ${className ?? ''}`}>
            {children}
        </div>
    );
}