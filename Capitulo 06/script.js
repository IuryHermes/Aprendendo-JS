/* DOM (document object model: é uma interface padrão e modelo que permite aos scripts integrar e manipular conteudos web. */

/* SELECIONANDO E MANIPULANDO ELEMENTOS DO DOM

 * document.getElementById(id) retorna o elemento que tem o atributo ID correspondente.
 * document.getElementsByTagName(nome) retorna um HTMLCollection de todos os elementos da página com a tag HTML	nomeada.
 * document.querySelector(selector) retorna o primeiro elemento que corresponde a um selector CSS especifico.
 * document.querySelectorAll(selector) retorna um Node-List de todos os elementos que correspondem ao CSS especificado.*/

//ALTERAR O CONTEÚDO DO TEXTO: podemos usar a propriedade textContent para obter ou definir o conteúdo do texto de um nó e seus descendentes.

let heading = document.getElementById(`main-heading`);
heading.textContent = `Novo Título`; //Muda o titulo para Novo Titulo.

//ALTERAR O HTML INTEIRO: a propriedade innerHTML pode ser usada para obter ou definir o HTML dentro de um elemento.

let div= document.getElementById(`main`);
div.innerHTML= `<p> Este é um novo paragrafo. </p>`; //Insere um novo paragrafo na div.

//ALTERAR ATRIBUTOS: os métodos getAttribute() e setAttribute() podem ser usados para ler e escrever atributos de um elemento, respectivamente.

let link= document.querySelector(`a`);
link.setAttribute(`href`,`https://novosite.com`); //Altera o atributo href do link


