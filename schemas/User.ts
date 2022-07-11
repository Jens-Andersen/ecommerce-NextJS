import { list } from '@keystone-6/core';
import { password, text } from '@keystone-6/core/fields';

export const User = list({
  // access
  // ui
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    password: password({
      validation: { isRequired: true },
    }),
    // TODO: add cart, orders, roles
  },
});
