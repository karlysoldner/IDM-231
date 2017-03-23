var firstName;
var birthDayObj;
var WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function calZodiac() {
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
    age = Math.floor(age)
    console.log('age is' + age);

    whichMonth++;
    whichDayOfMonth++;

    var AstroSign;

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Capricorn and your breakfast personality is oatmeal. You're ambitious and interesting but a little too responsible. Relax a little. You're never going to accomplish your goals or be a success so stop being such a try-hard and start experimenting with internet dating or party drugs or something.";
        document.getElementById("results").innerHTML = "<img src=\"oatmeal.png\" style=\"width:200px\" alt=\"pancakes\">";

    } else if ((whichMonth == 1 && whichDayOfMonth >= 21) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aquarius and your breakfast personality is pancakes. You're an easy-going person, but because of this some people will find you too simple. Forget them and keep doing you.";
        // document.getElementById(pancakes).innerHTML = style.display="block";
        document.getElementById("results").innerHTML = "<img class=\"pancake\" src=\"pancakes.png\" style=\"width:200px\" alt=\"pancakes\">";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pisces and your breakfast personality is a donut. You are crazy and reckless and always a good time. You understand that you only live once and are making the most of it. Try not to be too reckless or that one life you get to live might be a short one.";
        document.getElementById("results").innerHTML = "<img src=\"donut.png\" style=\"width:200px\" alt=\"donut\">";

    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
        AstroSign = "Aries and your breakfast personality is bacon. Bacon is a a powerful flavor made from birthing, raising, slaughtering, and processing an animal. And the hard work comes through because it's tasty af. You understand the value of hard work and aren't afraid of your own ambition. Sort of like makin' bacon.";
        document.getElementById("results").style.display = "block";

    } else if ((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Taurus and your breakfast personality is scrambled eggs. You might look light and fluffy, but you are a wise and likeable. You have many varied interests but you have a good head on your shoulders and are capable of much.";
        document.getElementById("results").innerHTML = "<img src=\"scrambledeggs.png\" style=\"width:200px\" alt=\"eggs\">";

    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 20)) {
        AstroSign = "Gemini and your breakfast personality is cereal. You know that song by The Kinks called A Well Respected Man? That song is about you, but not in a bad way.";
        document.getElementById("results").innerHTML = "<img src=\"cereal.png\" style=\"width:200px\" alt=\"cereal\">";

    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Cancer and your breakfast personality is french toast. You are a complex and interesting person, without being overbearing. You're fun and sassy and know how to treat yo self.";
        document.getElementById("results").innerHTML = "<img  src=\"frenchtoast.png\" style=\"width:200px\" alt=\"frenchtoast\">";

    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 23)) {
        AstroSign = "Leo and your breakfast personality is cold leftover pizza. Let's face it. You're a mess. You probably sleep way too much or not enough. And you probably are behind on a bill or two. You need to break the cycle. Pay a bill, clean your bathroom, call your mom. Go on!";
        document.getElementById("results").innerHTML = "<img src=\"pizza.png\" style=\"width:200px\" alt=\"pizza\">";

    } else if ((whichMonth == 8 && whichDayOfMonth >= 24) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
        AstroSign = "Virgo and your breakfast personality is avocado toast. You are a classy and cool person. Your insta is probably strong af and I wouldn't be shocked if there was a brunch pic or two in there. Remember to pick up a book instead of a blog now and then.";
        document.getElementById("results").innerHTML = "<img src=\"avocadotoast.png\" style=\"width:200px\" alt=\"avocadotoast\">";

    } else if ((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Libra and your breakfast personality is blueberry waffles. You are balanced. You understand when to have fun and when to work hard. When to go running and when to pizza binge. You're adept in social situations, yet are comfortable alone. You get it. I wish I could be like you.";
        document.getElementById("results").innerHTML = "<img src=\"blueberrywaffles.png\" style=\"width:200px\" alt=\"blueberrywaffles\">";

    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 22)) {
        AstroSign = "Scorpio and your breakfast personality is coffee and a cigarette. Yes, you are cool. Yes your art/blog/photography/whatever project you're really focusing on is good. But someday you're gonna need a job that pays so do yourself a favor and start thinking more long-term.";
        document.getElementById("results").innerHTML = "<img src=\"coffeecigarette.png\" style=\"width:200px\" alt=\"coffee and a cigarette\">";

    } else if ((whichMonth == 11 && whichDayOfMonth >= 23) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sagittarius and your breakfast personality is an everything bagel. People call you quirky and unique, but they all know you are interesting. You struggle to make close friends because you don't connect with people on a deep level. Go out of your way to really try and like a few people. It's worth it.";
        document.getElementById("results").innerHTML = "<img src=\"everythingbagel.png\" style=\"width:200px\" alt=\"bagel\">";

    } else {
        AstroSign = "Error";
    }


    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = 'Hello ' + firstName + ' ' + lastName + '!' + ' You are ' + age + ' years old and' + ' you were born on a ' + WeekDays[whichDayNdx] + '.' + ' Your zodiac sign is ' + AstroSign;



    return false;
}

function gridClickBacon() {
    var AstroSign;
    AstroSign = "Aries and your breakfast personality is bacon. Bacon is a a powerful flavor made from birthing, raising, slaughtering, and processing an animal. And the hard work comes through because it's tasty af. You understand the value of hard work and aren't afraid of your own ambition.";
    document.getElementById("results").classList.add('visible');
    var cat = new Audio('bacon.wav');
    cat.play();

    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickFrenchToast() {
    var AstroSign;
    AstroSign = "Cancer and your breakfast personality is french toast. You are a complex and interesting person, without being overbearing. You're fun and sassy and know how to treat yo self.";
    document.getElementById("results").classList.add('visible');
    var cat = new Audio('frenchtoast.mp3');
    cat.play();
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickOatmeal() {
    var AstroSign;
    AstroSign = "Capricorn and your breakfast personality is oatmeal. You're ambitious and interesting but a little too responsible. Relax a little. You're never going to accomplish your goals or be a success so stop being such a try-hard and pick up a chill hobby like camping or skiing or glassblowing";
    document.getElementById("results").classList.add('visible');
    var cat = new Audio('oatmeal.wav');
    cat.play();
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickDonut() {
    var AstroSign;
    AstroSign = "Pisces and your breakfast personality is a donut. You are crazy and reckless and always a good time. You understand that you only live once and are making the most of it. Try not to be too reckless or that one life you get to live might be a short one.";
    document.getElementById("results").classList.add('visible');
    var cat = new Audio('donut.wav');
    cat.play();
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickPancakes() {
    var AstroSign;
    AstroSign = "Aquarius and your breakfast personality is pancakes. You're an easy-going person, but because of this some people will find you too simple. Forget them and keep doing you.";
    document.getElementById("results").classList.add('visible');
    var cat = new Audio('pancake.wav');
    cat.play();
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickScrambledEggs() {
    var AstroSign;
    AstroSign = "Taurus and your breakfast personality is scrambled eggs. You might look light and fluffy, but you are a wise and likeable.";
    document.getElementById("results").classList.add('visible');
    var outputArea = document.getElementById('displayMsg');
    var cat = new Audio('scrambledeggs.wav');
    cat.play();
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickAvocadoToast() {
    var AstroSign;
    document.getElementById("results").classList.add('visible');
    AstroSign = "Virgo and your breakfast personality is avocado toast. You are a classy and cool person. Your insta is probably strong af and I wouldn't be shocked if there was a brunch pic or two in there. Remember to pick up a book instead of a blog now and then.";
    var outputArea = document.getElementById('displayMsg');
    var cat = new Audio('ping.wav');
    cat.play();
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickWaffle() {
    var AstroSign;

    document.getElementById("results").classList.add('visible');
    AstroSign = "Libra and your breakfast personality is blueberry waffles. You are balanced. You understand when to have fun and when to work hard. When to go running and when to pizza binge. You're adept in social situations, yet are comfortable alone. You get it. I wish I could be like you.";
    var outputArea = document.getElementById('displayMsg');
    var cat = new Audio('waffle.wav');
    cat.play();
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickCoffee() {
    var AstroSign;

    document.getElementById("results").classList.add('visible');
    AstroSign = "Scorpio and your breakfast personality is coffee and a cigarette. Yes, you are cool. Yes your art/blog/photography/whatever project you're really focusing on is good. But someday you're gonna need a job that pays so do yourself a favor and start thinking more long-term.";
    var cat = new Audio('coffee.wav');
    cat.play();
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickEverythingBagel() {
    var AstroSign;

    document.getElementById("results").classList.add('visible');
    AstroSign = "Sagittarius and your breakfast personality is an everything bagel. People call you quirky and unique, but they all know you are interesting. You struggle to make close friends because you don't connect with people on a deep level. Go out of your way to really try and like a few people. It's worth it.";
    var outputArea = document.getElementById('displayMsg');
    var cat = new Audio('frenchtoast.mp3');
    cat.play();
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;

}

function gridClickCereal() {
    var AstroSign;

    document.getElementById("results").classList.add('visible');
    AstroSign = "Gemini and your breakfast personality is cereal. You know that song by The Kinks called 'A Well Respected Man'? That song is about you, but not in a bad way. You're a meticulous person, but not a boring one.";
    var outputArea = document.getElementById('displayMsg');
    var cat = new Audio('cereal.wav');
    cat.play();
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}


function gridClickPizza() {
    var AstroSign;
    document.getElementById("pizza").classList.add('visible');
    AstroSign = "Leo and your breakfast personality is cold leftover pizza. Let's face it. You're a mess. You probably sleep way too much or not enough. And you probably are behind on a bill or two. You need to break the cycle. Pay a bill, clean your bathroom, call your mom. Go on!";
    var outputArea = document.getElementById('displayMsg');
    var cat = new Audio('pizza.wav');
    cat.play();
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}
var allpicsObj = document.getElementById('allpics');

console.log(allpicsObj);

var imgArray = allpicsObj.children;

for (lp = 0; lp < imgArray.length; lp++) {
    imgArray[lp].classList.remove('visible');
}

switch (whichOne) {
  case 'bacon':
    imgArray[1].classList.add('visible');
    break;
  case 'frenchtoast':
    imgArray[2].classList.add('visible');
    break;
  case 'oatmeal':
    imgArray[3].classList.add('visible');
    break;
  default:
  }