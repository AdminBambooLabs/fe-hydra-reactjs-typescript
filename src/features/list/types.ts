export type ListItem = {
  id?: string;
  name: string;
  description: string;
  quantity: number;
  checked: boolean;
  listId: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateListItemPayload = Pick<
  ListItem,
  "name" | "description" | "quantity" | "listId" | "checked"
>;
