interface Config {
  readonly APP_PORT: number;
  readonly APP_API_PREFIX: string;
  readonly DB_SYSTEM: string;
  readonly DB_URL: string;
  readonly DB_PORT: number;
  readonly DB_NAME: string;
  readonly UPLOAD_DIR: string;
  //...otras variables de configuración
}

const config: Config = {
  APP_PORT: 3900,
  APP_API_PREFIX: '/api',
  DB_SYSTEM: 'mongodb',
  DB_URL: 'localhost',
  DB_PORT: 27017,
  DB_NAME: 'api_rest_blog',
  UPLOAD_DIR: './uploads/tmp'
};

export default config;