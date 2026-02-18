import { Container, Title } from '@/shared/components';
import { GroupVariants } from '@/shared/components/group-variants';
import { PizzaImage } from '@/shared/components/pizza-image';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

interface ProductPageProps {
    params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        }
    })
    
    if (!product) {
        return notFound();
    }

    return (<Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <PizzaImage imageUrl={product.imageUrl || ""} size={30} />

            <div className="w-[490px] bg-[#f7f5f1] p-7">
                <Title text={product.name} size="md" className="font-extrabold md-1" />

                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <GroupVariants items={[{ name: 'Маленькая', value: 'small' }, { name: 'Средняя', value: 'medium' }, { name: 'Большая', value: 'large' }]} />
            </div>
        </div>
    </Container >);
}
