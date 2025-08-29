import clsx from "clsx"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

export interface ModalProps {
    open: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
}

export const BaseModal = ({ onClose, className, children }: Omit<ModalProps, "open">) => {
    return (
        <div className={clsx("p-4 border-[1px] border-black rounded-[6px] fixed w-full max-w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 bg-white", className)}>
            <X className="self-end cursor-pointer" onClick={onClose} />
            {children}
        </div>
    )
}


export const Modal = ({ open, ...rest }: ModalProps) => {
    if (!open) return null;

    return createPortal(
        <BaseModal {...rest} />,
        document.body
    )
}
