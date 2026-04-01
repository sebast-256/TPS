function dni(){

var letras = ['T', 'R', 'W', 'A', 'G', 'M',
'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Ingrese su DNI:");

if(isNaN(numero) || numero==null || numero=="" || numero < 0 || numero > 99999999){
    console.log("Valor inválido papanatas");
}

else{
    var resultadoD = numero % 23;

console.log("Resto: ", resultadoD);
console.log("Letra: ", letras[resultadoD]);

}
}