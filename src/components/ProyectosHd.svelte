<script>
import Icon from '@iconify/svelte';
import Bernardo from "./Bernardo.svelte";
import JuanEsteban from "./JuanEsteban.svelte";
import Stefany from "./Stefany.svelte";
import Sebastian from './Sebastian.svelte';
import {fade, blur, fly, slide, scale} from 'svelte/transition';


let proyectos = [
    {nombre: "Tendencias de lectura en la formación de un historiador", autor: "Bernardo Selaya ", descripcion: "...", imagen: "assets/imgs/1.png"},
    {nombre: "Fútbol y Política: Mundiales segunda mitad Siglo XX", autor: "Juan Esteban Rodríguez", descripcion: "Esta visualización que se realizó a partir de una base de datos, muestra el análisis de los momentos enquelos mundiales de fútbol se relacionaroncon situaciones políticas complejas,como guerras o  dictaduras. La  hipótesis  que  impulsa tanto  la  base  datos  como  la  visualización, es que  laintersección entre el fútbol y la política durante estos eventos históricos puede revelar una serie de factores  y  relaciones  poco  exploradas  o  subestimadas  en  la  comprensión  convencional  de  esta relación. La  recolección  y  visualización  de  datos  específicos  sobre  cada  mundial  de fútbol  durante  la segunda  mitad  del  siglo  XX,en  paralelo  con  los  contextos  políticos  de  la  épocay  del  lugar,se erigieroncomo  pilares  fundamentales  de  este  proyecto.  La  meta  principal  es  analizar  estas relaciones  con  una  perspectiva  amplia  y  multifacética,  buscando  ir  más  allá  de  la  narrativa tradicional  que  solo  vincula  el  fútbol  con  un  entretenimiento o  una  distracción apartado  de  las realidades políticas. A  través  de  esta  visualización  y  el  análisis  detallado  de  la  base  de  datos, se  puedeidentificar  y examinar relaciones menos evidentes. Esto incluye la posibilidad de descubrir cómo el fútbol, en medio de situaciones políticas tensas, ha funcionado como un medio de reivindicación para ciertos grupos o naciones, proporcionando un terreno para expresar identidades culturales o políticas en un escenario global. Asimismo,  se  abre  la  posibilidad  de  comprender  cómo  el  fútbol  ha  podido,  en  algunos  casos, exacerbar  tensiones  políticas  preexistentes  o  incluso  desencadenar  conflictos,  convirtiéndose  en un reflejo o un catalizador de los problemas políticos más amplios. Por ende, este estudio contribuye a una comprensión más matizada de cómo el fútbol y la política interactúan y se influyen mutuamente, yendo más allá de los estereotipos o las ideas preconcebidas sobre esta relación.", imagen: "assets/imgs/2.png"},
    {nombre: "El mapa y los discursos en torno a la representación cartográfica de Bogotá", autor: "Sebastián Villamarín", descripcion: "...", imagen: "assets/imgs/4.png"},
    {nombre: "Geopolítica de los proyectos HD", autor: "Stefany Caicedo y Mateo Vásquez", descripcion: "Este proyecto tiene como objetivo principal investigar la producción de conocimiento en el ámbito de las humanidades digitales, abordando la diversidad de folios virtuales sin distinción de categorías. Para alcanzar este propósito, hemos recopilado una amplia variedad de trabajos en el campo de las humanidades digitales procedentes de diferentes países. El propósito de esta recopilación es comprender cuáles de estos trabajos destacan en términos de categorización, continente e idioma. En la organización de las categorías sociales, nos hemos inspirado en el trabajo de Boaventura de Sousa Santos y su obra 'Una epistemología del sur'. En este contexto, Santos aborda los conceptos del Sur global y Norte global, donde el Sur representa el extractivismo, el sufrimiento humano y una situación de inferioridad global. Por otro lado, el Norte global representa naciones que dominan la producción y se entrelazan con la estructura colonial en una realidad capitalista. Este proyecto adopta estos conceptos y los aplica a la producción de conocimiento. Aquí, los diversos Nortes no solo se refieren a aquellos dominantes en la creación de proyectos, sino también a aquellos que educan a los Sur globales. Por ejemplo, la producción científico-social de Brasil tiene un impacto significativo en América Latina, donde los pedagogos deben leer a Paulo Freire y los antropólogos deben estar familiarizados con el trabajo de Darcy Ribeiro. Este enfoque en la producción de conocimiento intercontinental agrega valor a la comprensión global. El proyecto también considera factores inevitables en la producción de conocimiento, como el gasto público en educación en comparación con el porcentaje del PIB. Aunque estas estadísticas pueden ser previsibles a nivel mundial, adquieren un significado especial al analizarlas en contextos más amplios. Estos datos proporcionan una narrativa que refleja la realidad de los continentes. La última categoría abordada en el proyecto es la de 'temáticas', ya que la producción de conocimiento es diversa y refleja los intereses e intelectuales de cada país. Por ejemplo, en Estados Unidos, la literatura e historia son las principales áreas de creación, destacando la fortaleza del país en escritores de literatura y la importancia de la historia como categoría científica. Por otro lado, Alemania, como la segunda potencia más recurrente en la base de datos, se destaca por la cantidad de folios centrados en el arte medieval y otras obras históricas relacionadas con el arte, revelando aspectos distintivos de la cultura alemana.", imagen: "assets/imgs/3.png"}
];

let proyectoSeleccionado = null;

function handleClick(i) {
    proyectoSeleccionado = i
}

function resetSelection() {
    proyectoSeleccionado = null;
  }
</script>

<div class='contenedor-general'>
    
{#if proyectoSeleccionado !== null}
    <div transition:blur class="seleccion-proyectos">
    <button on:click={resetSelection}><Icon icon="teenyicons:left-outline" /></button>
    {#if proyectoSeleccionado === 0}
          <Bernardo {proyectos}/>
    {:else if proyectoSeleccionado === 1}
          <JuanEsteban {proyectos}/>
    {:else if proyectoSeleccionado === 2}
          <Sebastian {proyectos}/>
    {:else if proyectoSeleccionado === 3}
          <Stefany {proyectos}/>
    {/if}
   
      </div>
{:else}
      <div class="contenedor-proyectos">
    {#each proyectos as proyecto, i}
        <div transition:fade={{duration:4000}} class="tarjeta-proyecto" style="width: {proyecto.width}; margin-left: {proyecto.marginLeft};">
                
            <div class="img-proyecto">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img alt="imagen proyecto" src={proyecto.imagen} on:click={() => handleClick(i)}>
            </div>
            <h3 class="nombres">{proyecto.nombre}</h3>
                <p class="autor">{proyecto.autor}</p>
        </div>
    {/each}
</div>
{/if}
</div>

<style>
    .contenedor-general {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 2%;
      margin-left: 6%;
      margin-right: 4%;
      scroll-behavior: smooth;
    }
    /* .seleccion-proyectos {
        margin-top: 0%;
    } */
  
    .contenedor-proyectos {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 2%;
    }
  
    .tarjeta-proyecto {
      flex: 0 0 33%; /* ajusta según tus necesidades */
      position: relative;
      z-index: 1;
    }
  
    .img-proyecto {
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 0 0px #333;
      transition: all 1s ease;
      cursor: pointer;
    }
  
    .img-proyecto img {
      width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
    }
  
    .tarjeta-proyecto:hover .img-proyecto {
        transition: all 1s ease;
        box-shadow: 0 0 2px #333;
    }
  
    /* .nombres {
      position: absolute;
      background-color: #ff3c00;
      color: #fff;
      cursor: pointer;
      border: solid 1px #ff3c00;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 2s ease;
      
      width: 98%;
      padding: 8px;
      transition: opacity 0.3s ease;
      z-index: 1;
      opacity: 0; /* Inicialmente invisible }*/
  
    .tarjeta-proyecto:hover .nombres {
      opacity: 1; /* Hace visible el título al hacer hover */
    }

    button {
            background-color: #f7ebe7;
            font-family: 'Public Sans', sans-serif;
            width: auto;
            height: auto;
            text-decoration: none;
            color: #ff3c00;
            font-size: 2.5em;
            border-radius: 1px;
            border: 1px solid #ff3c00;
            cursor: pointer;
            transform-style: preserve-3d;
        }

        button:hover {
     
            transition: all 1s ease;
            background-color: #f7ebe7;
            color: #ff3c00;
            box-shadow: 0 0 4px #ff3c00;;
        }

        @media screen and (max-width: 768px) {
      .contenedor-proyectos {
        flex-direction: column;
        
      }

      .tarjeta-proyecto {
        width: 100%;
      margin-bottom: 2%;
      -moz-box-flex: 0; /* Prefijo para Firefox */
      -webkit-box-flex: 0; /* Prefijo para Webkit (Chrome, Safari) */
      -webkit-flex: 0 0 auto; /* Prefijo para Webkit (Chrome, Safari) */
      flex: 0 0 auto;
      }

      button {
        width: auto; /* Ajusta el ancho del botón al 100% en dispositivos móviles */
        height: auto; /* Permite que la altura del botón sea automática en dispositivos móviles */
        font-size: 1.5em; /* Ajusta el tamaño de la fuente para dispositivos móviles */
    }
    }

  </style>