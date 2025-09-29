/*Capitulo 05: Objetos e arrays.
Objetos são estruturas de dados dinâmicos qye permitem armazenar dados complexos e variados, agrupando propriedades e metodos em uma unica entidade.
Arrays nos permitem armazenar e manipular listas, valores, seja numero string, objetos, ou mesmo outras arrays.

CRIANDO E MANIPULANDO UM OBJETO */
let carro = {
    marca: "FIAT",
    modelo: "Palio",
    ano: 2020,
    ligar: function(){
        console.log("O carro estpa ligado");

    }
}
// Acessando propriedades de objetos:
        console.log(carro.marca);
        console.log(carro[`modelo`]);

// Manipulando objetos
        carro.cor = "Azul"
        console.log(carro.cor);

// Modificando uma propriedade existente, basta reatribuir um valor a ela
        carro.ano = 2023;
        console.log(carro.ano);

// Para remover uma propriedade, podemos usar a palavra-chave delete
        delete carro.cor
        console.log(carro.cor);

/* CRIAR E MANIPULAR ARRAYS:
Uma array e criado usando colchetes [], e os valores dentro dele são separados por vírgulas, os valores podem ser de qualquerr tipo: números, strings, objetos, outras arrays e assim por diante*/
let numeros = [1,2,3,4,5,];
let nomes = ["Ana","Beatriz","Carlos"];
let misto = [1,"dois",true[3,4],{nome:"João",idade:30}]

//ACESSANDO VALORES
let frutas = ["maça","banana","cereja"];
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

//ALTERANDO VALORES EM ARRAYS
frutas[1] = "morango"
console.log(frutas)

/* METODOS COMUNS DE ARRAYS
push(): adiciona um novo elemento ao final do array.
pop(): remove o último elemento de array.
shift(): remove o primeiro elemento de array.
unshift(): adiciona um novo elemento ao inicio do array.
splice(): adiciona ou remove elementos de array em uma posição especifica.
slice(): cria um novo array a partir de uma parte de array existente.
join(): une todos os elementos de array em uma unica string. */

frutas.push("abacate");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift();
console.log(frutas);

frutas.unshift("manga");
console.log(frutas);

frutas.splice(1,0,"kiwi");
console.log(frutas)

let frutasTropicais = frutas.join(", ");
console.log(frutasTropicais);

//MÉTODOS PARA MANIPULAÇÃO E ACESSO

//concat(): retorna um novo array que é a junção do array original com outros valores ou arrays passados como parâmetros.
let frutas1 = ["maçã","banana"];
let frutas2 = ["cacau", "laranja"]
let todasFrutas = frutas1.concat(frutas2);
console.log(todasFrutas);

//Join() une todos os elementos de uma array em uma string e retorna essa string. podemos especificar um separador; caso contrario será uma vírgula.
let frutas0 = ["maçã","laranja","banana"];
let frutasString = frutas0.join("-");
console.log(frutasString);

//slice() retorna uma cópia de uma parte de um array, delimitado por índice de início e fim.
let frutas00 = ["maça","banana","laranja","melancia"];
let algumasFrutas = frutas00.slice(1,3);
console.log(algumasFrutas);

//MÉTODOS DE ITERAÇÃO

//forEach(): executa uma função para cada elemento de array
let frutas003 = ["pera","uva","caju"];
frutas003.forEach(function(frutas003){
    console.log(frutas003)
})