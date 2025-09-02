import clsx from "clsx"
import type { HTMLAttributes } from "react"

export type CircularButtonProps = HTMLAttributes<HTMLButtonElement>

export const CircularButton = ({ className, children, ...rest }: CircularButtonProps) => {
    return (
        <button className={clsx("border-[1px] border-black rounded-full p-2.5 shadow", className)} {...rest}>{children}</button>
    )
}
