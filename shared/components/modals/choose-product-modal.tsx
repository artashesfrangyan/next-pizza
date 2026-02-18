'use client';

import { cn } from '@/shared/lib/utils';
import { Dialog, DialogContent, DialogTitle } from '@/shared/ui/dialog';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { ProductWithRelations } from '@/shared/types/prisma';
import { ChooseProductForm } from '../choose-product-form';

interface Props { 
  product: ProductWithRelations;
  className?: string;
}

export function ChooseProductModal({ product, className }: Props) {
  const router = useRouter();
  const isPizzaForm = Boolean(product.categoryId === 1);

  return (
    <Dialog open={Boolean(product)} onOpenChange={router.back}>
        <DialogContent className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          <DialogTitle style={{ display: 'none' }}>{product.name}</DialogTitle>
          {isPizzaForm 
            ? <ChoosePizzaForm ingredients={product.ingredients} imageUrl={product.imageUrl || ""} name={product.name} />
            : <ChooseProductForm imageUrl={product.imageUrl || ""} name={product.name} />}
        </DialogContent>
    </Dialog>
  )
}
