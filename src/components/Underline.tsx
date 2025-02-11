import { PropsWithChildren } from "react";

export function Underline({children}: PropsWithChildren) {
    return <div className='relative rounded-md w-fit group'>
        <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-purple-900 dark:bg-purple-200 transition-all duration-200 rounded-full
            w-0 group-hover:w-full`}
        />
        {children}
    </div>
}