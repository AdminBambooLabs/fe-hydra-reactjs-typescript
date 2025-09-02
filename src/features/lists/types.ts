export type List = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateListPayload = Pick<List, "name" | "description">;
