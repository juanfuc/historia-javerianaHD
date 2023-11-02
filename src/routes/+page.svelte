<script>
    import Proyectos from '../components/Proyectos.svelte'


</script>

<div class="contenedor-general">

    <header>
        <div class="titulo"><h1>Proyectos HD</h1><h1>historiaJaveriana</h1></div>
        <div class="nav"><a href="#acerca"><h3>Acerca</h3></a></div>
    </header>

    <div class="contenido">

        <div class="proyecto">
            <Proyectos/>
        </div>

    </div>

</div>

<style>
     .contenedor-general {
            display: flex;
            flex-direction: column;
         
 
        }

        header {
            display: flex;
            justify-content: space-around;
            align-items: baseline;
            background-color: #fffdfc;
            width: 100%;
            padding: 12px;
        }

        .titulo {
            font-size: 50px;
            font-family: 'Public Sans', sans-serif;
            color: #000;
        }

        .nav {
            display: flex;
            flex-direction: column;
            justify-content:baseline;
            font-size: .7em;
            font-family: 'Public Sans', sans-serif;
            text-align: center;
            max-width: 100%;
            font-weight: 800;
        }

        .nav a {
            background-color: #f96400;
            font-family: 'Public Sans', sans-serif;
            width: 7vw;
            height: 3vw;
            text-decoration: none;
            color: #fffdfc;
            font-size: 1.5em;
            border-radius: 100px;
            cursor: pointer;
            border-left: 1px solid rgba(0, 0, 0, 0);
            transform-style: preserve-3d;
        }

        .nav a:hover {
            transform: translate3d(0px, -10.405px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(8deg) rotateZ(9.11765deg) skew(0deg);
            width: 7.5vw;
            height: 3.5vw;
            transition: all 1s ease;
        }

        
</style>