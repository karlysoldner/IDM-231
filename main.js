var firstName;
var birthDayObj;
var WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var allpicsObj = document.getElementById('allpics');

console.log(allpicsObj);

var imgArray = allpicsObj.children;

for (lp = 0; lp < imgArray.length; lp++) 
{
    
    if(imgArray[lp].classList == "plate")
    {
        imgArray[lp].classList.add('visible');
    }
    else
    {
        imgArray[lp].classList.remove('visible');
    }
}

function formReset() { 
    document.getElementById('bday').value="";
}


function calZodiac() {
    firstName = document.getElementById('fname').value;
    //lastName = document.getElementById('lname').value;
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
        gridClickOatmeal();

    } else if ((whichMonth == 1 && whichDayOfMonth >= 21) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aquarius and your breakfast personality is pancakes. You're an easy-going person, but because of this some people will find you too simple. Forget them and keep doing you.";
        // document.getElementById(pancakes).innerHTML = style.display="block";
        gridClickPancakes();

    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pisces and your breakfast personality is a donut. You are crazy and reckless and always a good time. You understand that you only live once and are making the most of it. Try not to be too reckless or that one life you get to live might be a short one.";
        gridClickDonut();

    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
        AstroSign = "Aries and your breakfast personality is bacon. Bacon is a a powerful flavor made from birthing, raising, slaughtering, and processing an animal. And the hard work comes through because it's tasty af. You understand the value of hard work and aren't afraid of your own ambition. Sort of like makin' bacon.";
        gridClickBacon();

    } else if ((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Taurus and your breakfast personality is scrambled eggs. You might look light and fluffy, but you are a wise and likeable. You have many varied interests but you have a good head on your shoulders and are capable of much.";
        gridClickScrambledEggs();
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 20)) {
        AstroSign = "Gemini and your breakfast personality is cereal. You know that song by The Kinks called A Well Respected Man? That song is about you, but not in a bad way.";
        gridClickCereal();

    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Cancer and your breakfast personality is french toast. You are a complex and interesting person, without being overbearing. You're fun and sassy and know how to treat yo self.";
        gridClickFrenchToast();

    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 23)) {
        AstroSign = "Leo and your breakfast personality is cold leftover pizza. Let's face it. You're a mess. You probably sleep way too much or not enough. And you probably are behind on a bill or two. You need to break the cycle. Pay a bill, clean your bathroom, call your mom. Go on!";
        gridClickPizza();

    } else if ((whichMonth == 8 && whichDayOfMonth >= 24) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
        AstroSign = "Virgo and your breakfast personality is avocado toast. You are a classy and cool person. Your insta is probably strong af and I wouldn't be shocked if there was a brunch pic or two in there. Remember to pick up a book instead of a blog now and then.";
        gridClickAvocadoToast();

    } else if ((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Libra and your breakfast personality is blueberry waffles. You are balanced. You understand when to have fun and when to work hard. When to go running and when to pizza binge. You're adept in social situations, yet are comfortable alone. You get it. I wish I could be like you.";
        gridClickWaffle();

    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 22)) {
        AstroSign = "Scorpio and your breakfast personality is coffee and a cigarette. Yes, you are cool. Yes your art/blog/photography/whatever project you're really focusing on is good. But someday you're gonna need a job that pays so do yourself a favor and start thinking more long-term.";
        gridClickCoffee();

    } else if ((whichMonth == 11 && whichDayOfMonth >= 23) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sagittarius and your breakfast personality is an everything bagel. People call you quirky and unique, but they all know you are interesting. You struggle to make close friends because you don't connect with people on a deep level. Go out of your way to really try and like a few people. It's worth it.";
        //document.getElementById("results").innerHTML = "<img src=\"everythingbagel.png\" style=\"width:200px\" alt=\"bagel\">  <img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto;\">"; 
        gridClickEverythingBagel();

    } else {
        AstroSign = "Error";
    }


    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = 'Hello ' + firstName + '!' +  'Your zodiac sign is '+ AstroSign;



    return false;
}

function gridClickBacon() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "bacon" || imgArray[lp].classList == "plate" )
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    document.getElementById('bday').innerHTML="mm/dd/yyyy";
    var AstroSign;
    AstroSign = "Aries and your breakfast personality is bacon. Making bacon requires raising, slaughtering, and processing an animal. And the hard work comes through because it's tasty af. You understand the value of hard work and aren't afraid of your own ambition.";
    document.getElementById("results").innerHTML= "<img src=\"bacon.png\" style=\"width:200px; z-index: 1; position: absolute; padding-top: 50px; padding-left:90px\" alt=\"bacon\" class=\"bacon\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    document.getElementById("results").classList.add('visible');
    var audioCheck = document.getElementById("bday").value;

    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
        var cat = new Audio('bacon.wav');
        cat.play();
    }

    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickFrenchToast() {
        for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "toast" || imgArray[lp].classList == "plate")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    AstroSign = "Cancer and your breakfast personality is french toast. You are a complex and interesting person, without being overbearing. You're fun and sassy and know how to treat yo self.";
    document.getElementById("results").innerHTML= "<img src=\"frenchtoast.png\" style=\"width:200px; z-index: 1; position: absolute; padding-top: 50px; padding-left:90px\" alt=\"toast\" class=\"toast\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    document.getElementById("results").classList.add('visible');
        var audioCheck = document.getElementById("bday").value;

    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
         var cat = new Audio('frenchtoast.mp3');
         cat.play();
    }
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickOatmeal() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "oatmeal")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    AstroSign = "Capricorn and your breakfast personality is oatmeal. You're ambitious and interesting but a little too responsible. Relax a little. You're never going to accomplish your goals or be a success so stop being such a try-hard and pick up a chill hobby like camping or skiing or glassblowing";
    document.getElementById("results").innerHTML= "<img src=\"oatmeal.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"oatmeal\" class=\"oatmeal\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    document.getElementById("results").classList.add('visible');
    var audioCheck = document.getElementById("bday").value;

    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
    var cat = new Audio('oatmeal.wav');
    cat.play();
    }
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickDonut() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "donut")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    AstroSign = "Pisces and your breakfast personality is a donut. You are crazy and reckless and always a good time. You understand that you only live once and are making the most of it. Try not to be too reckless or that one life you get to live might be a short one.";
    document.getElementById("results").innerHTML= "<img src=\"donut.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"donut\" class=\"donut\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    document.getElementById("results").classList.add('visible');
    var audioCheck = document.getElementById("bday").value;

    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
        var cat = new Audio('donut.wav');
        cat.play();
    }
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickPancakes() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "pancakes")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    AstroSign = "Aquarius and your breakfast personality is pancakes. You're an easy-going person, but because of this some people will find you too simple. Forget them and keep doing you.";
    document.getElementById("results").innerHTML= "<img src=\"pancakes.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"pancakes\" class=\"pancakes\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    document.getElementById("results").classList.add('visible');
    var audioCheck = document.getElementById("bday").value;
    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
        var cat = new Audio('pancake.wav');
         cat.play();
    }
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickScrambledEggs() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "scrambledeggs")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    AstroSign = "Taurus and your breakfast personality is scrambled eggs. You might look light and fluffy, but you are a wise and likeable.";
    document.getElementById("results").innerHTML= "<img src=\"scrambledeggs.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"scrambledeggs\" class=\"scrambledeggs\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto;z-index: 0;\">"; 
    document.getElementById("results").classList.add('visible');
    var outputArea = document.getElementById('displayMsg');
    var audioCheck = document.getElementById("bday").value;
    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
        var cat = new Audio('scrambledeggs.wav');
        cat.play();
    }
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickAvocadoToast() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "avocadotoast")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    document.getElementById("results").classList.add('visible');
document.getElementById("results").innerHTML= "<img src=\"avocadotoast.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"avocado toast\" class=\"avocadotoast\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">";     
    AstroSign = "Virgo and your breakfast personality is avocado toast. You are a classy and cool person. Your insta is probably strong af and I wouldn't be shocked if there was a brunch pic or two in there. Remember to pick up a book instead of a blog now and then.";
    var outputArea = document.getElementById('displayMsg');
    var audioCheck = document.getElementById("bday").value;
    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
        {
 
        var cat = new Audio('ping.wav');
        cat.play();
    }
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickWaffle() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "waffle")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    document.getElementById("results").classList.add('visible');
    document.getElementById("results").innerHTML= "<img src=\"blueberrywaffles.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"waffles\" class=\"waffles\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">";     
    AstroSign = "Libra and your breakfast personality is blueberry waffles. You are balanced. You understand when to have fun and when to work hard. When to go running and when to pizza binge. You're adept in social situations, yet are comfortable alone. You get it. I wish I could be like you.";
    var outputArea = document.getElementById('displayMsg');
    var audioCheck = document.getElementById("bday").value;
    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
        var cat = new Audio('waffle.wav');
        cat.play();
    }
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickCoffee() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "coffee")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;

    document.getElementById("results").classList.add('visible');
document.getElementById("results").innerHTML= "<img src=\"coffeecigarette.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"coffee and a cigarette\" class=\"coffeecigarette\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    AstroSign = "Scorpio and your breakfast personality is coffee and a cigarette. Yes, you are cool. Yes your art/blog/photography/whatever project you're really focusing on is good. But someday you're gonna need a job that pays so do yourself a favor and start thinking more long-term.";
    var audioCheck = document.getElementById("bday").value;
    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
    var cat = new Audio('coffee.wav');
    cat.play();
    }
    var outputArea = document.getElementById('displayMsg');
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}

function gridClickEverythingBagel() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "bagel")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;

    document.getElementById("results").classList.add('visible');
document.getElementById("results").innerHTML= "<img src=\"everythingbagel.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"everything bagel\" class=\"bagel\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    AstroSign = "Sagittarius and your breakfast personality is an everything bagel. People call you quirky and unique, but they all know you are interesting. You struggle to make close friends because you don't connect with people on a deep level. Go out of your way to really try and like a few people. It's worth it.";
    var outputArea = document.getElementById('displayMsg');
    var audioCheck = document.getElementById("bday").value;
    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
    var cat = new Audio('frenchtoast.mp3');
    cat.play();
    }
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;

}

function gridClickCereal() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "cereal")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;

    document.getElementById("results").classList.add('visible');
document.getElementById("results").innerHTML= "<img src=\"cereal.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"cereal\" class=\"cereal\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    AstroSign = "Gemini and your breakfast personality is cereal. You know that song by The Kinks called 'A Well Respected Man'? That song is about you, but not in a bad way. You're a meticulous person, but not a boring one.";
    var outputArea = document.getElementById('displayMsg');
    var audioCheck = document.getElementById("bday").value;
    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
    var cat = new Audio('cereal.wav');
    cat.play();
    }
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}


function gridClickPizza() {
    for (lp = 0; lp < imgArray.length; lp++) 
    {
    
        if(imgArray[lp].classList == "pizza")
        {
           imgArray[lp].classList.add('visible');
        }
        else
        {
             imgArray[lp].classList.remove('visible');
        }
    }
    var AstroSign;
    document.getElementById("results").classList.add('visible');
document.getElementById("results").innerHTML= "<img src=\"pizza.png\" style=\"width:200px; position: absolute; padding-top: 50px; padding-left:90px; z-index: 1;\" alt=\"pizza\" class=\"pizza\">";
    document.getElementById("results").innerHTML+= "<img id=\"plate\" src=\"plate.png\" alt=\"plate\" class=\"plate\" style=\"height: 300px; width: auto; z-index: 0;\">"; 
    AstroSign = "Leo and your breakfast personality is cold leftover pizza. Let's face it. You're a mess. You probably sleep way too much or not enough. And you probably are behind on a bill or two. You need to break the cycle. Pay a bill, clean your bathroom, call your mom. Go on!";
    var outputArea = document.getElementById('displayMsg');
            var audioCheck = document.getElementById("bday").value;

    var audioArr = audioCheck.split('-');
    var checker = 0;
    for( i =0; i < audioArr.length; i++)
    {
        if(!isNaN(audioArr[i]) && audioArr[0].substring(0,1) != "0")
        {
            checker++;
        }
    }
    if(checker != 0 )
    {
 
    var cat = new Audio('pizza.wav');
    cat.play();
    }
    outputArea.innerHTML = ' Your zodiac sign is ' + AstroSign;
}
