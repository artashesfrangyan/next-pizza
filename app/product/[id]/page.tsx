import { Container } from '@/components/shared';
import { ProductImage } from '@/components/shared/product-image';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

interface ProductPageProps {
    params: {
        id: string
    }
}

export default async function ProductPage({ params: { id } }: ProductPageProps) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        }
    })

    console.log(product)

    if (!product) {
        return notFound();
    }

    return (<Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <ProductImage imageUrl={product.imageUrl || ""} size={30} />
            
            <div>

            </div>
        </div>
    </Container >);
}
