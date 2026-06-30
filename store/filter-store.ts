import { create } from "zustand";

interface FilterStore {
  search: string;
  stage: string;
  priority: string;

  setSearch: (value: string) => void;
  setStage: (value: string) => void;
  setPriority: (value: string) => void;
}

export const useFilterStore =
  create<FilterStore>((set) => ({
    search: "",
    stage: "All",
    priority: "All",

    setSearch: (search) =>
      set({ search }),

    setStage: (stage) =>
      set({ stage }),

    setPriority: (priority) =>
      set({ priority }),
  }));