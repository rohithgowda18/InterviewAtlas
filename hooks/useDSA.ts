import { useEffect } from "react";
import { useDSAStore } from "@/store/useDSAStore";

export function useDSA() {
  const store = useDSAStore();

  useEffect(() => {
    store.hydrateStore();
  }, []);

  return store;
}
