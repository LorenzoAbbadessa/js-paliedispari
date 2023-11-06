
//creo numero e decido pari o dispari 
let PoD = prompt("Pari o Dispari?");
let numeroTuo = parseInt(prompt("scegli un numero da 1 a 5"));
const decisione = ["Pari", "Dispari"]

console.log(decisione[1]);

//pc crea numero e lo somma al mio 
let numeroPC = parseInt(Math.floor((Math.random() * 5) + 1));
let addizione = numeroPC + numeroTuo;

console.log (parseInt(addizione))

/*
//se scelgo pari 
function pari(){
    return Math.floor(number / 2) * 2 === number;
    document.getElementById("parola") = ("swag")

}




//se scelgo dispari
function dispari(){
    return Math.floor(number / 2) * 2 !== number;
    document.getElementById("parola") = ("swag")
}


/*function isEven (addizione) {
    return Math.floor(number / 2) * 2 === number;
    }
      
    function isOdd (number) {
    return Math.floor(number / 2) * 2 !== number;
}*/




