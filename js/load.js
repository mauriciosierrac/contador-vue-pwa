//este archivo solo pregunta si el service worker esta cargando
// le pregunta al navegador si lo soporta y lo carga
// si carga me retorna una promesa que busca el archivo sw.js y registra exitoso

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("./sw.js").then(
        reg => console.log("Registro Exitoso")
    ).catch(
        err => console.log(err)
    )

}