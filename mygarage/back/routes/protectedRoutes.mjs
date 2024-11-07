import express from 'express';
import verifyJWT from '../middleware/verifyJWT.mjs';
// import userRoutes from './userRoutes.mjs';

const protectedRouter = express.Router();

// Applique le middleware de vérification JWT à toutes les routes
protectedRouter.use(verifyJWT);

// Utilise le router userRoutes pour les routes sous /users
// protectedRouter.use('/users', userRoutes);

export default protectedRouter;
