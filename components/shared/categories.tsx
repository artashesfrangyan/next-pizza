"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import type { FC } from "react";

interface CategoriesProps {
  className?: string;
}

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const categories = useCategoryStore((state) => state.categories);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map(({ name, id }) => {
        return (
          <a
            className={cn(
              "flex items-center font-bold h-11 rounded-2xl px-5",
              categoryActiveId === id &&
                "bg-white shadow-md shadow-gray-200 text-primary"
            )}
            key={id}
            href={`/#${name}`}
          >
            <button>{name}</button>
          </a>
        );
      })}
    </div>
  );
};
