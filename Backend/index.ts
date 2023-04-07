import application from './app';
import config from './config/config'
import DbConnection from './config/db_connection';


async function startServer() {
  try {
    await DbConnection.connect();
    application.listen(config.APP_PORT, () => {
      console.log(`Servidor corriendo http://localhost:${config.APP_PORT}`);
    });
  }catch (error) {
    console.log(error);
  }
}


startServer().catch((error) => {
  console.error('Error al iniciar el servidor:', error);
});
