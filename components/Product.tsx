import type {
	Product as ProductType,
	ProductImage as ProductImageType,
} from '@prisma/client';
interface Props {
	product: ProductType & { photo: ProductImageType };
}
export function Product({ product }: Props) {
	console.log('PRODUCT::: ', product);

	return (
		<div>
			<p>{product.name}</p>
		</div>
	);
}
