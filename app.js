console.log("creador Adrian Jimenez, sitio creado con fines educativos")
let columnaActiva = 1;
const columnas = document.querySelectorAll(".columna")
columnas.forEach((columna, indice) =>{
    columna.addEventListener("click", function() {
    nuevaColumna(indice)
    })
})

function nuevaColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice;
}