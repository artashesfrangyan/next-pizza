import type { FC } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

interface ProductsGroupListProps {
  title: string;
  items: any[];
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
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50ax]", ListClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
