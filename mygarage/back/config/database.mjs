import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    retry: {
      max: 5,                // Nombre de tentatives de reconnexion
      match: [
        Sequelize.ConnectionError,
        Sequelize.ConnectionRefusedError,
        Sequelize.HostNotFoundError,
        Sequelize.HostNotReachableError,
        Sequelize.InvalidConnectionError
      ],
    },
    pool: {
      max: 5,                 // Nombre maximal de connexions dans le pool
      min: 0,
      acquire: 30000,         // Délai maximal d'acquisition en millisecondes
      idle: 10000             // Délai d’inactivité avant la fermeture
    }
  }
  
);

export default sequelize;
    