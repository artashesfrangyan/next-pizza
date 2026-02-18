"use client";

import { useMemo, type FC } from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useIngredients } from "@/shared/hooks/useIngredients";
import { useFilters } from "@/shared/hooks/useFilters";
import { useQueryFilters } from "@/shared/hooks/useQueryFilters";

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const ingredientItems = useMemo(
    () =>
      ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: String(ingredient.id),
      })),
    [ingredients],
  );

  const pizzaTypeItems = useMemo(
    () => [
      { text: "Тонкое", value: "1" },
      { text: "Традиционное", value: "2" },
    ],
    [],
  );

  const sizeItems = useMemo(
    () => [
      { text: "20 см", value: "20" },
      { text: "30 см", value: "30" },
      { text: "40 см", value: "40" },
    ],
    [],
  );

  const updatePriceRange = (priceRange: number[]) => {
    filters.setPriceRange("priceFrom", priceRange[0]);
    filters.setPriceRange("priceTo", priceRange[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={pizzaTypeItems}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={sizeItems}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={filters.priceRange.priceFrom}
            onChange={(e) =>
              filters.setPriceRange("priceFrom", +e.target.value)
            }
            aria-label="Минимальная цена"
          />
          <Input
            type="number"
            min={0}
            max={1000}
            value={filters.priceRange.priceTo?.toString()}
            onChange={(e) => filters.setPriceRange("priceTo", +e.target.value)}
            placeholder="1000"
            aria-label="Максимальная цена"
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.priceRange.priceFrom, filters.priceRange.priceTo]}
          onValueChange={updatePriceRange}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={ingredientItems.slice(0, 6)}
        items={ingredientItems}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
