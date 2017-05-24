let round = 0
let score = { playerOne: 0, playerTwo: 0 }

const squares = [...document.querySelectorAll('.square')]

function playerTurn() {
	return round % 2 === 0 ? 'O' : 'X'
}

function play() {
	round++
	this.innerHTML === '' ? this.innerHTML = playerTurn() : ''
	playerWin()
	if (round >= 9) {
		displayWinner(false)
	}
}

function stopTheGame() {
	squares.forEach((sq) => sq.innerHTML = '')
	round = 0
}

function displayScores(msg) {
	const scoreBloc = document.createElement('div')
	scoreBloc.classList.add('scores')

	const msgElm = scoreBloc.appendChild(document.createElement('p'))
	msgElm.textContent = msg

	const pOne = scoreBloc.appendChild(document.createElement('p'))
	pOne.textContent = "Joueur un : " + score.playerOne
	const pTwo = scoreBloc.appendChild(document.createElement('p'))
	pTwo.textContent = "Joueur deux : " + score.playerTwo

	const info = document.createElement('p')
	info.textContent = 'Pour continuer à jouer cliquez sur le fond noir'
	scoreBloc.appendChild(info)

	scoreBloc.addEventListener('click', function () {
		document.body.removeChild(scoreBloc)
		stopTheGame()
	})

	document.body.appendChild(scoreBloc)
}

function displayWinner(square) {
	if (square === 'X') {
		score.playerOne++
		displayScores('Le joueur un gagne la partie')
	} else if (square === 'O') {
		score.playerTwo++
		displayScores('Le joueur deux gagne la partie')
	} else {
		displayScores('Match null, aucun joueur ne gagne la partie')
	}
}

function playerWin() {
	// first line
	if (squares[0].innerHTML !== '' &&
			squares[0].innerHTML === squares[1].innerHTML &&
			squares[1].innerHTML === squares[2].innerHTML
	) {
		displayWinner(squares[0].innerHTML)
	}
	// second line
	else if (squares[3].innerHTML !== '' &&
			squares[3].innerHTML === squares[4].innerHTML &&
			squares[4].innerHTML === squares[5].innerHTML
	) {
		displayWinner(squares[3].innerHTML)
	}
	// third line
	else if (squares[6].innerHTML !== '' &&
			squares[6].innerHTML === squares[7].innerHTML &&
			squares[7].innerHTML === squares[8].innerHTML
	) {
		displayWinner(squares[6].innerHTML)
	}
	// first colon
	else if (squares[0].innerHTML !== '' &&
			squares[0].innerHTML === squares[3].innerHTML &&
			squares[3].innerHTML === squares[6].innerHTML
	) {
		displayWinner(squares[0].innerHTML)
	}
	// second colon
	else if (squares[1].innerHTML !== '' &&
			squares[1].innerHTML === squares[4].innerHTML &&
			squares[4].innerHTML === squares[7].innerHTML
	) {
		displayWinner(squares[1].innerHTML)
	}
	// third colon
	else if (squares[2].innerHTML !== '' &&
			squares[2].innerHTML === squares[5].innerHTML &&
			squares[5].innerHTML === squares[8].innerHTML
	) {
		displayWinner(squares[2].innerHTML)
	}
	// first diagonal
	else if (squares[0].innerHTML !== '' &&
			squares[0].innerHTML === squares[4].innerHTML &&
			squares[4].innerHTML === squares[8].innerHTML
	) {
		displayWinner(squares[0].innerHTML)
	}
	// second diagonal
	else if (squares[2].innerHTML !== '' &&
			squares[2].innerHTML === squares[4].innerHTML &&
			squares[4].innerHTML === squares[6].innerHTML
	) {
		displayWinner(squares[2].innerHTML)
	} else {
		return false
	}
}

squares.forEach((sq) => sq.addEventListener("mousedown", play))