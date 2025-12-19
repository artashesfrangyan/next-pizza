"use client";

import { useCategoryStore } from "@/store/category";
import { useEffect, type FC, type ReactNode } from "react";

interface CategoryProviderProps {
  categories: Array<{ id: number; name: string }>;
  children: ReactNode;
}

export const CategoryProvider: FC<CategoryProviderProps> = ({
  categories,
  children,
}) => {
  const setCategories = useCategoryStore((state) => state.setCategories);

  useEffect(() => {
    setCategories(categories);
  }, [categories, setCategories]);

  return <>{children}</>;
};
