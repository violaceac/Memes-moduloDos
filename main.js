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
const $buttonResetFiltros = $("#resetFiltros");





// ========== ASIDE TEXTO ===========

const $asideTexto = $("#panelTexto");

// TEXTO SUPERIOR
const $inputTextoSup = $("#textoSuperior");
const $checkSinTextoSup = $("#sinTextoSup");
// TEXTO INFERIOR
const $inputTextoInf = $("#textoInferior");
const $checkSinTextoInf = $("#sinTextoInf");

// FUENTE

// --- TIPO DE FUENTE
const $selectFuente = $("#inputFuentes");
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





// ============== FUNCIONES ========================


// ==== HEADER ====

//  DESPLEGAR PANEL IMAGEN/TEXTO
$buttonTexto.addEventListener("click", () => {
    $asideTexto.style.display = "flex";
    $asideImagen.style.display = "none"
})

$buttonImagen.addEventListener("click", () => {
    $asideImagen.style.display = "flex";
    $asideTexto.style.display = "none"
})

// BOTON CLARO/OSCURO
$modoOscuro.addEventListener("click", () => {
    $modoClaro.style.display = "flex";
    $modoOscuro.style.display = "none"
})

$modoClaro.addEventListener("click", () => {
    $modoOscuro.style.display = "flex";
    $modoClaro.style.display = "none"
})

// ---------------------------------------

// ==== ASIDES ====


// ====== ASIDE IMAGEN ======

//INPUT URL
$inputURL.addEventListener("input", () => {
    $imagenMeme.src = $inputURL.value
})

// FILTROS-------- cada vez que modifico un rango se deshace el anterior
$rangeBrillo.addEventListener("input", () => {
    $imagenMeme.style.filter = `brightness(${$rangeBrillo.value})`
})
$rangeOpacidad.addEventListener("input", () => {
    $imagenMeme.style.filter = `opacity(${$rangeOpacidad.value})`
})
$rangeContraste.addEventListener("input", () => {
    $imagenMeme.style.filter = `contrast(${$rangeContraste.value})`
})
$rangeDesenfoque.addEventListener("input", () => {
    $imagenMeme.style.filter = `blur(${$rangeDesenfoque.value})`
})
$rangeGrises.addEventListener("input", () => {
    $imagenMeme.style.filter = `grayscale(${$rangeGrises.value})`
})
$rangeSepia.addEventListener("input", () => {
    $imagenMeme.style.filter = `sepia(${$rangeSepia.value})`
})
$rangeHue.addEventListener("input", () => {
    $imagenMeme.style.filter = `hue-rotation(${$rangeHue.value})`
})
$rangeSaturado.addEventListener("input", () => {
    $imagenMeme.style.filter = `saturation(${$rangeSaturado.value})`
})
$rangeNegativo.addEventListener("input", () => {
    $imagenMeme.style.filter = `invert(${$rangeNegativo.value})`
})
//---------------
//cada vez que modifico alguno de los rangos de este panel se deshace lo anterior---------

// una funcion que agrupe todos los rangos y que se ejecute cada vez que cambio alguno, entonces cuando mueve uno tiene que leer como estan todos

// function cambioRango () {
//     $imagenMeme.style.filter = `brightness(${$rangeBrillo.value})`;
//     $imagenMeme.style.filter = `opacity(${$rangeOpacidad.value})`;
//     $imagenMeme.style.filter = `contrast(${$rangeContraste.value})`;
//     $imagenMeme.style.filter = `blur(${$rangeDesenfoque.value})`;
//     $imagenMeme.style.filter = `grayscale(${$rangeGrises.value})`;
//     $imagenMeme.style.filter = `sepia(${$rangeSepia.value})`;
//     $imagenMeme.style.filter = `hue-rotation(${$rangeHue.value})`;
//     $imagenMeme.style.filter = `saturation(${$rangeSaturado.value})`;
//     $imagenMeme.style.filter = `invert(${$rangeNegativo.value})`;
// }

// ------FIN DE FILTROS----------------





// ====== FUNCIONES PANEL TEXTO ======

// INPUT TEXTO SUPERIOR E INFERIOR
$inputTextoSup.addEventListener("input", () => {
    $h2Top.innerText = `${$inputTextoSup.value}`
})

$inputTextoInf.addEventListener("input", () => {
    $h2Bottom.innerText = `${$inputTextoInf.value}`
})
// CHECKBOX SIN TEXTO SUPERIOR E INFERIOR
$checkSinTextoSup.addEventListener("change", () => {
    if($checkSinTextoSup.checked) {
        $h2Top.style.display = "none";
    } else {
        $h2Top.style.display = "flex";
    }
})

$checkSinTextoInf.addEventListener("change", () => {
    if($checkSinTextoInf.checked) {
        $h2Bottom.style.display = "none";
    } else {
        $h2Bottom.style.display = "flex";
    }
})

// FUENTES
// hacer una funcion para aplicar todas las fuentes, pero primero como cambio la fuente?
// function cambiarFuente() {
//     $h2Top.style.fontFamily = $fuente.value
// }

$selectFuente.addEventListener("change", () => {
    $h2Top.style.fontFamily = $selectFuente.value
})

// $inputTamañoFuente.addEventListener ("input", () => {
//     $h2Top.style.fontSize = `${$inputTamañoFuente.value}`
// })


// // --- TAMAÑO DE FUENTE
// const $inputTamañoFuente = $("#inputTamaño");
// // --- ALINEACION DE FUENTE
// const $buttonIzquierda = $("#izquierda");
// const $buttonCentro = $("#centro");
// const $buttonDerecha = $("#derecha");
















}




// function reestablecerValores() {
//     $inputTxt.value = ""
//   }
  
//   $buttonCreate.addEventListener("click", () => {
//     if($inputTxt.value !== "") {
//       $liList.innerHTML += `<li>${$inputTxt.value}</li>`
//     }
    
//     reestablecerValores()
//   })






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