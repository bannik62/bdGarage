<script>
  import Login from '../pages/Login.svelte';
  import Dashboard from '../pages/Dashboard.svelte';
  import NotFound from '../pages/NotFound.svelte';
  import { isAuthenticated } from '../utils/auth.mjs';

  import { writable } from 'svelte/store';

  // Détermine la page actuelle ; vous pouvez changer cela selon le flux de connexion
  let currentPage = writable('login');

  // Vérifie si l'utilisateur est connecté via le token JWT dans le localStorage
  // const isAuthenticated = () => !!localStorage.getItem('jwt');

  // Change la page actuelle en fonction de l'état de connexion
  $: currentPage.set(isAuthenticated() ? 'dashboard' : 'login');

  // Fonction pour naviguer vers une autre page
  function navigate(page) {
    currentPage.set(page);
  }
</script>

<main>
  {#if $currentPage === 'login'}
  window.location.href = "/dashboard";
  {:else if $currentPage === 'dashboard'}
    <Dashboard />
  {:else}
    <NotFound />
  {/if}
</main>
