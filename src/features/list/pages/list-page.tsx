import { useParams } from "react-router-dom";
import { useListSocket } from "../api/socket";
import { useList, useListItems } from "../api/queries";
import { useState } from "react";
import clsx from "clsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/shared/ui/card";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Plus, Trash } from "lucide-react";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { Separator } from "@radix-ui/react-separator";

export function ListPage() {
    const [openModal, setOpenModal] = useState(false);

    const { id: listId } = useParams();
    const { data: list } = useList(listId!)
    const { data } = useListItems(listId!);

    const { addItem, updateItem, deleteItem } = useListSocket(listId!);

    const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const name = (formData.get("name") || "") as string;
        const description = (formData.get("description") || "") as string;
        const quantity = Number(formData.get("quantity") || "1") as number;

        addItem({ name, description, listId: listId!, quantity, checked: false });

        setOpenModal(false);
    };

    return (
        <div className="py-10">
            <div className="px-10 pb-4">
                <h1 className="text-2xl text-[#000]  font-medium">{list?.name}</h1>
                <p className="text-[16px] text-[#9E9E9E]">{list?.description}</p>
            </div>

            <Separator className="my-4" />

            <div className="px-10">
                {data?.length ? (
                    <ul className="px-2 flex flex-col gap-3">
                        {data.map((listItem) => (
                            <Card
                                key={listItem.id}
                                onClick={() =>
                                    updateItem({ ...listItem, checked: !listItem.checked })
                                }
                                className="cursor-pointer flex flex-row justify-between"
                            >
                                <CardContent
                                    className={clsx(
                                        "flex flex-col gap-1",
                                        listItem.checked ? "line-through opacity-40" : ""
                                    )}
                                >
                                    <CardTitle className="text-[#333333]">
                                        {listItem.name}
                                    </CardTitle>
                                    <CardDescription className="text-[#9E9E9E]">
                                        {listItem.description}
                                    </CardDescription>
                                    <CardDescription className="text-[#9E9E9E]">
                                        quantidade: {listItem.quantity}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="cursor-pointer"
                                        variant="outline"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteItem(listItem.id!);
                                        }}
                                    >
                                        <Trash />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum item na lista</p>
                )}
            </div>

            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogTrigger asChild>
                    <Button
                        size="icon"
                        className="fixed bottom-6 right-6 w-[55px] h-[55px]"
                    >
                        <Plus />
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <form onSubmit={handleAddItem} className="flex flex-col gap-2">
                        <DialogHeader>
                            <DialogTitle>Adicionar novo item</DialogTitle>
                        </DialogHeader>

                        <div className="flex flex-col gap-4 my-4">
                            <div className="flex flex-col gap-2">
                                <Label>Nome</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="digite o nome da lista"
                                />
                            </div>

                            <div>
                                <Label>Descrição</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    placeholder="digite a descrição da lista"
                                />
                            </div>

                            <div>
                                <Label>Quantidade</Label>
                                <Input
                                    type="number"
                                    name="description"
                                    placeholder="digite a descrição da lista"
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button type="submit">Adicionar item</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
