

/*//PARA QUE NUESTRO MENÚ BOTÓN FUNCIONE
var btnMenu = document.getElementById('btn-menu');
//la variable var btnMenu va a almacenar a span con id de btn menu
var nav = document.getElementById('nav');
// y creamos una variable también para guardar el nav

//Para hacer click en el botón, hacemos un evento. btnMenu ahora es un variable. 
//Cuando haga click, qué tiene que hacer
btnMenu.addEventListener('click', funtion(){
    //al nav le agregamos una clase//
    nav.classList.toggle('mostrar')
}) 
*/

var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});





//FUNCIÓN QUE USE LOS DATOS ver GIT FER //

//function crearBotones(nombre, id) {
/*	var boton = document.createElement('button');

	boton.setAttribute('class', 'boton-usuario');
	var texto = document.createTextNode(nombre);
	boton.appendChild(texto);

	boton.addEventListener('click', function() {
		verPostsUsuario(id);
	} );

	divContenedorBotonesUsuario.appendChild(boton);
 
*/