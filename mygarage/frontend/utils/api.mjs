import { getToken } from './auth.js';

const API_URL = 'http://localhost:3000/api'; // Base URL de l'API

// Fonction générique pour les requêtes API
export async function apiRequest(endpoint, method = 'GET', data = null) {
  const headers = {
    'Content-Type': 'application/json'
  };

  // Ajoute le token JWT à l'en-tête si l'utilisateur est authentifié
  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) throw new Error(`Erreur : ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la requête API:', error);
    throw error;
  }
}

// Fonctions spécifiques pour les appels API
export function login(username, password) {
  return apiRequest('/login', 'POST', { username, password });
}

export function fetchUserData() {
  return apiRequest('/user-data', 'GET');
}

export function logout() {
  clearToken();
}
