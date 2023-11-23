<script>
    export let proyectos
</script>

<h1>{proyectos[2].nombre}</h1>
<p>Por: {proyectos[2].autor}</p>
<!-- svelte-ignore a11y-missing-attribute -->
<iframe class='proyecto' src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1cUuDNZJwDi4D--_dg6rv0J1BwqGX2BD64mJWVCvCGrw&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>

<style>
    .proyecto{
        margin-top: 0;
    }
</style>