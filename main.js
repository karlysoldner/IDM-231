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


 } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    AstroSign = "Aqu";
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    AstroSign = "Pis";
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    AstroSign = "Ari";
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    AstroSign = "Tau";
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    AstroSign = "Gem";
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    AstroSign = "Can";
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    AstroSign = "Leo";
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    AstroSign = "Vir";
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    AstroSign = "Lib";
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    AstroSign = "Sco";
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    AstroSign = "Sag";


	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML += 'Hello '+ firstName + ' you were born on a ' + WeekDays[whichDayNdx] + ' your zodiac sign is ' + AstroSign;
	alert(outputArea);
	

	//return false;
}