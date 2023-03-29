import fetch from 'node-fetch';
import {
  ClientBuilder
} from '@commercetools/sdk-client-v2';

const PROJECT_KEY = process.env.CTP_PROJECT_KEY;
const SCOPES = process.env.CTP_SCOPES;
const AUTH_URL = process.env.CTP_AUTH_URL;
const API_URL = process.env.CTP_API_URL;
const CLIENT_ID = process.env.CTP_CLIENT_ID;
const CLIENT_SECRET = process.env.CTP_CLIENT_SECRET;


const authMiddlewareOptions= {
  host: AUTH_URL,
  projectKey: PROJECT_KEY,
  credentials: {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  },
  scopes: [SCOPES],
    fetch,
};

const httpMiddlewareOptions= {
  host: API_URL,
  fetch,
};

const createClient = () => {
  const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
  return ctpClient;

}

export default createClient;