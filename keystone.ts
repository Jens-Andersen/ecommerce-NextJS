// keystone.ts

import { Lists } from '.keystone/types';
import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import 'dotenv/config';

const sessionConfig = {
  maxAge: 1000 * 60 * 60 * 24 * 360, // How long they are signed in (1 year)
  secret: process.env.COOKIE_SECRET, // Secret used to sign the session ID cookie
};

const Post: Lists.Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
  },
});

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  // cors: { origin: [process.env.FRONTEND_URL], credentials: true },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
  // ui: {
  //   isAccessAllowed: () => true,
  // },
  // session: sessionConfig,
});
