import { PropsWithChildren } from "react";

interface PageLayoutProps {
    header?: React.ReactNode;
    nav?: React.ReactNode;
    footer?: React.ReactNode;
}

export default function PageLayout({ children, header, nav, footer }: PropsWithChildren<PageLayoutProps>) {
    return (
        <>
            {header}
            {nav}
            <main>
                {children}
            </main>
            {footer}
        </>
    );
}