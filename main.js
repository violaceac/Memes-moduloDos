window.onload = () => {

    // FUNCION PARA ATRAPAR ELEMENTOS HTML ==========
    function $(element) {
        return document.querySelector(element);
    }
    

    // ELEMENTOS ATRAPADOS CON LA FUNCION ================
    const $inputURL = $("#URL");
    const $imagenMeme = $("#imagen");
    


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