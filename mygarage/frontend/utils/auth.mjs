// Stocke le JWT dans le localStorage
export function setToken(token) {
    localStorage.setItem('jwt', token);
  }
  
  // Récupère le JWT depuis le localStorage
  export function getToken() {
    return localStorage.getItem('jwt');
  }
  
  // Supprime le JWT du localStorage (utilisé lors de la déconnexion)
  export function clearToken() {
    localStorage.removeItem('jwt');
  }
  
  // Vérifie si l'utilisateur est authentifié (présence du JWT)
  export function isAuthenticated() {
    return !!getToken();
  }
  
  // Décode le JWT pour récupérer le rôle de l'utilisateur (admin ou user)
  export function getUserRole() {
    const token = getToken();
    if (!token) return null;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Décode la partie payload du token
      return payload.role;
    } catch (error) {
      console.error("Erreur lors du décodage du JWT:", error);
      return null;
    }
  }
  
  // Fonction de connexion pour envoyer les informations d'identification au back-end
  export async function login(username, password) {
    try {
      const response = await apiRequest('/login', 'POST', { username, password });
      const token = response.token; // Supposons que le back-end retourne un objet avec le token
  
      if (token) {
        setToken(token); // Stocke le token pour maintenir l'état de connexion
        return token;
      } else {
        throw new Error('Échec de l’authentification');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    }
  }
  