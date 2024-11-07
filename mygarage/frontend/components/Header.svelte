<script>
    import { onMount } from 'svelte';
    import { getUserName, logout } from '../utils/auth'; // Fonctions utilitaires pour gérer l'auth
  
    let userName = '';
  
    // Récupère le nom de l'utilisateur à partir du token JWT ou du local storage
    onMount(() => {
      userName = getUserName();
    });
  
    // Fonction pour déconnecter l'utilisateur
    function handleLogout() {
      logout();
      goto('/login'); // Redirige vers la page de connexion après la déconnexion
    }
  </script>
  
  <header>
    <nav>
      <div class="username">Bienvenue, {userName}</div>
      <button on:click={handleLogout}>Déconnexion</button>
    </nav>
  </header>
  
  <style>
    header {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      background-color: #333;
      color: white;
    }
    .username {
      font-weight: bold;
    }
    button {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  </style>
  