import { keys, queryClient } from "@/shared/lib/query-client";
import type { ListItem } from "../types";

export function useListItemSocketMutations(listId: string) {
  const addItem = (listItem: ListItem) => {
    queryClient.setQueryData<ListItem[]>(keys.listItems(listId), (old) => {
      return old ? [...old, listItem] : [listItem];
    });
  };

  const updateItem = (listItem: ListItem) => {
    queryClient.setQueryData<ListItem[]>(keys.listItems(listId), (old) => {
      return old
        ? old.map((item) => (item.id === listItem.id ? listItem : item))
        : [];
    });
  };

  const deleteItem = (listItemId: string) => {
    queryClient.setQueryData<ListItem[]>(keys.listItems(listId), (old) => {
      return old ? old.filter((item) => item.id !== listItemId) : [];
    });
  };

  return {
    addItem,
    updateItem,
    deleteItem,
  };
}
