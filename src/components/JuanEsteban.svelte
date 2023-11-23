<script>
    let showDescription = false;
    export let proyectos;
  
    function toggleDescription() {
      showDescription = !showDescription;
    }
  </script>

<div class="project-info">
   
    <h1>{proyectos[1].nombre}</h1>
    <p>Por: {proyectos[1].autor}</p>
  
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
        {proyectos[1].descripcion}
      </div>
      <button on:click={toggleDescription} class="hide-button">Ocultar Descripción</button>
    </div>
  {/if}


<iframe src='https://flo.uri.sh/visualisation/15671889/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/15671889/?utm_source=embed&utm_campaign=visualisation/15671889' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>


</div>

<style>
    .flourish-embed-iframe {
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