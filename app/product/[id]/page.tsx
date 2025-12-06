import type { FC } from 'react';

interface ProductPageProps {
    params: {
        id: string
    }
}

export const ProductPage: FC<ProductPageProps> = ({params: {id}}) => {
    return (<></>);
}
