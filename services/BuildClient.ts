import fetch from 'node-fetch';
import {
  ClientBuilder,

  type AuthMiddlewareOptions, 
  type HttpMiddlewareOptions, 
} from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';

const PROJECT_KEY = process.env.CTP_PROJECT_KEY!;
const SCOPES = process.env.CTP_SCOPES!;
const AUTH_URL = process.env.CTP_AUTH_URL!;
const API_URL = process.env.CTP_API_URL!;
const CLIENT_ID = process.env.CTP_CLIENT_ID!;
const CLIENT_SECRET = process.env.CTP_CLIENT_SECRET!;


const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: AUTH_URL,
  projectKey: PROJECT_KEY,
  credentials: {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  },
  scopes: [SCOPES],
    fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: API_URL,
  fetch,
};

const createClient = () => {
  export const ctpClient = new ClientBuilder()
  const ctpClient = buildCommerceClient();
  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: PROJECT_KEY,
  });
  return apiRoot;

}

export default createClient;