let quantiaDeCartas = prompt("Com quantas cartas você quer jogar?");
let quantiaDeCartas2 = [];
const cartasDoJogo = document.querySelectorAll(".card");
let cartasViradas = [];
let quantiaDeRodadas = 0;

function conferirQuantia(){
    while(true){
        if (quantiaDeCartas%2 === 0 && quantiaDeCartas>3 && quantiaDeCartas<15){
            break
        }
        alert("Insira um valor entre 4 e 14 e par!");
        quantiaDeCartas = prompt("Com quantas cartas você quer jogar?");
    }
}

function aparecerQuantia(){
    for (let i = 0; i<quantiaDeCartas;i++){
        cartasDoJogo[i].classList.remove("esconder");
    }
}

function embaralharCartas(){
    cartasDoJogo.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * quantiaDeCartas);
        card.style.order = ramdomPos;
    });
}

function virarCarta(clique){
    const x = clique.querySelector(".front-face");
    x.classList.add("rotacaoFrente");
    const y = clique.querySelector(".back-face");
    y.classList.add("rotacaoTras");
    quantiaDeRodadas++
    compararCartas(clique);
}

function desvirarCarta(clique){
    cartasViradas[cartasViradas.length-1].classList.remove("rotacaoTras");
    cartasViradas.pop(clique.querySelector(".rotacaoTras"));
    cartasViradas[cartasViradas.length-1].classList.remove("rotacaoFrente");
    cartasViradas.pop(clique.querySelector(".rotacaoFrente"));
    cartasViradas[cartasViradas.length-1].classList.remove("rotacaoTras");
    cartasViradas.pop(clique.querySelector(".rotacaoTras"));
    cartasViradas[cartasViradas.length-1].classList.remove("rotacaoFrente");
    cartasViradas.pop(clique.querySelector(".rotacaoFrente"));

}

function compararCartas(clique){
    cartasViradas.push(clique.querySelector(".rotacaoFrente"));
    cartasViradas.push(clique.querySelector(".rotacaoTras"));
    if (cartasViradas.length==4){
        if(cartasViradas[1].innerHTML!==cartasViradas[3].innerHTML){
            setTimeout(desvirarCarta, 1000, clique);
        }
        if(cartasViradas[1].innerHTML==cartasViradas[3].innerHTML){
            cartasViradas=[];
            verVitoria()
        }
    }
}

function verVitoria(){
    quantiaDeCartas2 = document.querySelectorAll(".rotacaoTras");
    if(quantiaDeCartas2.length==quantiaDeCartas){
        
        setTimeout(alerta, 1000);
    }
}

function alerta(){
    alert(`Você ganhou em ${quantiaDeRodadas} jogadas!`)
}

conferirQuantia();
aparecerQuantia();
embaralharCartas();