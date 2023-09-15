// Variáveis
let nomeHeroi = "Pantera negra"; // Substitua pelo nome do herói
let heroi = 10000
let nivelHeroi

console.log ("O nome do herói é " + nomeHeroi)
console.log ("A quantidade de XP desse herói é de " + heroi +"\n")
console.log ("XP menor do que 1.000 = Ferro")
console.log("XP entre 1.001 e 2.000 = Bronze")
console.log("XP entre 2.001 e 5.000 = Prata")
console.log("XP entre 6.001 e 7.000 = Ouro")
console.log("XP entre 7.001 e 8.000 = Platina")
console.log("XP entre 8.001 e 9.000 = Ascendente")
console.log("XP entre 9.001 e 10.000= Imortal")
console.log("XP maior ou igual a 10.001 = Radiante\n")


if (heroi < 1000) {
  nivelHeroi = "Ferro";
} else if (heroi >= 1001 && heroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (heroi >= 2001 && heroi<= 5000) {
  nivelHeroi = "Prata";
} else if (heroi >= 6001 && heroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (heroi >= 7001 && heroi <= 8000) {
  nivelHeroi = "Platina";
} else if (heroi >= 8001 && heroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (heroi>= 9001 && heroi <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}

// Saída
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
