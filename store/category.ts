import { create } from "zustand";

interface Category {
  id: number;
  name: string;
}

interface State {
  activeId: number;
  categories: Category[];
  setActiveId(activeId: number): void;
  setCategories(categories: Category[]): void;
}

export const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  categories: [],
  setActiveId: (activeId) => set({ activeId }),
  setCategories: (categories) => set({ categories }),
}));
