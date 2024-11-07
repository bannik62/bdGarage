<script>
    import AdminControls from '../components/AdminControls.svelte';
    import { onMount } from 'svelte';
    import { getUserRole } from '../utils/auth.mjs'; // Fonction utilitaire pour obtenir le rôle utilisateur
  
    let userRole = '';
    let username = '';
  
    // Charge le rôle et le nom de l'utilisateur lors de la connexion
    onMount(() => {
      const user = getUserRole();
      if (user) {
        userRole = user.role;
        username = user.username;
      }
    });
  </script>
  
  <main>
    <h1>Bienvenue sur votre tableau de bord, {username}!</h1>
  
    {#if userRole === 'admin'}
      <p>Vous avez accès aux contrôles d'administration.</p>
      <AdminControls />
    {:else if userRole === 'user'}
      <p>Bienvenue, {username}! Vous pouvez consulter les informations disponibles.</p>
    {:else}
      <p>Vous n'êtes pas autorisé à accéder à cette page. Veuillez vous connecter.</p>
    {/if}
  </main>
  
  <style>
    main {
      padding: 2rem;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  </style>
  