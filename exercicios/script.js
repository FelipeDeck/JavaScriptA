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

    let text1 = Text(document.getElementById("text1").value);

    document.getElementById("resultado3").innerText = text1.lenght;

}