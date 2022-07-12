// keystone.ts

import { Lists } from '.keystone/types';
import { createAuth } from '@keystone-6/auth';
import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { statelessSessions } from '@keystone-6/core/session';
import 'dotenv/config';
import { Product } from './schemas/Product';
import { User } from './schemas/User';


const sessionConfig = statelessSessions({
  maxAge: 1000 * 60 * 60 * 24 * 360, // How long they are signed in (1 year)
  secret:
    process.env.COOKIE_SECRET ||
    'The secret sauce which can be absolutely anything as long as it is definitely 32 characters long', // Secret used to sign the session ID cookie
});

const Post: Lists.Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
  },
});

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add initial role
  },
});

export default withAuth(
  config({
    db: { provider: 'sqlite', url: 'file:./app.db' },
    // cors: { origin: [process.env.FRONTEND_URL], credentials: true },
    experimental: {
      generateNextGraphqlAPI: true,
      generateNodeAPI: true,
    },
    lists: {
      Post,
      User,
      Product,
    },
    ui: {
      isAccessAllowed: ({ session }) => {
        // console.log('isAccessAllowed: ', session);
        return session?.data;
      },
    },
    // ui: { isAccessAllowed: () => true },
    session: sessionConfig,
  })
);
