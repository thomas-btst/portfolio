import { PropsWithChildren } from "react";

export function Bold({children}: PropsWithChildren) {
    return <span className="font-bold text-purple-950 dark:text-purple-100">{children}</span>
}