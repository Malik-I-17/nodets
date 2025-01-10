namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    CORS_URL: string;
    MONGODB_URI: string;
    AWS_SDK_ENV_TYPE: string;
    AWS_SDK_DB_SCHEMA: string;
    AWS_SDK_DB_KEY: string;
    AWS_SDK_SECRET: string;
    AWS_SDK_REGION: string;
    JWT_SECRET: string;
    STRIPE_KEY: string;
    STRIPE_BASE_URL: string;
  }
}

interface RequestParams {
  method: Method;
  endpoint: string;
  data?: any;
  query?: any;
  params?: any;
  headers?: any;
}
