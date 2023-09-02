let quantiaDeCartas = prompt("Com quantas cartas você quer jogar?");
let quantiaDeCartas2 = [];
let cartasViradas = [];
let quantiaDeRodadas = 0;
let cartas = document.querySelector(".cartas");
let listaComAsCartas = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot",];
let cliques = 0;
let temporizador = document.querySelector(".timer")
let cartasDoJogo;
const pararTempo = setInterval(tempo, 1000)

function tempo(){
    temporizador.innerHTML ++ 
}


function conferirQuantia(){
    while(true){
        if (quantiaDeCartas%2 === 0 && quantiaDeCartas>3 && quantiaDeCartas<15){
            break
        }
        alert("Insira um valor entre 4 e 14 e par!");
        quantiaDeCartas = prompt("Com quantas cartas você quer jogar?");
    }
    aparecerQuantia();
}

function aparecerQuantia(){
    for (let i = 0; i<quantiaDeCartas/2;i++){
        for(let j =0;j<2;j++){
        cartas.innerText += `        <div class="card" onclick="virarCarta(this)" data-test="card">
        <div class="front-face face" >
          <img src="imgs/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"  data-test="face-down-image" alt="">
        </div>
        <div class="back-face face">
          <img src="imgs/Arquivos Úteis - Projeto 04 - Parrot Card Game/${listaComAsCartas[i]}.gif" data-test="face-up-image" alt="">
        </div>`
        }
    }
    cartasDoJogo = document.querySelectorAll(".card");
    embaralharCartas();
}

function embaralharCartas(){
    cartasDoJogo.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * quantiaDeCartas);
        card.style.order = ramdomPos;
    });
}

function virarCarta(clique){
    if (clique.querySelectorAll(".card .rotacaoFrente").length%2 !== 1){
    if (cliques !== clique || cartasViradas.length==0){
        const x = clique.querySelector(".front-face");
        x.classList.add("rotacaoFrente");
        const y = clique.querySelector(".back-face");
        y.classList.add("rotacaoTras");
        quantiaDeRodadas++
        compararCartas(clique);
        cliques = clique
    }
}
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
        desabilitarCartas()
        if(cartasViradas[1].innerHTML!==cartasViradas[3].innerHTML){
            setTimeout(desvirarCarta, 1000, clique);
        }
        if(cartasViradas[1].innerHTML==cartasViradas[3].innerHTML){
            cartasViradas=[];
            verVitoria();
        }
        setTimeout(habilitarCartas, 1001);
    }
}

function desabilitarCartas(){
    for (let i = 0;i<quantiaDeCartas;i++)
        cartasDoJogo[i].removeAttribute("onclick");
}

function habilitarCartas(){
    for (let i = 0;i<quantiaDeCartas;i++)
        cartasDoJogo[i].setAttribute("onclick", "virarCarta(this)");
}

function verVitoria(){
    quantiaDeCartas2 = document.querySelectorAll(".rotacaoTras");
    if(quantiaDeCartas2.length==quantiaDeCartas){
        
        setTimeout(alerta, 1000);
    }
}

function alerta(){
    alert(`Você ganhou em ${quantiaDeRodadas} jogadas! A duração do jogo foi de ${temporizador.innerHTML} segundos!`);
    clearInterval(pararTempo)
    let restart = confirm('Gostaria de reiniciar o jogo?')
    while (true){
        if (restart == true){
            location.reload()
            break
        }
        if (restart == false){
            const botao = document.querySelector("button")
            botao.classList.remove("escondido")
            break
        }
        else {
            alert('Escreva especificamente "sim" ou "não"')
            restart = confirm('Gostaria de reiniciar o jogo?')
        }
    }
    
}

function reiniciarJogo(){
    location.reload()
}


conferirQuantia();
