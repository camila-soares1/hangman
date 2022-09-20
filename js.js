const palavras = ["AJAX", "CSS", "DOM", "HTML", "JAVASCRIPT", "JQUERY", "JSON", "PHP", "PROGRAMACAO", "TECNOLOGIAS", "WEB"];
const random = Math.floor(Math.random() * palavras.length);
var palavra = palavras[random];
var tentativas = 0;
var resposta = "";

function jogar(palavra){

    console.log(palavra);
    console.log(palavra.length);
    for(var i = 0; i < palavra.length; i++) {
        var espaco = document.createElement("DIV");
        var traco = document.createTextNode("__");
        espaco.appendChild(traco);
        espaco.setAttribute("class", "certo");
        var resposta = document.getElementById("resposta");
        resposta.appendChild(espaco);
    }

}

function checarLetra(letra) {
    console.log(palavra);
    
    var acerto = false;
    for(var j = 0; j < palavra.length; j ++) {
        if (letra == palavra.charAt(j)) {
            var obj = document.getElementsByClassName("certo");
            obj[j].innerHTML = letra;
            acerto = true;
             
        }
    }
    if(acerto == false) {
        tentativas++;
    }

    var letras = document.getElementsByClassName("letra");
    

    for(var i = 0; i < letras.length; i ++) {
        if(letra == letras[i].innerHTML) {
                
                letras[i].removeEventListener("click", funcaoAnonima, true);
                if(acerto) {
                    letras[i].style.color="blue";
                } else {
                    letras[i].style.color="red";
                }
        }
    }  

    var ganhou = true;

    
        console.log(palavra.charAt(0));
        
        var obj_final = document.getElementsByClassName("certo");
        for(var k = 0; k < palavra.length; k++) {
            if(palavra.charAt(k) != obj_final[k].innerHTML) {
                console.log(palavra.charAt(k));
                console.log(obj_final[k].innerHTML);

                ganhou = false;
            }

        }
    


    
    if(ganhou) {

        window.confirm("Ganhou");
        location.reload();
    }
    
    console.log("tentativa " + tentativas);
    if (tentativas == 7) {
        window.confirm("Perdeu");
        location.reload();
    }
}


var funcaoAnonima = function() {checarLetra(this.innerHTML);};
function configurarBotoes() {
    var letras = document.getElementsByClassName("letra");
    for(var i = 0; i < letras.length; i ++) {
        letras[i].addEventListener("click", funcaoAnonima, true);
    }     
}  

function recomecarJogo() {

    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    tentativas = 0; 
    var apagarDivs = document.getElementById("resposta").childElementCount;
    var obj = document.getElementById("resposta");
    for(var i = 0; i < apagarDivs; i++) {
        obj.removeChild(obj.lastChild);
    }
    jogar(palavra);
    configurarBotoes();
    
}

configurarBotoes();
jogar(palavra);


