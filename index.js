let currentPlayer = "0";
let numberOfPlayers = 2;
let won = true;

//------------//
//document.getElementById("player").innerText = "Kraken"
//------------//
//function place(box) {
	//if (box.innerText != "") return;
	//box.innerText = currentPlayer;
		//if (currentPlayer == "0") {
			//currentPlayer = "X";
		//}
		//else {
			//currentPlayer = "0";
		//}
//}

function place(box) {
	if (box.innerText != "") return;
	box.innerText = currentPlayer;
	currentPlayer == "0" ? currentPlayer = "X" : currentPlayer = "0";
}