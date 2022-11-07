let fila = 80;
let coluna = 80;
let lado = 15;
let foto = [];
let reproducao = false

document.addEventListener("keydown",(e)=>{
    e.preventDefault()
    switch (e.keyCode) {
        case 13:
            outroEstado()
            break;
        case 32:
            interReproducao()
        case 8:
            limpar()
        default:
            break;
    }
})

setInterval(() => {
    if(reproducao){
        outroEstado()
    }
   
}, 200);
function interReproducao(){
     reproducao = !reproducao
     if(reproducao){
        documento.body.style.background = "white"
     }else{
        document.body.style.background = "#f0f0ff"
     }
}
criarTabuleiro();
function criarTabuleiro(){
    let html = "<table cellpadding=0 cellspacing=0 id='tab'>";
     for(let y = 0;y < fila; y++){
        html += "<tr>";
         for(let x=0;x < coluna; x++){
            html +=`<td id="celula-${x + '-' + y}" onmouseup="mudarEstado(${x},${y});">`;
            html += "</td>";
         }
        html += "</tr>";

     }
    html += "</table>";
    let conteudo = document.getElementById("tabuleiro");
    conteudo.innerHTML = html;
    let tab = document.getElementById("tab");
    tab.style.width = lado * coluna + "px";
    tab.style.height = lado * fila + "px";
}

function mudarEstado(x,y){
    let celula = document.getElementById(`celula-${x + '-' + y}`)
    if(celula.style.background != "black"){
        celula.style.background = "black";
    }else{
        celula.style.background = "";
    }
}
function tirarFoto(){
    foto = []
    for(let x = 0; x < coluna; x++){
        foto.push([])
        for(let y = 0; y < coluna; y++){
            let celula = document.getElementById(`celula-${x+ "-" + y}`)
            foto[x][y] = celula.style.background == "black"
        }
    }
}

function contadorViva(x,y){
    let viva = 0
    for(let i = -1;i <= 1;i++){
        for(let j = -1;j <= 1; j++){
            if(i == 0 && j == 0){
                console.log("ue")
              continue;
            }
            try{
                if(foto[x+i][y+j]){
                    console.log("ue")
                    viva++
                }
            }catch(e){}
            if(viva > 3){
                return viva;
            }
        }
    }
    return viva
}

function outroEstado(){
   tirarFoto()
   for(let x = 0;x < coluna; x++){
        for(let y = 0;y < coluna;y++){
            let viva = contadorViva(Number(x),Number(y))
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            if(foto[x][y]){
                if(viva < 2||viva > 3){
                    celula.style.background = ""
                }else{
                    if(viva == 3)
                        celula.style.background = "black"
                }
            }
        }
   }
}
function limpar() {
    for (let x = 0; x < coluna; x++) {
        for (let y = 0; y < fila; y++) {
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            celula.style.background = ""
        }
    }
    if (reproducao) {
        interReproducao()
    }
}
