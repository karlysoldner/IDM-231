var firstName;
var birthDayObj;
var WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function calZodiac(){
	firstName = document.getElementById('fname').value;
	birthDayObj = new Date(document.getElementById('bday').value);

	var whichDayNdx = birthDayObj.getDay();
	console.log('whichDayNdx is ' + whichDayNdx);

	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML = 'Hello ' + firstName + ' you were born on a ' + WeekDays[whichDayNdx];

	var whichMonth = birthDayObj.getMonth();
	console.log('whichMonth is ' + whichMonth);

	var whichDayOfMonth = birthDayObj.getDate();
	console.log('whichDayOfMonth is ' + whichDayOfMonth);

	whichMonth ++;
	whichDayOfMonth ++;

	var AstroSign;

	if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
		AstroSign = "Cap";
	}
	else if ((whichDayOfMonth == 1 && day >= 21) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  } else if((whichDayOfMonth == 2 && day >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if((whichDayOfMonth == 3 && day >= 21) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
    AstroSign = "Ari";
  } else if((whichDayOfMonth == 4 && day >= 21) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if((whichDayOfMonth == 5 && day >= 21) || (whichMonth == 6 && whichDayOfMonth <= 20)) {
    AstroSign = "Gem";
  } else if((whichDayOfMonth == 6 && day >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if((whichDayOfMonth == 7 && day >= 23) || (whichMonth == 8 && whichDayOfMonth <= 23)) {
    AstroSign = "Leo";
  } else if((whichDayOfMonth == 8 && day >= 24) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
    AstroSign = "Vir";
  } else if((whichDayOfMonth == 9 && day >= 24) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if((whichDayOfMonth == 10 && day >= 24) || (whichMonth == 11 && whichDayOfMonth <= 22)) {
    AstroSign = "Sco";
  } else if((whichDayOfMonth == 11 && day >= 23) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
}
	else
	{
		AstroSign = "Woops! Error";
	}


	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML += 'Hello '+ firstName + ' you were born on a ' + WeekDays[whichDayNdx] + ' your zodiac sign is ' + AstroSign;
	alert(AstroSign);
	

	return false;
}