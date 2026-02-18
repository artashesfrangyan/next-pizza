import { cn } from '@/shared/lib/utils';
import type { FC } from 'react';
import { Title } from './title';
import { Button } from '../ui';
import Image from 'next/image';

interface ChooseProductFormProps {
    imageUrl: string;
    name: string;
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: FC<ChooseProductFormProps> = ({  imageUrl, name, /* ingredients, items, */ className }) => {
    const textDetails = '30см, традиционное тесто 30';
    const totalPrice = 350;

    return (<div className={cn(className, 'flex flex-1')}>
        <div className={cn(className, 'flex items-center justify-center flex-1 relative w-full')}>
            <Image
                src={imageUrl}
                alt={name}
                className='relative left-2 top-2 transition-all z-10 duration-300'
                width={350}
                height={350}
            />

        </div>

        <div className='w-[490px] bg-[#f7#f6#f5] p-7'>
            <Title text={name} size="md" className="font-extrabold md-1" />

            <p className='text-gray-400'>{textDetails}</p>

            <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
                Добавить в корзину за {totalPrice} ₽
            </Button>
        </div>
    </div>);
}
