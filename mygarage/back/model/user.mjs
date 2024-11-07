import { DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
    },
    // entré ajouté pour essais de syncro
    emploi: {
      type: DataTypes.ENUM("ouvrier", "patron"),
      allowNull: false,
    },
  },
  {
    timestamps: true, // Ajoute createdAt et updatedAt automatiquement
  }
);

export default User;
