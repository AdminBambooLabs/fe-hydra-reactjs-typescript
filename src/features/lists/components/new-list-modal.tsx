import { Modal, type ModalProps } from "@/shared/ui/modal"
import type React from "react"


export interface NewListModal extends Omit<ModalProps, "children"> {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const NewListModal = ({ onSubmit, ...rest }: NewListModal) => {
    return (
        <Modal {...rest}>
            <form onSubmit={onSubmit} className="flex flex-col gap-2">
                <input className="bg-gray-300" type="text" name="name" placeholder="digite o nome da lista" />
                <input className="bg-gray-300" type="text" name="description" placeholder="digite a descrição da lista" />

                <button className="border-2 border-gray-300" type="submit">nova lista</button>
            </form>
        </Modal>
    )
}