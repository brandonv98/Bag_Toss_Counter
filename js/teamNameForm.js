const buttons = document.querySelector('.buttons');
const teamFormBox = document.querySelector('#teamForm');
const submit = document.querySelector('.formBtnSubmit');
const teamOneInput = document.querySelector('#teamOne');
const teamTwoInput = document.querySelector('#teamTwo');
let teamOneNameVal;
let teamTwoNameVal;

let teamOneName = document.querySelector('#teamOneName');
let teamTwoName = document.querySelector('#teamTwoName');

const teamToThrowHTML = document.querySelector('#teamToThrow');

// console.log(teamOneName);

 

submit.addEventListener('click', (e) => {
   e.preventDefault();
   let value = e;
   if (teamOneInput.value.length > 1 && teamTwoInput.value.length > 1) {
      teamOneNameVal = teamOneInput.value;   
      teamTwoNameVal = teamTwoInput.value;

      teamOneName.innerHTML = teamOneNameVal;
      teamTwoName.innerHTML = teamTwoNameVal;

      teamToThrowHTML.innerHTML = teamOneNameVal + ' Starts the game...';

      teamFormBox.setAttribute('style', 'display: none');
      buttons.removeAttribute('style', 'display: none');
   } else {
      console.log("Error - Char length needs to be greater than 1");
   }
   
   
   // teamOneNameVal += e;
   
   console.log(value, teamOneInput.value, teamTwoNameVal);
});

// // Team Form
// $(function() {
  
// 	// contact form animations
// 	$('#contact').click(function() {
// 	  $('#contactForm').fadeToggle();
// 	})
// 	$(document).mouseup(function (e) {
// 	  var container = $("#contactForm");
 
// 	  if (!container.is(e.target) // if the target of the click isn't the container...
// 			&& container.has(e.target).length === 0) // ... nor a descendant of the container
// 	  {
// 			container.fadeOut();
// 	  }
// 	});
	
//  });