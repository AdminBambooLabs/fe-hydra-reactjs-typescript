import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { WS_URL } from "@/shared/lib/env";
import type { ListItem } from "../types";
import { useListItemSocketMutations } from "./mutations";

export function useListSocket(listId: string) {
  const socket = useRef<Socket>();
  const mutations = useListItemSocketMutations(listId);

  useEffect(() => {
    socket.current = io(WS_URL, {
      transports: ["websocket"],
    });

    socket.current.emit("list:join", { listId });

    socket.current.on("list:item:created", (listItem: ListItem) => {
      mutations.addItem(listItem);
    });

    socket.current.on("list:item:updated", (listItem: ListItem) => {
      mutations.updateItem(listItem);
    });

    socket.current.on(
      "list:item:deleted",
      ({ listItemId }: { listItemId: string }) => {
        mutations.deleteItem(listItemId!);
      }
    );

    return () => {
      socket?.current?.emit("list:leave", { listId });
      socket?.current?.disconnect();
    };
  }, [listId, mutations]);

  const addItem = (listItem: ListItem) => {
    socket.current?.emit("list:item:create", listItem);
  };

  const updateItem = (listItem: ListItem) => {
    socket.current?.emit("list:item:update", listItem);
  };

  const deleteItem = (listItemId: string) => {
    socket.current?.emit("list:item:delete", { listId, listItemId });
  };

  return {
    addItem,
    updateItem,
    deleteItem,
  };
}
