interface ConfigProps {
  readonly APP_PORT: number;
  readonly APP_API_PREFIX: string;
  readonly APP_API_HOST: string;
  //...otras variables de configuración
}

const Config: ConfigProps = {
  APP_API_HOST: 'localhost',
  APP_PORT: 3900,
  APP_API_PREFIX: '/api'
};

export default Config;