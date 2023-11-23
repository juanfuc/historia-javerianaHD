<script>
    import { onMount, afterUpdate } from 'svelte';
  
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
  <h1>Geopolítica de los proyectos HD</h1>
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
  </style>
  