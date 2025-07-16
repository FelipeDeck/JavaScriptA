function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    // console.log("Resultado: " + (n1 + n2));
    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

function comparar(){
    let n1 = Number(document.getElementById("num3").value);

    if (n1 <= 17){

        document.getElementById("resultado2").innerText = "Menor de Idade";

    }
    else {
        document.getElementById("resultado2").innerText = "Maior de Idade";
    }
}

function contador(){
    let texto = document.getElementById("text1").value;
    let numeroChar = texto.length;
    document.getElementById("resultado3").innerText = "Caracteres: " + numeroChar;
}

function verificarParidade() {
    let numero = Number(document.getElementById("numeroParidade").value);
    document.getElementById("res4").innerText = (numero % 2 == 0 ? "Par" : "Ímpar");
}


function converterCaixaAlta() {
    let texto = document.getElementById("textoParaUpper").value;
    document.getElementById("res5").innerText = texto.toUpperCase();
}

function verificarMaior() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    if (n1 > n2) {
        document.getElementById("res6").innerText = "Maior: " + n1;
    } else if (n1 == n2) {
        document.getElementById("res6").innerText = "São iguais";
    } else {
        document.getElementById("res6").innerText = "O maior número é o " + n2;
    }
}

function tabuada() {
    let numero = Number(document.getElementById("numTabuada").value);
    var tabuada;

        for (let index = 1; index <= 10; index++) {
            if(index == 1){
                tabuada = numero * index + "\n";
            }
            else{
                tabuada += numero * index + "\n";
            }
    }
    document.getElementById("res7").innerText = tabuada;
}

function contarAte10() {
    let index = 0;
    setInterval(function () {
        document.getElementById("res8").innerText = index;
        if (index < 10) {
            index++;
        } else {
            document.getElementById("res8").innerText = "";
        }
    }, 1000);
}

function tirarMedia() {
    let n1 = Number(document.getElementById("numMedia1").value);
    let n2 = Number(document.getElementById("numMedia2").value);
    let n3 = Number(document.getElementById("numMedia3").value);

    media = (n1 + n2 + n3) / 3;
    document.getElementById("res9").innerText = media >= 6 ? "Aprovado" : "Reprovado";
}

function verDiaSemana() {
    const diasSemana = [
        "None",
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];

    let numero = document.getElementById("numDia").value;

    let dia;
    if (numero >= 1 && numero <= diasSemana.length) {
        dia = diasSemana[numero];
    } else {
        dia = "Dia inválido";
    }
    document.getElementById("res11").innerText = dia;
}

function senha() {
    let senha = document.getElementById("senha").value;
    document.getElementById("res12").innerText = senha == "1234" ? "Acesso permitido!" : "Senha incorreta";
}

function contarRegressivo() {
    let index = 10;
    setInterval(function () {
        document.getElementById("res13").innerText = index;
        if (index > 1) {
            index--;
        } else {
            document.getElementById("res13").innerText = "";
        }
    }, 1000);
}