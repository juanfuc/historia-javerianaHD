<script>
        export let volverAProyectos;
        import { fly } from 'svelte/transition';
        import Icon from '@iconify/svelte';
</script>
<div class="contenedor">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <button><a href="#proyectos"  on:click={volverAProyectos} transition:fly={{x: 300}}><Icon icon="teenyicons:left-outline" /></a></button>
    <div class="texto">    
        <h1 class="titulo">Acerca</h1>
        <div class="parrafos">
            <p>
                <em>ProyectosHD-historiaJaveriana</em> es una galería que exhibe los trabajos realizados en la asignatura de Humanidades Digitales del programa de Historia de la Pontificia Universidad Javeriana. Estos proyectos reflejan las habilidades adquiridas por los estudiantes a lo largo del curso, donde seleccionaron temas de interés, recopilaron información, construyeron bases de datos y modelaron los datos de acuerdo con sus preguntas e intereses. Posteriormente, crearon visualizaciones y presentaciones que les permitieron llegar a hallazgos preliminares, los cuales seguramente explorarán en profundidad en el futuro.        
            </p>
            <p>
                En términos generales, los estudiantes demostraron un marcado interés en el uso del mapa como una herramienta de visualización. Abordaron esta posibilidad de diversas maneras. Algunos, como Sebastián Villamarín, tomaron los mapas como objeto de estudio, utilizando herramientas geoespaciales para georreferenciar mapas antiguos de Bogotá y superponerlos a mapas actuales. 
            </p>
            <p>
                Otros proyectos se enfocaron en la geopolítica del conocimiento, empleando categorías analíticas como Norte Global y Sur Global para mapear diferentes tipos de datos relacionados con la producción de proyectos de Humanidades Digitales y la formación de historiadores en la Universidad Javeriana. Mateo Vásquez y Stefany Caicedo recolectaron información sobre los ganadores de premios globales en proyectos de Humanidades Digitales, cruzándola con datos sobre la ubicación en el Norte o Sur Global, ingresos promedio de los países, PIB e inversión en educación. Bernardo Selaya construyó una base de datos sobre sus lecturas en la carrera de historia, extrayendo datos sobre centros de producción, género, escuelas historiográficas, entre otros.
            </p>
            <p>
                Además, se utilizó el mapa como lienzo para superponer información sobre problemas de historia cultural. Juan Esteban Rodríguez creó una colección de momentos de relaciones entre política y fútbol en mundiales durante la segunda mitad del siglo XX, integrando marcadores, imágenes y otros metadatos sobre un mapa global.
            </p>
            <p>
                Todos estos proyectos evidencian las posibilidades de las herramientas y flujos metodológicos de las Humanidades Digitales para movilizar preguntas y problemas de investigación, así como para visualizarlos y presentarlos de manera creativa.
            </p>
        </div>
    </div>
</div>
<style>
.contenedor {
    margin-left: 6%;
    margin-right: 4%;
}
.titulo {
    color: #ff3c00;
}
.texto {
    margin-left: 23%;
    margin-right: 23%;
}
.parrafos {
    text-align: justify;
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
            margin-top: 1%;
        }

button a {
            color: #ff3c00;
        }

button:hover {
     
            transition: all 0.2s ease;
            background-color: #f7ebe7;
            color: #ff3c00;
            box-shadow: 0 0 1px #ff3c00;
        }
</style>