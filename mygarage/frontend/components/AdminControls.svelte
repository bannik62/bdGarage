<script>
    import { onMount } from 'svelte';
    import { apiRequest } from '../utils/api.mjs'; // Utilitaire pour les requêtes API
    
    let responseMessage = '';
  
    // Actions pour la gestion de la base de données
    const handleCreate = async () => {
      try {
        const response = await apiRequest('/create-endpoint', 'POST'); // Endpoint pour créer une entrée
        responseMessage = response.message || 'Entrée créée avec succès';
      } catch (error) {
        responseMessage = 'Erreur lors de la création de l\'entrée';
      }
    };
  
    const handleEdit = async () => {
      try {
        const response = await apiRequest('/edit-endpoint', 'POST'); // Endpoint pour modifier une entrée
        responseMessage = response.message || 'Entrée modifiée avec succès';
      } catch (error) {
        responseMessage = 'Erreur lors de la modification de l\'entrée';
      }
    };
  
    const handleDelete = async () => {
      try {
        const response = await apiRequest('/delete-endpoint', 'POST'); // Endpoint pour supprimer une entrée
        responseMessage = response.message || 'Entrée supprimée avec succès';
      } catch (error) {
        responseMessage = 'Erreur lors de la suppression de l\'entrée';
      }
    };
  </script>
  
  <div class="admin-controls">
    <h3>Contrôles d'administration</h3>
    
    <button on:click={handleCreate}>Créer une entrée</button>
    <button on:click={handleEdit}>Modifier une entrée</button>
    <button on:click={handleDelete}>Supprimer une entrée</button>
    
    {#if responseMessage}
      <p>{responseMessage}</p>
    {/if}
  </div>
  
  <style>
    .admin-controls {
      margin-top: 20px;
    }
    button {
      margin: 5px;
      padding: 10px 15px;
      cursor: pointer;
    }
  </style>
  