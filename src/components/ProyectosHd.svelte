<script>
import Icon from '@iconify/svelte';
import Bernardo from "./Bernardo.svelte";
import JuanEsteban from "./JuanEsteban.svelte";
import Stefany from "./Stefany.svelte";
import Sebastian from './Sebastian.svelte';
import {fade, blur, fly, slide, scale} from 'svelte/transition';


let proyectos = [
    {nombre: "Tendencias de lectura en la formación de un historiador", autor: "Bernardo Selaya ", descripcion: "", imagen: "assets/imgs/1.png"},
    {nombre: "Futbol y Política: Mundiales segunda mitad Siglo XX", autor: "Juan Esteban Rodríguez", descripcion: "...", imagen: "assets/imgs/2.png"},
    {nombre: "El mapa y los discursos en torno a la representación cartográfica de Bogotá", autor: "Sebastián Villamarín", descripcion: "...", imagen: "assets/imgs/4.png"},
    {nombre: "Geopolítica de los proyectos HD", autor: "Stefany Caicedo y Mateo Vásquez", descripcion: "...", imagen: "assets/imgs/3.png"}
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
          <Bernardo/>
    {:else if proyectoSeleccionado === 1}
          <JuanEsteban/>
    {:else if proyectoSeleccionado === 2}
          <Sebastian />
    {:else if proyectoSeleccionado === 3}
          <Stefany />
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
            width: 4vw;
            height: 3vw;
            text-decoration: none;
            color: #ff3c00;
            font-size: 2.5em;
            border-radius: 1px;
            border: 1px solid #ff3c00;
            cursor: pointer;
            transform-style: preserve-3d;
        }

        button:hover {
     
            transition: all 0.2s ease;
            background-color: #f7ebe7;
            color: #ff3c00;
            box-shadow: 0 0 1px #ff3c00;;
        }
  </style>