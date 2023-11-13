import * as dotenv from "dotenv";

dotenv.config();

const applicationUrl : string | undefined = process.env.APPLICATION_URL;
const applicationPort : string | undefined = process.env.APPLICATION_PORT;
const baseUrl : string = applicationUrl + ":" + applicationPort;

export const Auth0Config = {
    authRequired: false,
    idpLogout: true,
    secret: process.env.SECRET,
    baseURL: baseUrl,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email roles',
    },
  }