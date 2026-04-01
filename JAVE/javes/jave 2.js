function mates(){

    var valores = [
        true, 5, false, "hola", "adiós", 2
    ];

    var suma = (valores[1]+valores[5]);
    var resta = (valores[1]-valores[5]);
    var multiplicacion = (valores[1]*valores[5]);
    var división = (valores[1]/valores[5]);
    var potencia = (valores[1]**valores[5]);

    console.log("Suma: ", suma);
    console.log("Resta: ", resta);
    console.log("Multiplicación: ", multiplicacion);
    console.log("División: ", división);
    console.log("Potencia: ", potencia);

    if(valores[3].length > valores[4].length){
        console.log("La afirmación es: ", valores[2]);
    }
    else if(valores[3].length < valores[4].length){
        console.log("La afirmación es: ", valores[0]);
    }

}