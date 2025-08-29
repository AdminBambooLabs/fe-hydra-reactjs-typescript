import { CircularButton } from "@/shared/ui/circular-button";
import { useLists } from "../api/queries";
import { Plus } from "lucide-react"
import { useCreateList } from "../api/mutations";
import { NewListModal } from "../components/new-list-modal";
import { useState } from "react";

export function ListsPage() {
    const { data } = useLists();
    const createList = useCreateList();

    const [openModal, setOpenModal] = useState(false)

    function handleCreateList(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form);

        const name = (formData.get('name') || "") as string
        const description = (formData.get('description') || "") as string

        createList.mutate({
            name,
            description
        })

        setOpenModal(false);
    }

    return (
        <div>
            <h1>Listas em aberto</h1>

            {data?.length ? (
                <ul className="px-2">
                    {data.map((list) => (
                        <li key={list.id}>
                            <p>{list.name}</p>
                            <p className="text-sm text-gray-700">{list.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma lista encontrada</p>
            )}

            <CircularButton className="fixed bottom-6 right-6" onClick={() => setOpenModal(true)}><Plus size={40} /></CircularButton>

            <NewListModal open={openModal} onClose={() => setOpenModal(false)} onSubmit={handleCreateList} />
        </div>
    )
}
