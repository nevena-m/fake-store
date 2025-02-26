import { PropsWithChildren } from "react";

interface ImageWrapperProps {
    className?: string;
}

export default function ImageWrapper({ children, className = '' }: PropsWithChildren<ImageWrapperProps>) {
    return (
        <div className={`flex flex-1/3 max-md:flex max-md:justify-center ${className}`}>
            {children}
        </div>
    );
}