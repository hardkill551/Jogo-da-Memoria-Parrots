let quantiaDeCartas = prompt("Com quantas cartas você quer jogar?");
const cartasDoJogo = document.querySelectorAll(".card");
while(true){
    if (quantiaDeCartas%2 == 0 && quantiaDeCartas>3 && quantiaDeCartas<15){
        break
    }
    alert("Insira um valor entre 4 e 14 e par!");
    quantiaDeCartas = prompt("Com quantas cartas você quer jogar?");
}
for (let i = 0; i<quantiaDeCartas;i++){
    cartasDoJogo[i].classList.remove("esconder");
}
cartasDoJogo.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * quantiaDeCartas);
    card.style.order = ramdomPos;
});





function virarCarta(clique){
    const x = clique.querySelector(".front-face");
    x.classList.add("rotacaoFrente");
    const y = clique.querySelector(".back-face");
    y.classList.add("rotacaoTras");
}



