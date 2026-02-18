"use client";

import { useEffect, useRef, type FC } from "react";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  variations: {
    price: number;
  }[];
}

interface ProductsGroupListProps {
  title: string;
  items: Product[];
  className?: string;
  ListClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: FC<ProductsGroupListProps> = ({
  title,
  items,
  className,
  ListClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
      window.history.replaceState(null, '', `#${title}`);
    }
  }, [categoryId, title, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[80px]", ListClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.variations[0].price}
          />
        ))}
      </div>
    </div>
  );
};
