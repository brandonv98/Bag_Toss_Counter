// Reloading warning -- all data will be lost!!!!
// window.onbeforeunload = function() {
	// return "Data will be lost if you leave or reload the page, are you sure?";
//  };
// Select team buttons
const btn = document.querySelector('#buttons');
const scoreBtn = document.querySelector('.scoreBtn');
const correctorBtn = document.querySelector('.corrector');
const teamOneScoreHTML = document.querySelector('#teamOneScore');
const teamTwoScoreHTML = document.querySelector('#teamTwoScore');
// Select team to throw inner HTML.
// const teamToThrowHTML = document.querySelector('#teamToThrow');
// Select arrow in h2 team titles
// const teamCurrentThrow = document.querySelectorAll('.team--section > h2 > span');


let shootingTeam = true;

let teamOne = 0;
let teamOneRoundPoints = 0;
let teamTwo = 0;
let teamTwoRoundPoints = 0;

let teamPointRound = 0;
let totalRoundsPlayed = 0;
let roundCount = 0;
// Set number of bags the team has thrown this round.
let bagsThrownTeamTwo = 0;
let bagsThrownTeamOne = 1;


// Disable opposing team buttons.
const disableButtons = (parentDOMButtons, toDisable) => {
	let childrenNodes = parentDOMButtons.children;
	console.log(childrenNodes, toDisable, '<----- Tracking Here!!!');
	for(i = 0; i < childrenNodes.length; i++) {
		if (childrenNodes[i].className === "scoreBtn") {
			let btns = childrenNodes[i].children;
			for (let b = 0; b < btns.length; b++) {
				// const btn = btns[b];
				// console.log(btn);
				if (btns[b].name === toDisable ) {
					btns[b].setAttribute('disabled', 'true');		
					// console.log(childrenNodes[i]);
				} 
				else if (btns[b].name !== toDisable) {
					btns[b].removeAttribute('disabled');
						// console.log(childrenNodes[i]);
				}
			}
		}
		
	}
}

// Select all buttons on the page
btn.addEventListener('click', e => {
	// roundTracker(roundCount);
	const btn = e.target;
	// console.log(btn.parentNode);
	const isScoreBtn = e.target.parentNode.className === "scoreBtn";
	// console.log(isScoreBtn, e.target.parentNode.className, 'HERE ------');
	
	if (isScoreBtn && e.target.type === 'button') {
		roundTracker(roundCount);
		if (btn.name === 'teamOne') {
			// Display shooting team.
			// teamCurrentThow[1].style.display = 'inline-block';
			// Add number of bags thrown
			bagsThrownTeamTwo += 1;
			// Team currently throwing.
			teamToThrowHTML.innerHTML = `${teamTwoNameVal} Throwing... Bag number ${bagsThrownTeamTwo}`;
				// Add points if team scored.
				(btn.value === '0' ? teamOneRoundPoints += 0 : console.log(teamOneRoundPoints, ' - ', teamTwoRoundPoints) );
				(btn.value === '1' ? teamOneRoundPoints += 1 : console.log('') );
				(btn.value === '3' ? teamOneRoundPoints += 3 : console.log('') );
				//Disable buttons
				disableButtons(btn.parentNode.parentNode, 'teamOne');			
			} else if (btn.name === 'teamTwo') {
				// Display shooting team.
				// teamCurrentThow[0].style.display = 'inline-block';
				// Add number of bags thrown
				bagsThrownTeamOne += 1;
				// Team currently throwing.
				teamToThrowHTML.innerHTML = `${teamOneNameVal} Throwing... Bag number ${bagsThrownTeamOne}`;
					// Add points if team scored.
					(btn.value === '0' ? teamTwoRoundPoints += 0 : console.log(teamOneRoundPoints, ' - ', teamTwoRoundPoints) );
					(btn.value === '1' ? teamTwoRoundPoints += 1 : console.log('') );
					(btn.value === '3' ? teamTwoRoundPoints += 3 : console.log('') );
					// Disable buttons
					disableButtons(btn.parentNode.parentNode, 'teamTwo');
			// Track Corrector counter
			} 
			// else if (e.target.type === 'button' && btn.name === 'teamOneCMin') {
				// console.log(e.target);
				//  teamTwoRoundPoints -= 1;
			// } 
			else {
					console.log('Missed');
			}
			// Track rounds thrown
			
	}
});

 // Track corrector val sep from normal scoring vals.
 btn.addEventListener('click', e => { 
	const btn = e.target;
	// console.log(btn.value === '-1');
	console.log(btn.parentNode.id);

	if (btn.parentNode.id === 'one') {
		console.log(btn);
		// console.log(btn.value === '-1');
		if (btn.value === '-1') {
			teamOneRoundPoints -= 1;
		} else if (btn.value === '1') {
			teamOneRoundPoints += 1;
		}
		calc(teamOneRoundPoints, teamOneScoreHTML);
	} else if (btn.parentNode.id === 'two') {
		console.log(btn);
		// console.log(btn.value === '-1');
		if (btn.value === '-1') {
			teamTwoRoundPoints -= 1;
		} else if (btn.value === '1') {
			teamTwoRoundPoints += 1;
		}
		calc(teamTwoRoundPoints, teamTwoScoreHTML);
	}
	// if (btn.value === '-1') {
			// teamOneRoundPoints -= 1;
	// } else if (btn.value === '1') {
			// teamOneRoundPoints += 1;
	// }
	
	// teamOneRoundPoints += -1;
	
	// calc();
});

// Calculate corrector function btn && render to page.


// Calculate end of round points.
const endRoundScore = () => {
	
	// Find team to point.
	if (teamOneRoundPoints >= teamTwoRoundPoints) {
			// Calculate Points
		const scoreSum = teamOneRoundPoints - teamTwoRoundPoints;
			// Add points to total score.
		teamOne += scoreSum;
			// Render points to page.
		renderPoints(teamOne, teamOneScoreHTML)
			
	} else if (teamTwoRoundPoints >= teamOneRoundPoints) {
			// Calculate Points
		const scoreSum = teamTwoRoundPoints - teamOneRoundPoints;
			// Add points to total score.
		teamTwo += scoreSum;
			//Render Points to page.
		console.log(teamOneRoundPoints, ' - ', teamTwoRoundPoints);
		

		renderPoints(teamTwo, teamTwoScoreHTML)
	}
}
// Track number of throws in one round. //
const roundTracker = (round) => {
	if (round === 7) {
		// Clear bags thrown counter to 0.
		bagsThrownTeamTwo = 0;
		bagsThrownTeamOne = 0;
		// Calc end score.
		endRoundScore();
		roundCount = 0;
		totalRoundsPlayed += 1;
	} else {
		console.log(roundCount, 'Round');
		return roundCount += 1;
	}
}

// Corrector counter 
const correctorCounter = (points, val) => {
	console.log(points + val);
	 points + val;
}

// Render points to screen. //
const renderPoints = (delta, renderPoints) => {	
		// Render Points to team	
	renderPoints.innerHTML = delta;	
		// Clean the board
	teamTwoRoundPoints = 0;
	teamOneRoundPoints = 0;
}

const calc = (val, team) => {
	// renderPoints(null, teamOneRoundPoints)
	console.log(val, team, '<------');
	team.innerHTML = val;
}

