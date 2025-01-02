window.onload = () => {

// FUNCION PARA ATRAPAR ELEMENTOS HTML ==========
    function $(element) {
        return document.querySelector(element);
    }
//====================================================



const $body = $("#body");
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
const $imagenMeme = $("#contenedor-imagen");
const $memeCompleto = $("#contenedor-meme")
// BOTONES
const $buttonDescarga = $("#botonDescarga");



// ========== ASIDE IMAGEN ===========

const $asideImagen = $("#panelImg");
// IMAGEN
const $inputURL = $("#URL");
//FONDO
const $inputColorFondo = $("#colorFondo");
// SELECT MEZCLA
const $selectMezcla = $("#select-mezcla")
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
const $selectInterlineado = $("#inputInterlineado")

// ================ FIN DE ELEMENTOS HTML ===============



// ----------------------------------------------------



// ============== EVENTOS ========================

// ==== HEADER ====
//  DESPLEGAR PANEL TEXTO
$buttonTexto.addEventListener("click", () => {
    $asideTexto.style.display = "flex";
    $asideImagen.style.display = "none"
})
//  DESPLEGAR PANEL IMAGEN
$buttonImagen.addEventListener("click", () => {
    $asideImagen.style.display = "flex";
    $asideTexto.style.display = "none"
})
// BOTON MODO OSCURO
$modoOscuro.addEventListener("click", () => {
    if($body.classList.contains("modo-claro")) {
        $body.classList.remove("modo-claro")
        $body.classList.add("modo-oscuro");
        $modoOscuro.style.display = "none";
        $modoClaro.style.display = "flex"
    }
})
// BOTON MODO CLARO
$modoClaro.addEventListener("click", () => {
    if($body.classList.contains("modo-oscuro")) {
        $body.classList.remove("modo-oscuro")
        $body.classList.add("modo-claro");
        $modoOscuro.style.display = "flex";
        $modoClaro.style.display = "none"
    }
})
// ========== FIN HEADER ============



// ==== MAIN ====
// BOTON DE DESCARGA
$buttonDescarga.addEventListener("click", (e) => {
    console.log(e)
    domtoimage.toBlob($memeCompleto).then((blob) => {
        saveAs(blob, "my-meme.png");
      }).catch((error)=> {console.log(error)});
})
// ====== FIN MAIN =========



// ========== ASIDES ==========

// = ASIDE IMAGEN =
//INPUT URL
$inputURL.addEventListener("input", () => {
   $imagenMeme.style.backgroundImage = `url(${$inputURL.value})`
})
// FONDO
$inputColorFondo.addEventListener("input", () => {
    $imagenMeme.style.backgroundColor = `${$inputColorFondo.value}`
})
//MEZCLA
$selectMezcla.addEventListener("change", () => {
    $imagenMeme.style.backgroundBlendMode = $selectMezcla.value
})
//FILTROS
$rangeBrillo.addEventListener("input", () => {
    aplicarFiltros();
});
$rangeOpacidad.addEventListener("input", () => {
    aplicarFiltros()
})
$rangeContraste.addEventListener("input", () => {
    aplicarFiltros()
})
$rangeDesenfoque.addEventListener("input", () => {
    aplicarFiltros()
})
$rangeGrises.addEventListener("input", () => {
    aplicarFiltros()
})
$rangeSepia.addEventListener("input", () => {
    aplicarFiltros()
})
$rangeHue.addEventListener("input", () => {
    aplicarFiltros()
})
$rangeSaturado.addEventListener("input", () => {
    aplicarFiltros()
})
$rangeNegativo.addEventListener("input", () => {
    aplicarFiltros()
})
//botón resetear filtros
$buttonResetFiltros.addEventListener("click", () => {
    resetFiltros()
})

// == FUNCIONES ==

//aplicar filtros
function aplicarFiltros() {
    $imagenMeme.style.filter = `
        brightness(${$rangeBrillo.value})
        opacity(${$rangeOpacidad.value})
        contrast(${$rangeContraste.value}%)
        blur(${$rangeDesenfoque.value}px)
        grayscale(${$rangeGrises.value}%)
        sepia(${$rangeSepia.value}%)
        hue-rotate(${$rangeHue.value}deg)
        saturate(${$rangeSaturado.value}%)
        invert(${$rangeNegativo.value})
    `;
}
// resetear filtros
function resetFiltros() {
    $rangeBrillo.value = "1" 
    $rangeOpacidad.value = "1"
    $rangeContraste.value = "100"
    $rangeDesenfoque.value = "0"
    $rangeGrises.value = "0" 
    $rangeSepia.value = "0"
    $rangeHue.value = "0"
    $rangeSaturado.value = "100"
    $rangeNegativo.value = "0"
    aplicarFiltros()
}

resetFiltros();


// ------FIN DE FILTROS-----



// ========== ASIDES ==========

//= ASIDE TEXTO =
// INPUT TEXTO SUPERIOR
$inputTextoSup.addEventListener("input", () => {
    $h2Top.innerText = `${$inputTextoSup.value}`
})
// INPUT TEXTO INFERIOR
$inputTextoInf.addEventListener("input", () => {
    $h2Bottom.innerText = `${$inputTextoInf.value}`
})
// CHECKBOX SIN TEXTO SUPERIOR
$checkSinTextoSup.addEventListener("change", () => {
    if($checkSinTextoSup.checked) {
        $h2Top.style.display = "none";
    } else {
        $h2Top.style.display = "block";
    }
})
// CHECKBOX SIN TEXTO INFERIOR
$checkSinTextoInf.addEventListener("change", () => {
    if($checkSinTextoInf.checked) {
        $h2Bottom.style.display = "none";
    } else {
        $h2Bottom.style.display = "block";
    }
})

// FUENTES
// TIPO DE FUENTE
$selectFuente.addEventListener("change", () => {
    $h2Top.style.fontFamily = $selectFuente.value;
    $h2Bottom.style.fontFamily = $selectFuente.value;
})
// TAMAÑO DE FUENTE
$inputTamañoFuente.addEventListener ("input", () => {
    $h2Top.style.fontSize = `${$inputTamañoFuente.value}px`
    $h2Bottom.style.fontSize = `${$inputTamañoFuente.value}px`
})
// ALINEACION DE FUENTE
//izquierda
$buttonIzquierda.addEventListener("click", () => {
    $h2Top.style.textAlign = "left";
    $h2Bottom.style.textAlign = "left";
})
//centro
$buttonCentro.addEventListener("click", () => {
    $h2Top.style.textAlign = "center";
    $h2Bottom.style.textAlign = "center";
})
//derecha
$buttonDerecha.addEventListener("click", () => {
    $h2Top.style.textAlign = "right";
    $h2Bottom.style.textAlign = "right";
})
// COLOR DE FUENTE
$inputColorFuente.addEventListener("input", () => {
    $h2Top.style.color = `${$inputColorFuente.value}`
    $h2Bottom.style.color = `${$inputColorFuente.value}`
})
// COLOR FONDO TEXTO
$inputFondo.addEventListener("input", () => {
    $h2Top.style.backgroundColor = `${$inputFondo.value}`
    $h2Bottom.style.backgroundColor = `${$inputFondo.value}`
})
// check fondo transparente
$checkTransparente.addEventListener("change", () => {
    if($checkTransparente.checked) {
        $h2Top.style.backgroundColor = `transparent`
        $h2Bottom.style.backgroundColor = `transparent`
    } else {
    $h2Top.style.backgroundColor = `${$inputFondo.value}`
    $h2Bottom.style.backgroundColor = `${$inputFondo.value}`
    }
})
//CONTORNO
//ninguno
$buttonNinguno.addEventListener("click", () => {
    $h2Top.style.textShadow = "none"
    $h2Bottom.style.textShadow = "none"
})
//claro
$buttonClaro.addEventListener("click", () => {
    $h2Top.style.textShadow = "2px 2px 0px white, -2px 2px 0px white, 2px -2px 0px white, -2px -2px 0px white"
    $h2Bottom.style.textShadow = "2px 2px 0px white, -2px 2px 0px white, 2px -2px 0px white, -2px -2px 0px white"
})
//oscuro
$buttonOscuro.addEventListener("click", () => {
    $h2Top.style.textShadow = "2px 2px 0px black, -2px 2px 0px black, 2px -2px 0px black, -2px -2px 0px black"
    $h2Bottom.style.textShadow = "2px 2px 0px black, -2px 2px 0px black, 2px -2px 0px black, -2px -2px 0px black"
})
//ESPACIADO
$inputEspaciado.addEventListener("input", () => {
    $h2Top.style.padding = `${$inputEspaciado.value}px 0`
    $h2Bottom.style.padding = `${$inputEspaciado.value}px 0`
})
// INTERLINEADO
$selectInterlineado.addEventListener("change", () => {
    $h2Top.style.lineHeight = $selectInterlineado.value;
    $h2Bottom.style.lineHeight = $selectInterlineado.value;
})


// ========== FIN ASIDES ============






}





