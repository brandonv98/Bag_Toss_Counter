// Select team buttons
const btn = document.querySelector('#buttons');
const teamOneScoreHTML = document.querySelector('#teamOneScore');
const teamTwoScoreHTML = document.querySelector('#teamTwoScore');
// Select team to throw inner HTML.
const teamToThrowHTML = document.querySelector('#teamToThrow');

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
let bagsThrownTeamOne = 0;


// Disable opposing team buttons.
const disableButtons = (parentDOMButtons, toDisable) => {
	let childrenNodes = parentDOMButtons.children;
	for(i = 0; i < childrenNodes.length; i++) {
		if (childrenNodes[i].name === toDisable ) {
				childrenNodes[i].setAttribute('disabled', 'true');		
			} 
			else if (childrenNodes[i].name !== toDisable) {
					childrenNodes[i].removeAttribute('disabled');
			}
		}
	}

// Select all buttons on the page
btn.addEventListener('click', e => {
	const btn = e.target;
	roundTracker(roundCount);
	if (e.target.type === 'button') {
		if (btn.name === 'teamOne') {
			// Add number of bags thrown
			bagsThrownTeamTwo += 1;
			// Team currently throwing.
			teamToThrowHTML.innerHTML = `Team Two Throwing... Bag number ${bagsThrownTeamTwo}`;
				// Add points if team scored.
				(btn.value === '0' ? teamOneRoundPoints += 0 : console.log(teamOneRoundPoints, ' - ', teamTwoRoundPoints) );
				(btn.value === '1' ? teamOneRoundPoints += 1 : console.log('') );
				(btn.value === '3' ? teamOneRoundPoints += 3 : console.log('') );
				//Disable buttons
				disableButtons(btn.parentNode, 'teamOne');			
			} else if (btn.name === 'teamTwo') {
				// Add number of bags thrown
				bagsThrownTeamOne += 1;
				// Team currently throwing.
				teamToThrowHTML.innerHTML = `Team One Throwing... Bag number ${bagsThrownTeamOne}`;
					// Add points if team scored.
					(btn.value === '0' ? teamTwoRoundPoints += 0 : console.log(teamOneRoundPoints, ' - ', teamTwoRoundPoints) );
					(btn.value === '1' ? teamTwoRoundPoints += 1 : console.log('') );
					(btn.value === '3' ? teamTwoRoundPoints += 3 : console.log('') );
					// Disable buttons
					disableButtons(btn.parentNode, 'teamTwo');
			} else {
					console.log('Missed');
			}
			// Track rounds thrown
			
	}
});

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

// Render points to screen. //
const renderPoints = (delta, renderPoints) => {	
		// Render Points to team	
	renderPoints.innerHTML = delta;	
		// Clean the board
	teamTwoRoundPoints = 0;
	teamOneRoundPoints = 0;
}