const defaultAuthConfig = {
  cacheLocation: 'localstorage',
};

/*
const config = {
  auth: {
    ...defaultAuthConfig,
    domain: '_DOMAIN_',
    clientId: '_CLIENTID_',
    // UNCOMMENT LINE 12 to test the private API
    // audience: ['authRocks'],
  },
  app: {
    port: 3000,
  },
  server: {
    permissions: ['authRocks'],
  },
};
*/

var baseOktaURL = 'https://jsd.okta.com'; //For example, https://example.oktapreview.com
var appClientID = '0oa5ezj1g48z11xCX697'; // For example, 0oa73hm5sh9jf6s5e1d6

const config = {
  auth: {
    ...defaultAuthConfig,
    url: baseOktaURL,
    clientId: appClientID,
    redirectUri: 'http://localhost:3000/', //or the redirect URI for your app
    issuer: baseOktaURL, // oidc
    scopes: ['openid', 'profile', 'email'],
    // UNCOMMENT LINE 12 to test the private API
    // audience: ['authRocks'],
  },
  app: {
    port: 3000,
  },
  server: {
    permissions: ['authRocks'],
  },
};

export default config;
