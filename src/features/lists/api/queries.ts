import { useQuery } from "@tanstack/react-query";
import { keys } from "@/shared/lib/query-client";
import { get } from "@/shared/lib/http";
import type { List } from "../types";

export function useLists() {
  return useQuery({
    queryKey: keys.lists(),
    queryFn: () => get<List[]>("/list"),
  });
}
