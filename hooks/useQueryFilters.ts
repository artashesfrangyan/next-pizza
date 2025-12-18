import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PriceRange } from "./useFilters";
import qs from "qs";

interface QueryFilters extends PriceRange {
  pizzaTypes: string[];
  sizes: string[];
  ingredients: string[];
}

interface Filters {
  priceRange: PriceRange;
  pizzaTypes: string[];
  sizes: string[];
  selectedIngredients: string[];
}

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();

  useEffect(() => {
    const params: QueryFilters = {
      ...filters.priceRange,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients || []),
    };

    const query = qs.stringify(params, {
        arrayFormat: "comma",
      });
    router.push(`?${query}`, { scroll: false });
  }, [filters]);
}