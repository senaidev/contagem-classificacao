
let listaNomes = ["Maria","José", "willian", "leo", "janaina","ana"];
for(let contador = 0; contador < listaNomes.length; contador++){
    console.log("O nome da pessoa é: " + listaNomes[contador]);
}for(let contador = 0; contador <= listaNomes.length; contador++){
    if(contador == 0){
        console.log("O número é: " + contador + " isso mesmo, é ZERO!");
    } else if(contador % 2 == 0) {
        console.log("O número é: " + contador + " e é PAR!");
    } else if(contador % 2 == 1) {
        console.log("O número é: " + contador + " e é ÍMPAR!");
    }
}