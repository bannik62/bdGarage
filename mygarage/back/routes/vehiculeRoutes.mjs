import express from 'express';
import Vehicle from '../models/vehicle.mjs';

const router = express.Router();

// Tableau local de données pour hydrater la table vehicles
const data = [
  { model: 'Modèle A', build: 2020, carburant: 'Essence', couleur: 'Rouge', km: 15000 },
  { model: 'Modèle B', build: 2019, couleur: 'Bleu' }, // Manque des infos pour tester les valeurs par défaut
  // Ajoute d'autres entrées si nécessaire
];

// Route pour hydrater la table vehicles avec les données du tableau local
router.post('/hydrate-vehicles', async (req, res) => {
  const defaultValues = {
    model: 'Modèle inconnu',
    build: new Date().getFullYear(),
    carburant: 'Essence',
    couleur: 'inconnue',
    km: 0,
    controle_technique: null
  };

  try {
    const vehicles = data.map(entry => ({
      model: entry.model || defaultValues.model,
      build: entry.build || defaultValues.build,
      carburant: entry.carburant || defaultValues.carburant,
      couleur: entry.couleur || defaultValues.couleur,
      km: entry.km || defaultValues.km,
      controle_technique: entry.controle_technique || defaultValues.controle_technique,
    }));

    await Vehicle.bulkCreate(vehicles);
    res.status(201).json({ message: 'Table hydratée avec succès', vehicles });
  } catch (error) {
    console.error('Erreur lors de l\'hydratation de la table :', error);
    res.status(500).json({ message: 'Erreur lors de l\'hydratation de la table' });
  }
});

export default router;
