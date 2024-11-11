const ciudades=[
    {ciudad:'Londres', pais: 'Inglaterra', img: 'londres.png'},
    {ciudad:'París', pais: 'Francia', img: 'paris.webp'},
    {ciudad:'Nueva York', pais: 'USA', img: 'new_york.jpg'},
    {ciudad:'Roma', pais: 'Italia', img: 'roma.jpeg'},
    {ciudad:'Quito', pais: 'Ecuador', img: 'quito.webp'},
    {ciudad:'Buenos Aires', pais: 'Argentina', img: 'buenos_aires.jpg'},
    {ciudad:'Moscu', pais: 'Rusia', img: 'moscu.jpg'},
    {ciudad:'Río de Janeiro', pais: 'Brasil', img: 'rio.jpeg'},
    {ciudad:'Ciudad de México', pais: 'México', img: 'mexico.webp'},
    {ciudad:'Barcelona', pais: 'España', img: 'barcelona.jpg'}

]

const ruta_img='./src/imgs/';
let contadorImagen=0;

let btnCambiar=document.querySelector('#btn-cambiar');
let imagen=document.querySelector('div img');
let nombreCiudad=document.querySelector('div h2');
let nombrePais=document.querySelector('div p');

btnCambiar.addEventListener('click',()=>cambiarImagenes());

function cambiarImagenes(){
    
    if(contadorImagen<ciudades.length-1){
        contadorImagen++;
    }else{
        contadorImagen=0;
    }
    // console.log(contadorImagen);

    imagen.setAttribute('src',ruta_img+ciudades[contadorImagen].img);
    nombreCiudad.textContent=ciudades[contadorImagen].ciudad;
    nombrePais.textContent='País: '+ciudades[contadorImagen].pais;
}