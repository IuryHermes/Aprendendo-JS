// Selecionando um elemento (CORREÇÃO: MyButton, não Mybuttom)
let buttom = document.getElementById(`MyButton`);

// ADICIONANDO EVENTOS
//evento botão
buttom.addEventListener(`click`,function(){
    console.log(`o botão foi clicado!`)
});

//evento mouse
myParagraph.addEventListener(`mouseover`, function(){
    console.log("O mouse esta sobre o parágrafo!")
})

let input = document.getElementById(`myInput`);
input.addEventListener(`change`, function(){
    console.log(`O valor input foi alterado para: `+ this.value);
})