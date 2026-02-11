const nomeDoHeroi = "Felipe";
let xpDoHeroi = 6758;
let patente = ''

if (xpDoHeroi <= 1000) {
    patente= "Ferro";
} else if (xpDoHeroi <= 2000) {
  patente = "Bronze";
} else if (xpDoHeroi <= 5000) {
  patente = "Prata";
} else if (xpDoHeroi <= 7000) {
  patente = "Ouro";
} else if (xpDoHeroi <= 8000) {
  patente = "Platina";
} else if (xpDoHeroi <= 9000) {
  patente = "Ascendente";
} else if (xpDoHeroi <= 10000) {
  patente = "Imortal";
} else {
  patente = "Radiante";
}
console.log("O herói se chama " + nomeDoHeroi + ", e tem " + xpDoHeroi + " de experiência e sua patente é: " + patente)
