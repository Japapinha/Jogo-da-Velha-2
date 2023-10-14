let ElCanvas = document.getElementById("VelhaMaior");
let VelhaMaiorCtx = ElCanvas.getContext("2d");
VelhaMaiorCtx.strokeStyle = "#000000"

let TamanhoBorda = 400;
let Bloco = 3;
let TamanhoBloco = TamanhoBorda / Bloco;

function Desenho() {
    VelhaMaiorCtx.beginPath(); 
    VelhaMaiorCtx.lineWidth = 5; 

    for (let i = 1; i < Bloco; i++) {
        VelhaMaiorCtx.moveTo(TamanhoBloco * i, 0);
        VelhaMaiorCtx.lineTo(TamanhoBloco * i, TamanhoBorda); 

        VelhaMaiorCtx.moveTo(0, TamanhoBloco * i); 
        VelhaMaiorCtx.lineTo(TamanhoBorda, TamanhoBloco * i); 
    }
    VelhaMaiorCtx.stroke();
}

Desenho();


// Crie 9 jogos da velha menores dentro do jogo da velha maior

let TamanhoBordaMenor = 100;
let TamanhoBlocoMenor = TamanhoBordaMenor / Bloco;


// Obtém a largura e a altura da DivFolha
let larguraDivFolha = document.getElementById("DivFolha").offsetWidth;
let alturaDivFolha = document.getElementById("DivFolha").offsetHeight;

for (let row = 0; row < Bloco; row++) {
    for (let col = 0; col < Bloco; col++) {
        let ElCanvasMenor = document.createElement("canvas");

        ElCanvasMenor.width = TamanhoBloco;
        ElCanvasMenor.height = TamanhoBloco;
        ElCanvasMenor.style.position = "absolute";

        // Calcula a posição central com base na largura e altura da DivFolha
        let left = ((larguraDivFolha + 95) - TamanhoBorda) / 2 + (col * TamanhoBloco);
        let top = ((alturaDivFolha + 40) - TamanhoBorda) / 2 + (row * TamanhoBloco);

        ElCanvasMenor.style.left = left + "px";
        ElCanvasMenor.style.top = top + "px";

        // Defina IDs únicos para os elementos do jogo da velha menor
        ElCanvasMenor.id = "VelhaMenor" + row + col;

        let VelhaMenorCtx = ElCanvasMenor.getContext("2d");
        VelhaMenorCtx.strokeStyle = "#696969";

        VelhaMenorCtx.beginPath();
        VelhaMenorCtx.lineWidth = 5;
        for (let i = 1; i < Bloco; i++) {
            VelhaMenorCtx.moveTo(TamanhoBlocoMenor * i, 0);
            VelhaMenorCtx.lineTo(TamanhoBlocoMenor * i, TamanhoBordaMenor);

            VelhaMenorCtx.moveTo(0, TamanhoBlocoMenor * i);
            VelhaMenorCtx.lineTo(TamanhoBordaMenor, TamanhoBlocoMenor * i);
        }
        VelhaMenorCtx.stroke();

        // Crie elementos de grade clicáveis dentro de cada espaço do jogo da velha menor
        for (let rowGrade = 0; rowGrade < Bloco; rowGrade++) {
            for (let colGrade = 0; colGrade < Bloco; colGrade++) {
                let divGrade = document.createElement("div");

                divGrade.style.width = TamanhoBlocoMenor / Bloco + "px";
                divGrade.style.height = TamanhoBlocoMenor / Bloco + "px";
                divGrade.style.position = "absolute";

                // Calcula a posição dentro do espaço do jogo da velha menor
                let leftGrade = colGrade * (TamanhoBlocoMenor / Bloco);
                let topGrade = rowGrade * (TamanhoBlocoMenor / Bloco);

                divGrade.style.left = leftGrade + "px";
                divGrade.style.top = topGrade + "px";


                ElCanvasMenor.appendChild(divGrade);
            }
        }

        document.getElementById("DivFolha").appendChild(ElCanvasMenor);
    }
}



