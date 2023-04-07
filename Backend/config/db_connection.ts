import mongoose from 'mongoose';
import config from './config'

class DbConnection {

  private static readonly DB_CONNECTION_URL: string = `${config.DB_SYSTEM}://${config.DB_URL}:${config.DB_PORT}/${config.DB_NAME}`;


  public static async connect(): Promise<void> {
    try {
      await mongoose.connect(DbConnection.DB_CONNECTION_URL);
      console.log('La conexión a la base de datos se ha realizado correctamente');
    } catch (error) {
      console.error('Error al conectarse a la base de datos:', error);
      throw error;
    }

  }
}

export default DbConnection;