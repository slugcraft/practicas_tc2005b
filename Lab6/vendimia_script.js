

function mostrarInfo(){
    let opcion= document.getElementById("selector").value;
    let change = document.getElementById("change");
    console.log(opcion);
    change.innerHTML = "";
    let titulo = document.createElement("h2");
    let imagen = document.createElement("img");
    let texto = document.createElement("p");
    let precio = document.createElement("h3");
    let boton = document.createElement("button");
    let input = document.createElement("input");

    switch(opcion){
        case "1":
           
            titulo.textContent = "iPhone 15";
            titulo.style="font-family: Arial; text-align: center";
            change.appendChild(titulo);
           

            imagen.src= "./iphone-15.png";
            imagen.width="500";
            imagen.height="500";
            imagen.style= "margin-left: auto; margin-right: auto";
            
            change.appendChild(imagen);

            
            texto.textContent= "El nuevo e innovador diseno cuenta con una parte posterior de vidrio con infusion de color en todo el material. Y gracias a que el vidrio pasa por un proceso de intercambio ionico dual personalizado y a la carcasa de aluminio de calidad aeroespacial, el iPhone 15 tiene una resistencia increible."
            texto.style="font-family: Arial";
            change.appendChild(texto);

           
            precio.textContent="Por tan solo $19,499 mx";
            precio.style= "text-align: right; font-family: Arial";
            change.appendChild(precio);

            input.type="text";
            input.id="entrada";
            change.appendChild(input);

            boton.textContent="Agregar al carrito";
            boton.addEventListener("click", () =>{
                let tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
                let nuevaFila = document.createElement("tr");

                let producto = document.createElement("td");
                let cuantos = document.createElement("td");
                let iva = document.createElement("td");
                let total = document.createElement("td");

                let num = document.getElementById("entrada").value;
                
                if(num){
                    producto.textContent = "iPhone 15";
                    producto.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    cuantos.textContent = num;
                    cuantos.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    iva.textContent = ((num*19499)*0.16);
                    iva.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    total.textContent = ((num*19499)+((num*19499)*0.16));
                    total.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    
                    nuevaFila.appendChild(producto);
                    nuevaFila.appendChild(cuantos);
                    nuevaFila.appendChild(iva);
                    nuevaFila.appendChild(total);
    
                    tabla.appendChild(nuevaFila);
                }else{
                    let msj = document.createElement("h2");
                    msj.textContent = "Introduce una cantidad valida";
                    msj.style="color: red; font-family: Arial"
                    change.appendChild(msj);
                }
                
            });
            change.appendChild(boton);
            break;
        case "2":
            titulo.textContent = "iPad Air";
            titulo.style="font-family: Arial; text-align: center";
            change.appendChild(titulo);
           

            imagen.src= "./iPad-Air.png";
            imagen.width="600";
            imagen.height="471";
            imagen.style= "margin-left: auto; margin-right: auto";
            
            change.appendChild(imagen);

            
            texto.textContent= "El iPad Air te sumerge de lleno en todo lo que haces. La pantalla Liquid Retina de 10.9 pulgadas viene con tecnologías avanzadas como True Tone, amplia gama de colores P3 y revestimiento antirreflejo para que leas, trabajes y veas tus pelis favoritas como nunca."
            texto.style="font-family: Arial";
            change.appendChild(texto);

           
            precio.textContent="Por tan solo $13,999 mx";
            precio.style= "text-align: right; font-family: Arial";
            change.appendChild(precio);

            input.type="text";
            input.id="entrada";
            change.appendChild(input);
            
            boton.textContent="Agregar al carrito";
            boton.addEventListener("click", () =>{
                let tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
                let nuevaFila = document.createElement("tr");

                let producto = document.createElement("td");
                let cuantos = document.createElement("td");
                let iva = document.createElement("td");
                let total = document.createElement("td");

                let num = document.getElementById("entrada").value;
                
                if(num){
                    producto.textContent = "iPad Air";
                    producto.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    cuantos.textContent = num;
                    cuantos.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    iva.textContent = ((num*13999)*0.16);
                    iva.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    total.textContent = ((num*13999)+((num*13999)*0.16));
                    total.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    
                    nuevaFila.appendChild(producto);
                    nuevaFila.appendChild(cuantos);
                    nuevaFila.appendChild(iva);
                    nuevaFila.appendChild(total);
    
                    tabla.appendChild(nuevaFila);
                }else{
                    let msj = document.createElement("h2");
                    msj.textContent = "Introduce una cantidad valida";
                    msj.style="color: red; font-family: Arial"
                    change.appendChild(msj);
                }
            });

            change.appendChild(boton);
            break;
        case "3":
            titulo.textContent = "MacBook Pro";
            titulo.style="font-family: Arial; text-align: center";
            change.appendChild(titulo);
           

            imagen.src= "./mac.png";
            imagen.width="788";
            imagen.height="274";
            imagen.style= "margin-left: auto; margin-right: auto";
            
            change.appendChild(imagen);

            
            texto.textContent= "La MacBook Pro da un salto al futuro con los chips M3, M3 Pro y M3 Max. Fabricados con tecnología de 3 nanómetros y una nueva arquitectura de GPU, son los chips más avanzados que existen en una computadora personal. Y cada uno de estos pequeños gigantes lleva la potencia y el rendimiento a niveles inimaginables."
            texto.style="font-family: Arial";
            change.appendChild(texto);

           
            precio.textContent="Por tan solo $34,999 mx";
            precio.style= "text-align: right; font-family: Arial";
            change.appendChild(precio);

            input.type="text";
            input.id="entrada";
            change.appendChild(input);
            
            boton.textContent="Agregar al carrito";
            boton.addEventListener("click", () =>{
                let tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
                let nuevaFila = document.createElement("tr");

                let producto = document.createElement("td");
                let cuantos = document.createElement("td");
                let iva = document.createElement("td");
                let total = document.createElement("td");

                let num = document.getElementById("entrada").value;
                
                if(num){
                    producto.textContent = "MacBook Pro";
                    producto.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    cuantos.textContent = num;
                    cuantos.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    iva.textContent = ((num*34999)*0.16);
                    iva.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    total.textContent = ((num*34999)+((num*34999)*0.16));
                    total.style="border: 2px solid #ddd; padding: 10px; text-align: left; ";
                    
                    nuevaFila.appendChild(producto);
                    nuevaFila.appendChild(cuantos);
                    nuevaFila.appendChild(iva);
                    nuevaFila.appendChild(total);
    
                    tabla.appendChild(nuevaFila);
                }else{
                    let msj = document.createElement("h2");
                    msj.textContent = "Introduce una cantidad valida";
                    msj.style="color: red; font-family: Arial"
                    change.appendChild(msj);
                }
            });
            change.appendChild(boton);
            break;
    }

    
}

