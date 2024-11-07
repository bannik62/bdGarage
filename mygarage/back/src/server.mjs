import express from 'express';
import dotenv from 'dotenv';
import sequelize from '../config/database.mjs';
import Vehicle from '../model/vehicle.mjs';
import User from '../model/user.mjs';
import protectedRouter from '../routes/protectedRoutes.mjs';
import vehicleRoutes from './routes/vehicleRoutes.mjs';
app.use('/api', vehicleRoutes);


dotenv.config();

const app = express();
app.use(express.json());

// Synchronisation de la base de données
sequelize.sync({ alter: true })
  .then(async () => {
    console.log('La base de données est synchronisée.');

    // Vérifie si des utilisateurs existent déjà
    const userCount = await User.count();
    if (userCount === 0) {
      await User.bulkCreate([
        { username: 'admin', password: 'hash', role: 'admin' },
        { username: 'user', password: 'hash', role: 'user' }
      ]);
      console.log('Utilisateurs initiaux ajoutés.');
    }
  })
  .catch(error => console.error('Erreur de synchronisation de la base de données :', error));



  // Routes publiques
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API MyGarage');
});

// Routes protégées
app.use('/api', protectedRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
