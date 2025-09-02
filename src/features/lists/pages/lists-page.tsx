import { useLists } from "../api/queries";
import { useCreateList } from "../api/mutations";
import { useNavigate } from "react-router-dom"
import { Dialog, DialogFooter, DialogHeader, DialogContent, DialogTitle, DialogTrigger } from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { Plus } from "lucide-react";

export function ListsPage() {
    const [openModal, setOpenModal] = useState(false);

    const { data } = useLists();
    const createList = useCreateList();

    const navigate = useNavigate();

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
        <div className="py-10">
            <div className="px-10">
                <h1 className="text-2xl text-[#000] pb-4 font-medium">Listas em aberto</h1>
            </div>

            <Separator className="my-4" />

            <div className="px-10">
                {data?.length ? (
                    <ul className="px-2 flex flex-col gap-3">
                        {data.map((list) => (
                            <Card key={list.id} className="cursor-pointer" onClick={() => navigate(`/list/${list.id}`)}>
                                <CardContent className="flex flex-col gap-2">
                                    <CardTitle className="text-[#333333]">
                                        {list.name}
                                    </CardTitle>
                                    <CardDescription className="text-[#9E9E9E]">
                                        {list.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhuma lista encontrada</p>
                )}
            </div>

            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogTrigger asChild>
                    <Button size="icon" className="fixed bottom-6 right-6 w-[55px] h-[55px]">
                        <Plus />
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <form onSubmit={handleCreateList} className="flex flex-col gap-2">
                        <DialogHeader>
                            <DialogTitle>Criar nova lista</DialogTitle>
                        </DialogHeader>

                        <div className="flex flex-col gap-4 my-4">
                            <div className="flex flex-col gap-2">
                                <Label>Nome</Label>
                                <Input type="text" name="name" placeholder="digite o nome da lista" />
                            </div>

                            <div>
                                <Label>Descrição</Label>
                                <Input type="text" name="description" placeholder="digite a descrição da lista" />
                            </div>

                        </div>

                        <DialogFooter>
                            <Button type="submit">Criar lista</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
