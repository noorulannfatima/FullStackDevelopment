import type { PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode;
}

export default function Card({ title, children, footer }: CardProps) {
    return (
        <section>
            <h1>{title}</h1>
        <div>{children}</div>
        <div>{footer}</div>
        </section>
    )
}