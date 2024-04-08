/*
    Entrada: un número pedido con un prompt. 
    Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
    Utiliza document.write para producir la salida
 */
    let num = prompt("Inserte un numero")

    document.write(`<table> <tr> <th>Iteracion</th> <th>Cuadrados</th> <th>Cubos</th> </tr>`)
    for (let i = 1; i<=num; i++){
        document.write(`<tr> <td>`+i+`</td> <td>`+(i*i)+`</td> <td>`+(i*i*i)+`</td> </tr>`)
    } 
    document.write(`</table>`)