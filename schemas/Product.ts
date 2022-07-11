import { list } from '@keystone-6/core';
import { select, text } from '@keystone-6/core/fields';

export const Product = list({
  // access
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { value: 'available', label: 'AVAILABLE' },
        { value: 'unavailable', label: 'UNAVAILABLE' },
        { value: 'draft', label: 'DRAFT' },
      ],
      defaultValue: 'DRAFT',
    }),
  },
});
