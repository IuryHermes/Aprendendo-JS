let minhaidade = 32;
let meunome = "Iury";
let souestudante = true;
let valornulo = null;
let valorindefinido = undefined;
let minhadatadenascimento = new Date(1992,12,17);

window.alert(`Meu nome é ${meunome}, tenho ${minhaidade} anos, nasci em ${minhadatadenascimento} e é ${souestudante} que sou estudante!`);

/*Operadores de atribuição em JavaScript:
atribuição (=): let a = 5;
atribuição de adição (+=): let a = 5; a +=3; // agora a é 8
atribuição de subtração (-=): let a = 5; a -=3; // agora a é 2
atribuição de multiplicação (*=): let a = 5; a *=3; // agora a é 15
atribuição de divisão (/=): let a = 10; a/=2; // agora a é 5
atribuição de resto (%=): let a = 10; a%=3; // agora a é 1
atribuição de exponenciação (**=): let a = 2; a**=3; // agora a é 8 */

/*Operadores de comparação em JavaScript:
igual a (==): 5 == `5` retornará true
igual a valor e tipo (===): 5 === `5` retornará false
não igual (!=): 5 != `6` retornará true
não igual a valor e tipo(!==): 5 !== `5` retornará true
maior que (>): 5 > 3 retornará true
menor que (<): 3 < 5 retornará true
maior ou igual a (>=): 5 >= 5 retornará true
menor ou igual a (<=): 3 <= 5 retornará true */

/*Operadores lógicos em JavaScript:
E lógico (&&): retornara true se ambas as expressões forem verdadeiras. Exemplo: true && false retornará false
OU lógico (||): true || retornará true se pelo menos uma das expressões for verdadeira. Exemplo: true || false retornará true
NÃO lógico (!): inverte o valor lógico de uma expressão. Exemplo: !true retornará false */

//if
let idade = 18;
if (idade >=18) {
    console.log(`você tem ${idade} e é responsável por seus atos!`);
}
else (idade<18);
    console.log(`você tem ${idade} e é dependente de um responsável!`);


//else if
let idade = 16;
if (idade >=18) {
    console.log(`você tem ${idade} e é responsável por seus atos!`);
} else if (idade ==17) {
    console.log(`você tem ${idade} e está quase lá!`);
}

//else
    let idade = 15;
if (idade >=18) {
    console.log("você é responsável por seus atos!");
} else if (idade == 17){
    console.log("você está quase lá!");
} else{
    console.log("você é dependente de um responsável!");
}

//switch
let dia = 2;
switch (dia) {
    case 1:
        console.log("Hoje é segunda-feira!");
        break;
    case 2:
        console.log("Hoje é terça-feira!");
        break;
    case 3:
        console.log("Hoje é quarta-feira!");
        break;
    default:
        console.log("indefinido");
}

//Estrutura de loop
//for
for (let i = 0; i < 5; i ++){ //explicação: i começa em 0, enquanto i for menor que 5, incrementa i em 1 por que ++ é o operador de incremento
    console.log(i);
}

//while
let i = 0;
while (i <5 ) {
    console.log(i);
    i++; // Incrementa i para evitar loop infinito e ficando sempre menor que 5
}

//do...while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5); // Executa o bloco de código pelo menos uma vez antes de verificar a condição