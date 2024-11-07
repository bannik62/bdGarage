<script>
    import { onMount } from "svelte";
    // import { goto } from "@sveltejs/kit/navigation"; // si tu utilises SvelteKit
  
    let username = "";
    let password = "";
    let error = "";
  
    // Fonction de soumission du formulaire
    async function handleSubmit(event) {
      event.preventDefault();
      error = ""; // Réinitialise les erreurs
  
      try {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          localStorage.setItem("token", data.token); // Stocke le token
          window.location.href = "/dashboard";
        } else {
          error = data.message || "Erreur de connexion";
        }
      } catch (err) {
        error = "Erreur de connexion au serveur";
        console.error(err);
      }
    }
  </script>
  
  <style>
    /* Styles pour le formulaire */
  </style>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="username">Nom d'utilisateur</label>
      <input id="username" bind:value={username} type="text" required />
    </div>
  
    <div>
      <label for="password">Mot de passe</label>
      <input id="password" bind:value={password} type="password" required />
    </div>
  
    {#if error}
      <p class="error">{error}</p>
    {/if}
  
    <button type="submit">Connexion</button>
  </form>
  