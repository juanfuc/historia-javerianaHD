<script>
    import Proyectos from '../components/ProyectosHd.svelte';
    import { fly } from 'svelte/transition';
    import Acerca from '../components/Acerca.svelte';

    let mostrarProyectos = true;

    function mostrarAcerca() {
        mostrarProyectos = false;
    }

    function volverAProyectos() {
        mostrarProyectos = true;
    }
</script>

<div class="contenedor-general">
    <header>
        <div class="titulo"><h1>ProyectosHD-historiaJaveriana</h1></div>
        <div class="nav">
            <a href="#acerca" on:click={mostrarAcerca}><h3>Acerca</h3></a>
            <a href="#proyectos" on:click={volverAProyectos}><h3>Proyectos</h3></a>
        </div>
    </header>

    <div class="contenido">
        {#if mostrarProyectos}
            <div id="proyectos" class="proyecto" transition:fly={{x: mostrarProyectos ? 0 : -30}}>
                <Proyectos {volverAProyectos} />
            </div>
        {/if}
        {#if !mostrarProyectos}
            <div id="acerca" transition:fly={{x: mostrarProyectos ? 30 : 0}}>
                <Acerca {volverAProyectos}/> 
            </div>
        {/if}
    </div>
</div>


<style>
     .contenedor-general {
            display: flex;
            flex-direction: column;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            background-color: #f7ebe7;
            width: 100%;
            padding: 12px;
            border-bottom: 1px solid #ff3c00;
            
        }

        .titulo {
            font-size: 12px;
            font-family: 'Public Sans', sans-serif;
            color: #ff3c00;
            font-weight: 100;
            margin-left: 6%;
            user-select: none
        }

        .nav {
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            font-size: .4em;
            font-family: 'Public Sans', sans-serif;
            text-align: center;
            max-width: 100%;
            font-weight: 100;
            margin-right: 9%;
        }

        .nav a {
            background-color: #f7ebe7;
            font-family: 'Public Sans', sans-serif;
            text-decoration: none;
            color: #ff3c00;
            font-size: 2.5em;
            padding: 10px;
            cursor: pointer;
            transform-style: preserve-3d;
            margin-top: 10%;
        }

        .nav a:hover {
     
            transition: all 0.2s ease;
            background-color: #f7ebe7;
            color: #ff3c00;
            
            text-decoration: underline;
        }

        @media screen and (max-width: 768px) {
    header {
        flex-direction: column;
        align-items: center;
    }

 

    .titulo h1 {

        margin-bottom: 10px; /* Agrega un margen inferior para separar el título del menú */
    }

    .nav a {
        font-size: 2.5em; /* Ajusta el tamaño del texto del menú para móviles */
        display: flex;
        justify-content: space-between;
    }

}

        
</style>