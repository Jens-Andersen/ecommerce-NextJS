import { list } from '@keystone-6/core';
import { integer, relationship, select, text } from '@keystone-6/core/fields';

export const Product = list({
	// access
	fields: {
		name: text({ validation: { isRequired: true } }),
		description: text({
			ui: {
				displayMode: 'textarea',
			},
		}),
		image: relationship({
			ref: 'ProductImage.product',
			many: true,
			ui: {
				displayMode: 'cards',
				cardFields: ['image', 'altText'],
				inlineCreate: { fields: ['image', 'altText'] },
				inlineEdit: { fields: ['image', 'altText'] },
			},
		}),
		status: select({
			options: [
				{ label: 'Available', value: 'AVAILABLE' },
				{ label: 'Unavailable', value: 'UNAVAILABLE' },
				{ label: 'Draft', value: 'DRAFT' },
			],
			defaultValue: 'DRAFT',
			ui: {
				displayMode: 'segmented-control',
				createView: { fieldMode: 'hidden' },
			},
		}),
		price: integer(), // integer and _NOT_ a float, because we want to store the price in "øre" (100ØRE = 1kr) to avoid rounding errors and things like that
		// TODO: add images
	},
});
