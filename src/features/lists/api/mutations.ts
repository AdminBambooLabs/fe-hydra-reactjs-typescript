import { post } from "@/shared/lib/http";
import { useMutation } from "@tanstack/react-query";
import type { CreateListPayload, List } from "../types";
import { keys, queryClient } from "@/shared/lib/query-client";

export function useCreateList() {
  return useMutation({
    mutationFn: (data: CreateListPayload) => post<List>("/list", data),
    onSuccess: (created) => {
      queryClient.setQueryData<List[]>(keys.lists(), (old) =>
        old ? [...old, created] : [created]
      );
    },
  });
}
