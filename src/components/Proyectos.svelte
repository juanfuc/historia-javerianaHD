<script>
// let proyectos = [
//     {nombre: "Mapa de la Bibliografía del Programa de Historia", descripcion: "", imagen: "assets/imgs/1.png", width: "500px", marginLeft: "45%"},
//     {nombre: "Mapas de Bogotá", descripcion: "...", imagen: "assets/imgs/2.png", width: "300px", marginLeft: "45%"},
//     {nombre: "Proyectos de Humanidades Digitales", descripcion: "...", imagen: "assets/imgs/3.png", width: "400px", marginLeft: "50%"},
//     {nombre: "Momentos de Fútbol y Política", descripcion: "...", imagen: "assets/imgs/4.png", width: "550px", marginLeft: "35%"}
// ];


let proyectos = [
    {nombre: "Mapa de la Bibliografía del Programa de Historia", descripcion: "", imagen: "assets/imgs/1.png"},
    {nombre: "Mapas de Bogotá", descripcion: "...", imagen: "assets/imgs/2.png"},
    {nombre: "Proyectos de Humanidades Digitales", descripcion: "...", imagen: "assets/imgs/3.png"},
    {nombre: "Momentos de Fútbol y Política", descripcion: "...", imagen: "assets/imgs/4.png"}
];
</script>

<div class='contenedor-proyectos'>

        {#each proyectos as proyecto, i}
        <div class="tarjeta-proyecto" style="width: {proyecto.width}; margin-left: {proyecto.marginLeft};">

            <div class="img-proyecto">
                <img src="{proyecto.imagen}" alt="imagen del proyecto">
            </div>
        </div>
        {/each}
</div>

<style>
    .contenedor-proyectos {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 12px;
        margin-left: 10%;
        margin-right: 10%;
        scroll-behavior: smooth;
    }

    .tarjeta-proyecto {
        flex: 1 1 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2% 2%;
    }

    .textos {
        display: flex;
        flex-direction: column;
    }
    .tarjeta-proyecto .img-proyecto img {
        width: 100%;
        max-width: 100%;
        height: auto;
        border-radius: 100px;
        box-shadow: 0 0 16px #333;
        transition: all 1s ease;
        cursor: pointer;
    }
    .tarjeta-proyecto .img-proyecto img:hover {
            transform: translate3d(0px, -10.405px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg);
            width: 103%;
        max-width: 103%;

        }


</style>