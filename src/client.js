const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const fetch = require('node-fetch');

// TODO 1.1: centrally provide project key 
const projectKey = 'sdk-training-01'


  // TODO 1.2: build and return a commercetools SDK client
  // https://commercetools.github.io/nodejs/sdk/api/sdkClient.html
  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.commercetools.co',
    projectKey,
    credentials: {
      clientId: 'ZS25zHqZBEOuC4Jo6t6LtoGU',
      clientSecret: 'LmM4x2hfFqqXSqCqk1e3KeuUOE3rfqMo',
    },
    scopes: ['manage_project:sdk-training-01'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.commercetools.co',
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  
  const getClient = () => {
    return client;
  };

module.exports.getClient = getClient;
module.exports.projectKey = projectKey;