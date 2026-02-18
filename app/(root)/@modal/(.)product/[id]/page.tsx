import { ChooseProductModal } from '@/shared/components';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

interface ProductPageProps {
    params: Promise<{ id: string }>
}

export default async function ProductModalPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            ingredients: true,
            variations: true
        }
    })

    if (!product) {
        return notFound();
    }

    return <ChooseProductModal product={product} />
}
