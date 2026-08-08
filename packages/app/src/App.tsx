import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';

import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { SignInPageBlueprint } from '@backstage/plugin-app-react';
import { SignInPage } from '@backstage/core-components';
import { createFrontendModule } from '@backstage/frontend-plugin-api';

import argoCdPlugin from '@roadiehq/backstage-plugin-argo-cd/alpha';

const signInPage = SignInPageBlueprint.make({
  params: {
    loader: async () => props => (
      <SignInPage
        {...props}
        provider={{
          id: 'github-auth-provider',
          title: 'GitHub',
          message: 'Sign in using GitHub',
          apiRef: githubAuthApiRef,
        }}
      />
    ),
  },
});

export default createApp({
  features: [
    catalogPlugin,
    argoCdPlugin,
    navModule,
    createFrontendModule({
      pluginId: 'app',
      extensions: [signInPage],
    }),
  ],
});
