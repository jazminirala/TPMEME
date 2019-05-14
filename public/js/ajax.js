//AJAX ARCHIVOS DONDE HACEMOS TODOS NUESTROS PEDIDOS//
let artCatalogo = document.getElementById("catalogo");
let botonTendencia = document.getElementById("tendencias");
let botonClasico = document.getElementById("clasicos")


// se le asigna a un clickleble una funcion por id (clasico) declarado en el html 
botonClasico.addEventListener("click", function(){
	pedirDatos(dibujaMemeClasico)
})

// se le asigna a un clickleble una funcion por id (tendencia)declarado en el html 
botonTendencia.addEventListener("click", function(){
	pedirDatos(dibujaMemeTendencia)
})

//se solicita el json memesinfo y se lo parsea, para posteriormente consultar al objeto

function pedirDatos(datos) {
	let request = new XMLHttpRequest();

	request.onload = function() {
        let datosMemes = JSON.parse(request.responseText);	//aca se parsea y se guarda en la variable dotaMemes
        
		datos(datosMemes);
		console.log(datosMemes); 		// verificamos en consola que retorna el obj de la consulta
		 
	};

	request.open('GET', '/infomemes');
	request.send();

}

//se toma el objeto de la funcioon pedirdatos y se la recorre con un for para 
//verificar si posee su elemento tendencia en true, para mostrarlo en el dom 
// function dibujaMemeTendencia(datos){

// artCatalogo.innerHTML = ""; 			// limpia vista en el html
// 	// recorre el largo del objeto datos
// 	for (let i = 0; i < datos.length; i ++) {
// 		//se verifica el elemento tendencia posea valor true
// 		if (datos[i].tendencia == true) {
// 			// se crea elemento div e img, y se apendea ambos al elemento articulo ya deckarado en el html
// 			let div = document.createElement("div");	//se crea el elemento div y se guarda en una variable tambien llamada div
// 			div.setAttribute("class","collage");		//se le asigna la clase collage al div anterior

// 			let img = document.createElement("img");	//se crea el elemento img y se guarda en la variable img
// 			img.setAttribute("class", "img_meme");		//se le asigna la clase img_meme al elemento img anterior
// 			img.setAttribute("src", datos[i].imagen );	//se le asigna el src y la ruta obtenida del objeto en la posicion que se encuentra en el momento del for 

// 			artCatalogo.appendChild(div.appendChild(img));	//se appendea img al div y eso junto a la articulo declarado ya en el html 

// 			let nombre = document.createTextNode(datos[i].nombre);
// 			let span = document.createElement("span");
// 			let a = document.createElement("a");
// 			a.setAttribute("class", "icon-favorito");
// 			let divBarrita = document.createElement("div");
// 			divBarrita.setAttribute("class", "favoritos");			
						
// 			artCatalogo.appendChild(div.appendChild(img.appendChild(divBarrita.appendChild(a.appendChild(span.appendChild(nombre))))));
// 		}
// 		else{
// 			console.log("memes que no son tendencias");
// 		}

// 	}
// }

function dibujaMemeClasico(datos){

	artCatalogo.innerHTML = "";
	
	    for (let i = 0; i < datos.length; i ++) {
		
		if (datos[i].clasicos == true) {
		    // se crea elemento div e img, y se apendea ambos al elemento articulo ya declarado en el html
		    let div = document.createElement("div");
		    div.setAttribute("class","collage");
	
		    let img = document.createElement("img");
		    img.setAttribute("class", "img_meme");        
		    img.setAttribute("src", datos[i].imagen );
		    let divNombre = document.createElement("div");
		    divNombre.setAttribute("class", "titulo-corazon")
		    let nombre = document.createTextNode(datos[i].nombre);
		    
		    divNombre.appendChild(nombre);
	
		    div.appendChild(img);
		    artCatalogo.appendChild(div);
		    
		    
		    let span = document.createElement("span");
		    let a = document.createElement("a");
		    a.setAttribute("class", "icon-favorito");
		    let divBarrita = document.createElement("div");
		    divBarrita.setAttribute("class", "favoritos");            
		    
		    span.appendChild(a)
		    span.appendChild(divBarrita);
		    div.appendChild(divNombre);
		    div.appendChild(span);
		    
		    artCatalogo.appendChild(div)
	
		}
		else{
		    console.log("memes que no son tendecia");
		}
	
    }
}

function dibujaMemeTendencia(datos){

	artCatalogo.innerHTML = "";
	
	    for (let i = 0; i < datos.length; i ++) {
		
		if (datos[i].tendencia == true) {
		    // se crea elemento div e img, y se apendea ambos al elemento articulo ya deckarado en el html
		    let div = document.createElement("div");
		    div.setAttribute("class","collage");
	
		    let img = document.createElement("img");
		    img.setAttribute("class", "img_meme");        
		    img.setAttribute("src", datos[i].imagen );
		    let divNombre = document.createElement("div");
		    divNombre.setAttribute("class", "titulo-corazon")
		    let nombre = document.createTextNode(datos[i].nombre);
		    
		    divNombre.appendChild(nombre);
	
		    div.appendChild(img);
		    artCatalogo.appendChild(div);
		    
		    
		    let span = document.createElement("span");
		    let a = document.createElement("a");
		    a.setAttribute("class", "icon-favorito");
		    let divBarrita = document.createElement("div");
		    divBarrita.setAttribute("class", "favoritos");            
		    
		    span.appendChild(a)
		    span.appendChild(divBarrita);
		    div.appendChild(divNombre);
		    div.appendChild(span);
		    
		    artCatalogo.appendChild(div)
	
		}
		else{
		    console.log("memes que no son clasicos");
		}
	
    }
}
