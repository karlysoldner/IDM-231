var firstName;
var birthDayObj;
var WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function calZodiac(){
	firstName = document.getElementById('fname').value;
	lastName = document.getElementById('lname').value;
	birthDayObj = new Date(document.getElementById('bday').value);

	var whichDayNdx = birthDayObj.getDay();
	console.log('whichDayNdx is ' + whichDayNdx);

	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML = 'Hello ' + firstName + ' you were born on a ' + WeekDays[whichDayNdx];

	var whichMonth = birthDayObj.getMonth();
	console.log('whichMonth is ' + whichMonth);

	var whichDayOfMonth = birthDayObj.getDate();
	console.log('whichDayOfMonth is ' + whichDayOfMonth);

	var age = (Date.now() - birthDayObj) / 1000 / 60 / 60 / 24 / 365;
		age= Math.floor(age)
	console.log('age is' + age);

	whichMonth ++;
	whichDayOfMonth ++;

	var AstroSign;

	if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
		AstroSign = "Capricorn and your breakfast personality is oatmeal. You're ambitious and interesting but a little too responsible. Relax a little. You're never going to accomplish your goals or be a success so stop being such a try-hard and start experimenting with internet dating or party drugs or something. ";
	}
	else if ((whichMonth == 1 && whichDayOfMonth >= 21) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aquarius and your breakfast personality is pancakes. You're an easy-going person, but because of this some people will find you too simple. Forget them and keep doing you.";
    document.getElementById(pancakes).style.display="block";
  } else if((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pisces and your breakfast personality is a donut. You are crazy and reckless and always a good time. You understand that you only live once and are making the most of it. Try not to be too reckless or that one life you get to live might be a short one.";
  } else if((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
    AstroSign = "Aries and your breakfast personality is bacon. Bacon is a a powerful flavor made from birthing, raising, slaughtering, and processing an animal. And the hard work comes through because it's tasty af. You understand the value of hard work and aren't afraid of your own ambition.";
  } else if((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Taurus and your breakfast personality is scrambled eggs. You might look light and fluffy, but you are a wise and likeable.";
  } else if((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 20)) {
    AstroSign = "Gemini and your breakfast personality is cereal. You know that song by The Kinks called A Well Respected Man? That song is about you, but not in a bad way.";
  } else if((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Cancer and your breakfast personality is french toast. You are a complex and interesting person, without being overbearing. You're fun and sassy and know how to treat yo self.";
  } else if((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 23)) {
    AstroSign = "Leo and your breakfast personality is cold leftover pizza. Let's face it. You're a mess. You probably sleep way too much or not enough. And you probably are behind on a bill or two. You need to break the cycle. Pay a bill, clean your bathroom, call your mom. Go on!";
  } else if((whichMonth == 8 && whichDayOfMonth >= 24) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
    AstroSign = "Virgo and your breakfast personality is avocado toast. You are a classy and cool person. Your insta is probably strong af and I wouldn't be shocked if there was a brunch pic or two in there. Remember to pick up a book instead of a blog now and then.";
  } else if((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Libra and your breakfast personality is blueberry waffles. You are balanced. You understand when to have fun and when to work hard. When to go running and when to pizza binge. You're adept in social situations, yet are comfortable alone. You get it. I wish I could be like you.";
  } else if((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 22)) {
    AstroSign = "Scorpio and your breakfast personality is coffee and a cigarette. OK. We need to talk. Yes, you are cool. Yes your art/blog/zine/photography/whatever project you're really focusing on is good. But someday you're gonna have to get a job that's not bartending or selling weed so you need to do yourself a favor and start thinking more long-term than your next chemical breakfast.";
  } else if((whichMonth == 11 && whichDayOfMonth >= 23) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sagittarius and your breakfast personality is an everything bagel. Lame people call you quirky, cool people call you unique, and everyone knows your are interesting. You struggle to make close friends because you don't seem to connect with people on a deep level, even after spending lots of time with them. Go out of your way to really try and like a few people. It's hard, I know, but it's worth it.";
	}
	else
	{
		AstroSign = "Error";
	}

 
	var outputArea = document.getElementById('displayMsg');
	outputArea.innerHTML = 'Hello '+ firstName + ' ' + lastName + '!' + ' You are ' + age + ' years old and' +' you were born on a ' + WeekDays[whichDayNdx] + '.' + ' Your zodiac sign is ' + AstroSign;
	

	
	return false;
}