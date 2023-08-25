function cubo(b)
{
    let resultado = b * b * b
    alert(resultado)
    alert('Tomamos unos mates?') /*esto no es necesario*/
    return resultado
}
/* en la función let cubo también podemos hacer:  let resultado = b * b * b... y va a dar un número también*/

/*Es un ejemplo de cómo poner una función de calculo (cualquiera)*/
let numero = 5 + cubo(5)
/*el resultado que va a dar no es 5 es igual a cubo mas 5, sino que va a hacer 5 al cubo que va a dar 25*/

alert(numero) /*esto es para que se muestre en el programa*/

function saludo()
{
    let nombre = prompt('Ingresa tu nombre')
    return' Bienvenido ' + nombre
}
alert(saludo())

/*tambien se puede hacer*/ 
function saludo(nombre)
{
    return 'Bienvenido' + nombre
}
alert(saludo('Dami'))