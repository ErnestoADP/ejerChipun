var inicioJuego = prompt('ingresa las veces que quieras jugar', 0);
var piedra = 0;
var papel = 1;
var tijera = 2;
var win = 3;
var lose = 4;
var empate = 5;

for (var i = 0; i < inicioJuego; i++) {
    var jugada = parseInt(prompt('Elije tu jugada (PIEDRA = 0, PAPEL = 1 y TIJERA = 2)'));
    makina(jugada);
}

function makina(jugada) {

    const jugadaMakina = Math.floor(Math.random() * 3);
    const resultado = versus(jugada, jugadaMakina);

    switch (resultado) {
        case 3:
            alert("Maquina: " + jugadaMakina + " | " + " tu: " + jugada + " | " + ". Ganaste");
            break;
        case 5:
            alert("Maquina: " + jugadaMakina + " | " + " tu: " + jugada + " | " + ".Empate")
            break;
        case 4:
            alert("Maquina: " + jugadaMakina + " | " + " tu: " + jugada + " | " + ".Perdiste")
            break;
    }
}


function versus(jugada, jugadaMakina) {

    if (jugada === 0 && jugadaMakina === 0) { return empate; }
    if (jugada === 1 && jugadaMakina === 1) { return empate; }
    if (jugada === 2 && jugadaMakina === 2) { return empate; }

    if (jugada === 0 && jugadaMakina === 2) { return win; }
    if (jugada === 1 && jugadaMakina === 0) { return win; }
    if (jugada === 2 && jugadaMakina === 1) { return win; }

    if (jugada === 0 && jugadaMakina === 1) { return lose; }
    if (jugada === 1 && jugadaMakina === 2) { return lose; }
    if (jugada === 2 && jugadaMakina === 0) { return lose; }
}