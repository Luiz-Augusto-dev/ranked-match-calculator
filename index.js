let result = calculatingMatches(198, 60)

function calculatingMatches(victories, defeats) {
    let calculation = victories - defeats
    return calculation
}

if (result <= 10) {
    console.log("O Herói tem de saldo de " + result + " vitórias está no nível de Ferro ⚙")
} else if (result > 10 && result <= 20) {
    console.log("O Herói tem de saldo de " + result + " vitórias está no nível de Bronze 🥉")
} else if (result > 20 && result <= 50) {
    console.log("O Herói tem de saldo de " + result + " vitórias está no nível de Prata 🥈")
} else if (result > 50 && result <= 80) {
    console.log("O Herói tem de saldo de " + result + " vitórias está no nível de Ouro 🥇")
} else if (result > 80 && result <= 90) {
    console.log("O Herói tem de saldo de " + result + " vitórias está no nível de Diamante 💎")
} else if (result > 90 && result <= 100) {
    console.log("O Herói tem de saldo de " + result + " vitórias está no nível de Lendário 👨‍🏫")
} else {
    console.log("O Herói tem de saldo de " + result + " vitórias está no nível de Imortal 🧛‍♂️")
}