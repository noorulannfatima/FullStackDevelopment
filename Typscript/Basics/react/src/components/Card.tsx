import type { PropsWithChildren, ReactNode } from "react";

// Extending PropsWithChildren automatically adds the 'children' prop type
interface CardProps extends PropsWithChildren {
    title: string;
    // ReactNode is a type that represents anything that can be rendered (elements, strings, null, etc.)
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