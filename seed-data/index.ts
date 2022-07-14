import { KeystoneContext } from '@keystone-6/core/types';
import { products } from './data';

// console.log(products);

// export async function insertSeedData(context: KeystoneContext) {
// 	console.log(`🌱 Inserting seed data`);

// 	const createPerson = async (productData: any) => {
// 		let product = await context.query.Product.findOne({
// 			where: { name: productData.name },
// 			query: 'id',
// 		});

// 		if (!product) {
// 			product = await context.query.Product.createOne({
// 				data: productData,
// 				query: 'id',
// 			});
// 		}
// 	};

// 	for (const product of products) {
// 		console.log(`👩 Adding product: ${product.name}`);
// 		await createPerson(product);
// 	}

// 	console.log(`✅ Seed data inserted`);
// 	console.log(
// 		`👋 Please start the process with \`yarn dev\` or \`npm run dev\``
// 	);
// 	process.exit();
// }

//github.com/keystonejs/keystone/blob/6cadee447cd0737a68122dddfa909589cb4c8f4e/examples-staging/ecommerce/seed-data/index.ts
export async function insertSeedData({ prisma }: KeystoneContext) {
	console.log(`🌱 Inserting Seed Data: ${products.length} Products`);

	for (const product of products) {
		console.log(`  🛍️ Adding Product: ${product.name}`);

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
	console.log(`✅ Seed Data Inserted: ${products.length} Products`);
	console.log(
		`👋 Please start the process with \`yarn dev\` or \`npm run dev\``
	);
	process.exit();
}

// export async function insertSeedData(context: KeystoneContext) {
//   console.log(`🌱 Inserting seed data`);

//   const createPerson = async (personData: PersonProps) => {
//     let person = await context.query.Person.findOne({
//       where: { name: personData.name },
//       query: 'id',
//     });

//     if (!person) {
//       person = await context.query.Person.createOne({
//         data: personData,
//         query: 'id',
//       });
//     }
//   };

//   const createTask = async (taskData: TaskProps) => {
//     let persons = await context.query.Person.findMany({
//       where: { name: { equals: taskData.assignedTo } },
//       query: 'id',
//     });

//     taskData.assignedTo = { connect: { id: persons[0].id } };

//     await context.query.Task.createOne({
//       data: taskData,
//       query: 'id',
//     });
//   };

//   for (const person of persons) {
//     console.log(`👩 Adding person: ${person.name}`);
//     await createPerson(person);
//   }
//   for (const task of tasks) {
//     console.log(`🔘 Adding task: ${task.label}`);
//     await createTask(task);
//   }

//   console.log(`✅ Seed data inserted`);
//   console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
//   process.exit();
// }
