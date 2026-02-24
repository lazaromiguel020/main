function calc(){
let peso= document.getElementById("pes").value ;
let altura= document.getElementById("alt").value ;
let IMC= peso / (altura * altura);
document.getElementById('resultado').textContent="IMC=" + IMC;
if ( IMC <=18.5){
   document.getElementById("frase").innerHTML +=  "<p>Magreza leve a grave</p>";
}
if ( IMC===18.5, IMC<25){
   document.getElementById("frase").innerHTML +=  "<p>Saudavel</p>";
}
if ( IMC >=25){
   document.getElementById("frase").innerHTML +=  "<p>Sobrepeso a obesidade de grau 3</p>";
}
}
