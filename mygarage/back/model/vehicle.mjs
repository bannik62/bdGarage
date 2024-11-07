import { DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';

const Vehicle = sequelize.define('Vehicle', {
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  build: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carburant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  couleur: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'inconnu',
  },
  km: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  controle_technique: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true, // pour created_at et updated_at automatiquement
});

export default Vehicle;
