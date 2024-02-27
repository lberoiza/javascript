interface ConfigProps {
  readonly APP_PORT: number;
  readonly APP_API_PREFIX: string;
  readonly APP_API_HOST: string;
  readonly DEFAULT_LANGUAGE: string;
  readonly DEFAULT_NR_OF_ARTICLES_HOMEPAGE: number;
  //...otras variables de configuración
}

const Config: ConfigProps = {
  APP_API_HOST: 'localhost',
  APP_PORT: 3900,
  APP_API_PREFIX: '/api',
  DEFAULT_LANGUAGE: 'en',
  DEFAULT_NR_OF_ARTICLES_HOMEPAGE: 3
};

export default Config;
