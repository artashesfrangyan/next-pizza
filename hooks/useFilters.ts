import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useSet } from "react-use";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

export interface PriceRange {
  priceFrom: number;
  priceTo: number;
}

interface ReturnProps {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    priceRange: PriceRange;
    setPriceRange: (name: keyof PriceRange, value: number) => void;
    setPizzaTypes: (value: string) => void,
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams();

    
    const [priceRange, setPriceRange] = useState<PriceRange>({
        priceFrom: Number(searchParams.get("priceFrom") || 0),
        priceTo: Number(searchParams.get("priceTo") || 1000),
    });
    
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get("ingredients")?.split(",") || [])); 
    
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
      new Set<string>(searchParams.get("pizzaTypes")?.split(",") || []),
    );
    
    const [sizes, { toggle: toggleSizes }] = useSet(
      new Set<string>(searchParams.get("sizes")?.split(",") || []),
    );

    const updatePrice = (name: keyof PriceRange, value: number) => {
        setPriceRange((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    return useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      priceRange,
      setPriceRange: updatePrice,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients,
    }),
    [sizes, pizzaTypes, selectedIngredients, priceRange],
  );
}