export type List = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ListItem = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  checked: boolean;
  listId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateListPayload = Pick<List, "name" | "description">;
