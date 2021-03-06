import { Env } from '@dark-rush-photography/web-socket/types';

export const environment: Env = {
  production: true,
  apiAuth: {
    auth0ClientId: '%%AUTH0_CLIENT_ID%%',
    auth0ClientSecret: '%%AUTH0_CLIENT_SECRET%%',
  },
  drpApiUrl: '%%DRP_API_URL%%',
};
