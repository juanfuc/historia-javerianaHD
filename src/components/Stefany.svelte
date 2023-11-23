<script>
    import { onMount, afterUpdate } from 'svelte';
    let showDescription = false;
    export let proyectos;
  
    function toggleDescription() {
      showDescription = !showDescription;
    }
  
    export let vizId = 'viz1700168333957';
  
    // Función para cargar el script de Tableau API
    function loadTableauScript() {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  
      const divElement = document.getElementById(vizId);
      const vizElement = divElement?.getElementsByTagName('object')[0];
  
      if (vizElement) {
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      }
    }
  
    // Llamar a las funciones al montar y después de cada actualización
    onMount(() => {
      loadTableauScript();
    });
  
    afterUpdate(() => {
      // Puedes realizar acciones adicionales después de cada actualización si es necesario
    });
  </script>

  <div class="project-info">
    <h1>{proyectos[3].nombre}</h1>
    <p>Por: {proyectos[3].autor}</p>
  
    <button on:click={toggleDescription}>
      {#if showDescription}
        Ocultar Descripción
      {:else}
        Mostrar Descripción
      {/if}
    </button>
  
    {#if showDescription}
    <div class="overlay">
      <div class="texto">
        {proyectos[3].descripcion}
      </div>
      <button on:click={toggleDescription} class="hide-button">Ocultar Descripción</button>
    </div>
  {/if}
  <div class="tableauPlaceholder" id="{vizId}" style="">
    <noscript>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#">
        <img alt="Dashboard 1" src="https://public.tableau.com/static/images/QW/QW78GNQGX/1_rss.png" style="border: none" />
      </a>
    </noscript>
    <!-- svelte-ignore a11y-missing-attribute -->
    <object class="tableauViz">
      <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
      <param name="embed_code_version" value="3" />
      <param name="path" value="shared/QW78GNQGX" />
      <param name="toolbar" value="yes" />
      <param name="static_image" value="https://public.tableau.com/static/images/QW/QW78GNQGX/1.png" />
      <param name="animate_transition" value="yes" />
      <param name="display_static_image" value="yes" />
      <param name="display_spinner" value="yes" />
      <param name="display_overlay" value="yes" />
      <param name="display_count" value="yes" />
      <param name="language" value="es-ES" />
    </object>
  </div>
</div>

  <style>
    /* Estilos para personalizar la apariencia del componente */
    .tableauPlaceholder {

      width: 100% !important;
      height: 700px !important;
    }
  
    .tableauViz {

      width: 100%;
      height: 100%;
    }
    
    .project-info {
      display: flex;
      flex-direction: column;
      margin-left: 4%;
      margin-right: 6%;
      position: relative;
    }
  
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9); /* Fondo opaco */
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1000000;
    }
  
    .texto {
      text-align: justify;
      color: white; /* Color del texto en el overlay */
      padding: 20px;
    }
  
    button {
            background-color:  #ff3c00;
            font-family: 'Public Sans', sans-serif;
            text-decoration: none;
            color: #f7ebe7;
            font-size: 1em;
            border-radius: 1px;
            border: 1px solid #ff3c00;
            cursor: pointer;
            padding: 0.5%;
            max-width: 170px; /* Limita el ancho del botón */
            margin-right: 100px;
        }

        button:hover {
     
            transition: all 1s ease;
            background-color: #ff3c00;
            color: #f7ebe7;
            box-shadow: 0 0 4px #ff3c00;;
        }
  </style>
  