import { get } from "@/shared/lib/http";
import { keys } from "@/shared/lib/query-client";
import { useQuery } from "@tanstack/react-query";
import type { ListItem } from "../types";
import type { List } from "@/features/lists/types";

export function useList(listId: string) {
  return useQuery({
    queryKey: keys.list(listId),
    queryFn: () => get<List>(`/list/${listId}`),
  });
}

export function useListItems(listId: string) {
  return useQuery({
    queryKey: keys.listItems(listId),
    queryFn: () => get<ListItem[]>(`/list-item/${listId}`),
  });
}
