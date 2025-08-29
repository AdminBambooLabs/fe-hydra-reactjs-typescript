import clsx from "clsx"
import type { HTMLAttributes } from "react"

export const CircularButton = ({ className, children, ...rest }: HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={clsx("border-[1px] border-black rounded-full p-2.5 shadow", className)} {...rest}>{children}</button>
    )
}