// import type {
// 	Product as ProductType,
// 	ProductImage as ProductImageType,
// } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { formatMoney } from '../lib/formatMoney';
import ItemStyles from './styles/ItemStyles';
import PriceTagStyles from './styles/PriceTagStyles';
import TitleStyles from './styles/TitleStyles';

type ProductProps = {
	id: string;
	name: string;
	price: number;
	description: string;
	photo: {
		id: string;
		image: {
			publicUrlTransformed: string;
		};
	};
};
interface Props {
	// product: ProductType & { photo: ProductImageType };
	product: ProductProps;
}
export function Product({ product }: Props) {
	return (
		<ItemStyles>
			<Image
				src={product?.photo[0]?.image?.publicUrlTransformed}
				alt={product.name}
				width={500}
				height={500}
			/>
			<PriceTagStyles>{formatMoney(product.price)}</PriceTagStyles>
			<TitleStyles>
				<Link href={`/product/${product.id}`}>{product.name}</Link>
			</TitleStyles>
			<p>{product.description}</p>
			{/* TODO: add buttons to add and delete item */}
		</ItemStyles>
	);
}
