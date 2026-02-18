'use client'

import { cn } from '@/shared/lib/utils';
import { useState, type FC } from 'react';
import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { ProductWithRelations } from '@/shared/types/prisma';
import { pizzaSize, pizzaSizes, pizzaType, pizzaTypes } from '../consts/pizza';
import { GroupVariants } from './group-variants';

interface ChoosePizzaFormProps {
    imageUrl: string;
    name: string;
    ingredients: ProductWithRelations['ingredients'];
    variations?: ProductWithRelations['variations'];
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChoosePizzaForm: FC<ChoosePizzaFormProps> = ({  imageUrl, name, /* ingredients, items, */ className }) => {
    const [size, setSize] = useState<pizzaSize>(20);
    const [type, setType] = useState<pizzaType>(1);

    const textDetails = `${size}см, традиционное тесто 30`;
    const totalPrice = 350;
    
    return (<div className={cn(className, 'flex flex-1')}>
        <PizzaImage imageUrl={imageUrl} size={size} />

        <div className='w-[490px] bg-[#f7f6f5] p-7'>
            <Title text={name} size="md" className="font-extrabold md-1" />

            <p className='text-gray-400 mb-5'>{textDetails}</p>

            <div className="flex flex-col gap-4 mb-5">
                <GroupVariants
                    items={pizzaSizes}
                    value={size}
                    onClick={(value) => setSize(Number(value) as pizzaSize)}
                />

                <GroupVariants
                    items={pizzaTypes}
                    value={type}
                    onClick={(value) => setType(Number(value) as pizzaType)}
                />
            </div>

            <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
                Добавить в корзину за {totalPrice} ₽
            </Button>
        </div>
    </div>);
}
