window.onload = () => {

// FUNCION PARA ATRAPAR ELEMENTOS HTML ==========
    function $(element) {
        return document.querySelector(element);
    }
//====================================================




// ========= HEADER ==========

//  BOTONES PARA DESPLEGAR PANEL IMAGEN/TEXTO
const $buttonImagen = $("#botonImagen");
const $buttonTexto = $("#botonTexto"); 

//  BOTONES MODO CLARO Y OSCURO 
const $modoOscuro = $("#botonModoOscuro");
const $modoClaro = $("#botonModoClaro");



// ========== MAIN ===========

// TEXTOS
const $h2Top = $("#textoTop");
const $h2Bottom = $("#textoBottom");
// IMAGEN
const $imagenMeme = $("#imagen");
// BOTONES
const $buttonDescarga = $("#botonDescarga");
const $buttonResetTodo= $("#botonReestablecer")



// ========== ASIDE IMAGEN ===========

const $asideImagen = $("#panelImg");

// IMAGEN
const $inputURL = $("#URL");
//FONDO
const $inputColorFondo = $("#colorFondo");
// SELECT
const $selectNinguno = $("#opcionNinguno");
const $selectAclarar = $("#opcionAclarar");
const $selectOscurecer = $("#opcionObscurecer");
const $selectDiferencia = $("#opcionDiferencia");
const $selectLuminosidad = $("#opcionLuminosidad");
const $selectMultiplicar = $("#opcionMultiplicar");
// FILTROS
const $rangeBrillo = $("#filtroBrillo");
const $rangeOpacidad = $("#filtroOpacidad");
const $rangeContraste = $("#filtroContraste");
const $rangeDesenfoque = $("#filtroDesenfoque");
const $rangeGrises = $("#filtroGrises");
const $rangeSepia = $("#filtroSepia");
const $rangeHue = $("#filtroHue");
const $rangeSaturado = $("#filtroSaturado");
const $rangeNegativo = $("#filtroNegativo");
// BOTON REESTABLECER FILTROS
const $buttonReset = $("#resetFiltros");





// ========== ASIDE TEXTO ===========

const $asideTexto = $("#panelTexto");

// TEXTO SUPERIOR
const $inputTextoSup = $("#textoSuperior");
const $checkSinTextoSup = $("#sinTextoSup");
// TEXTO INFERIOR
const $inputTextoInf = $("#textoInferior");
const $checkSinTextoInf = $("#sinTextoinf");

// FUENTE
const $selectImpact = $("#fuenteImpact");
const $selectTimes = $("#fuenteTimes");
const $selectArial = $("#fuenteArial");
const $selectCambria =("#fuenteCambria");
const $selectRoboto = $("#fuenteRoboto");
// --- TAMAÑO DE FUENTE
const $inputTamañoFuente = $("#inputTamaño");
// --- ALINEACION DE FUENTE
const $buttonIzquierda = $("#izquierda");
const $buttonCentro = $("#centro");
const $buttonDerecha = $("#derecha");

// COLOR
const $inputColorFuente = $("#colorFuente");
// FONDO
const $inputFondo = $("#fondoFuente");
const $checkTransparente = $("#checkTransparente");

//CONTORNO
const $buttonNinguno = $("#ninguno");
const $buttonClaro = $("#claro");
const $buttonOscuro = $("#oscuro");

// ESPACIADO
const $inputEspaciado = $("#espaciadoFuente");

//INTERLINEADO
const $selectCeroOcho = $("#ceroOcho");
const $selectUno = $("#uno");
const $selectUnoDos = $("#unoDos");
const $selectUnoCinco = $("#unoCinco");
const $selectDos = $("#dos");
const $selectDosCinco =$("#dosCinco");

// ================ FIN DE ELEMENTOS HTML ===============


// ===============================================


$buttonTexto.addEventListener("click", () => {
    $asideTexto.style.display = "flex";
    $asideImagen.style.display = "none"
})



// //  BOTONES PARA DESPLEGAR PANEL IMAGEN/TEXTO
// const $buttonImagen = $("#botonImagen");
// const $buttonTexto = $("#botonTexto"); 







    //INPUT URL
    $inputURL.addEventListener("input", () => {
        $imagenMeme.src = $inputURL.value
    })

}



// //DOBLE CONTROL SOBRE LOS INPUT DEL TIPO NUMBER

// $inputEdad.AddEventListener("input", () => {
//     if(Number($inputEdad.value)) {
//         $h1Title.innerText = $inputEdad.value
//     }
// })

/*  FORMA 1 */
// const titulo = prompt('ingrese un titulo');
// const url = prompt('ingrese la url de imagen');
// const urlArticul = prompt('ingrese la url del articulo')

// const titulo1 = document.querySelector('#titulo')
// titulo1.innerText = titulo;
// const url1 = document.querySelector('#img')
// url1.src = url
// const urlArticul1 = document.querySelector('#url')   // <a id='url'>Ver mas...</a>
// urlArticul1.href = urlArticul;

// const card = document.querySelector('#card');
// card.style.border = "2px solid black";
// card.style.boxShadow = "0 4px 12px black";
// card.style.fontFamily = "arial";
// card.style.fontSize = "30px";
// card.style.color = "red";