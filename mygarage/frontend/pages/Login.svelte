<script>
    import { onMount } from 'svelte';
    import LoginForm from '../components/LoginForm.svelte';
    import { login } from '../utils/auth.mjs';
    window.location.href = './dashboard'; // URL de destination
  
    let errorMessage = '';
  
    // Fonction pour gérer la soumission du formulaire
    async function handleLogin(credentials) {
      try {
        const token = await login(credentials.username, credentials.password);
        if (token) {
          window.location.href = '/dashboard'; // URL de destination
; // Redirige vers Dashboard après connexion réussie
        }
      } catch (error) {
        errorMessage = 'Nom d’utilisateur ou mot de passe incorrect';
      }
    }
  </script>
  
  <main>
    <h1>Connexion</h1>
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
    <LoginForm on:submit={handleLogin} />
  </main>
  
  <style>
    .error {
      color: red;
    }
  </style>
  