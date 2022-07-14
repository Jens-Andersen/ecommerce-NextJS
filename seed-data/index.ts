import { KeystoneContext } from '@keystone-6/core/types';
import { products } from './data';

//github.com/keystonejs/keystone/blob/6cadee447cd0737a68122dddfa909589cb4c8f4e/examples-staging/ecommerce/seed-data/index.ts
export async function insertSeedData({ prisma }: KeystoneContext) {
	console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
	// console.log(prisma);

	for (const product of products) {
		console.log(`  🛍️ Adding Product: ${product.name}`);

		const existingPhoto = await prisma.productImage.findMany({
			where: {
        // would be nice to be able to search for _id_ inside the image column, but search in text is only available for postgres and MySQL atm.
        // this works for now, but not that resistent
				altText: product.description,
			},
		});

		const existingProduct = await prisma.product.findFirst({
			where: {
				name: product.name,
			},
		});

		if (!existingPhoto || !existingProduct) {
			const { id } = await prisma.productImage.create({
				data: {
					image: JSON.stringify(product.photo),
					altText: product.description,
				},
			});
			// @ts-ignore
			delete product.photo;
			// @ts-ignore
			// product.photoId = id;
			product.photo = { connect: { id } };
			await prisma.product.create({ data: product });
		}
	}
	console.log(`✅ Seed Data Inserted: ${products.length} Products`);
	console.log(
		`👋 Please start the process with \`yarn dev\` or \`npm run dev\``
	);
	process.exit();
}
