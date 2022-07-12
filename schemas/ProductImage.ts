import { cloudinaryImage } from '@keystone-6/cloudinary';
import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';
import 'dotenv/config';

export const ProductImage = list({
	fields: {
		image: cloudinaryImage({
			cloudinary: {
				cloudName:
					process.env.CLOUDINARY_CLOUD_NAME ||
					'Please set CLOUDINARY_CLOUD_NAME in .env',
				apiKey:
					process.env.CLOUDINARY_API_KEY ||
					'Please set CLOUDINARY_API_KEY in .env',
				apiSecret:
					process.env.CLOUDINARY_API_SECRET ||
					'Please set CLOUDINARY_API_SECRET in .env',
				folder:
					process.env.CLOUDINARY_API_FOLDER ||
					'Please set CLOUDINARY_API_FOLDER in .env',
			},
		}),
		altText: text(),
		product: relationship({ ref: 'Product.image', many: true }),
	},
	ui: {
		listView: {
			initialColumns: ['image', 'altText', 'product'],
		},
	},
});
