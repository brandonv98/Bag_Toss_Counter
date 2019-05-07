const buttons = document.querySelector('.buttons');
const teamFormBox = document.querySelector('#teamForm');
const submit = document.querySelector('.formBtnSubmit');
const teamOneInput = document.querySelector('#teamOne');
const teamTwoInput = document.querySelector('#teamTwo');
// Team names
let teamOneNameVal;
let teamTwoNameVal;
// Team color values
const teamOneColorVal;
const teamTwoColorVal;
// Select scoreBtn node. 
const teamOneScoreBtn = document.querySelectorAll('#teamOneScoreBtn');
const teamTwoScoreBtn = document.querySelector('#teamTwoScoreBtn');

// Team name HTML selector
const teamOneName = document.querySelector('#teamOneName');
const teamTwoName = document.querySelector('#teamTwoName');

const teamToThrowHTML = document.querySelector('#teamToThrow');

const nodeConfig = (f) => { // Traverse the DOM to select required nodes. 
   const teamOneButtons = document.querySelectorAll('.scoreBtn .btnTeamOne');
   const teamTwoButtons = document.querySelectorAll('.scoreBtn .btnTeamTwo');
   const exportNodes = {
      teamOneButton: teamOneButtons,
      teamTwoButton: teamTwoButtons,
   };
   return exportNodes;
};
const nodes = nodeConfig(); // Save our config nodes & methods.

// Team name form handling.
submit.addEventListener('click', (e) => {
   e.preventDefault();
   let value = e;
   // debugger;
   if (teamOneInput.value.length > 1 && teamTwoInput.value.length > 1) {
      // Assign name values
      teamOneNameVal = teamOneInput.value;   
      teamTwoNameVal = teamTwoInput.value;

      teamOneName.innerHTML = teamOneNameVal;
      teamTwoName.innerHTML = teamTwoNameVal;

      // Assign color values
      teamOneColorVal = teamOneColor.value;   
      teamTwoColorVal = teamTwoColor.value;
      
      // Add name values to HTML.
      teamToThrowHTML.innerHTML = teamOneNameVal + ' Starts the game...';

      // Append color values to node.
      teamBtnColorChange(nodes.teamOneButton, teamOneColorVal);
      teamBtnColorChange(nodes.teamTwoButton, teamTwoColorVal);

      // teamFormBox.setAttribute('style', 'display: none');

      // Hide form.
      teamFormBox.setAttribute('style', 'display: none');
      buttons.removeAttribute('style', 'display: none');
      // debugger; // For debugging // 
   } else {
      console.log("Error - Char length needs to be greater than 1");
   }
   
   
   // teamOneNameVal += e;
   
   console.log(value, teamOneInput.value, teamTwoNameVal);
});

// Change btn color nodes
const teamBtnColorChange = (team, color) => {
   // team.setAttribute('style', `background-color: ${color}`);
   // console.log(team.nextElementSibling);
   for(i = 0; team.length > i; i++) {
      team[i].setAttribute('style', `background-color: ${color}`);
      console.log(team[i]);
   }

}

