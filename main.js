const cylinder_length = 6
const bullet_position = Math.floor(Math.random()*cylinder_length)

let player1 = prompt("ingrese nombre de player1")
let player2 = prompt("ingrese nombre de player2")
if (player1 == ""){
    player1 = "jugador 1"
} 
if (player2 == ""){
    player2 = "jugador 2"
}

console.log("Bienvenido " + player1 + " es hora de jugar")
console.log("Bienvenido " + player2 + " es hora de jugar")

let dead__player = null
let index = 0

while (dead__player == null) {
    play();
}

function play() {
    let current_player = ""
    if(index%2 == 0) {
        current_player += player1
    } else {
        current_player += player2
    } 
    alert(current_player + " Es tu turno, presiona aceptar para gatillar")
    if (bullet_position == index) {
        dead__player = "Murio el jugador: " + current_player
    }
    index ++
}
console.log(dead__player);
document.getElementById("message").innerHTML= dead__player





