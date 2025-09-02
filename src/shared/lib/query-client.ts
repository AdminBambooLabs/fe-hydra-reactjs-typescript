import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 10_000,
      retry: 2,
    },
  },
});

export const keys = {
  lists: () => ["lists"] as const,
  list: (listId: string) => ["list", listId] as const,
  listItems: (listId: string) => ["list-items", listId] as const,
};
