var dayOff = "one week"
var newMovie = "stunning"

var place = "garden"
var animal = "cat"
var thing = "sleep"

"My" + animal + " " + "lives in the " + place + " " + "and loves to " + thing


var response = prompt("How do you feel?")
if (response == "Happy") {
    console.log("I am happy too!")
}

var dream = prompt("What's your biggest dream?")
if (dream == "To be a good person") {
    console.log("That's a great dream!")
}

var job = prompt("What's you job?")
if (job != "QA") {
    console.log("Have you ever thought of becoming QA?")
}

var fruit = prompt("Какъв плод харесваш")
if (fruit == "грозде") {
    console.log("Аз също!")
}

var nickname = "Kivi"
if (nickname == "Kivi") {
    console.log("Really? Mine too!")
} else {
    console.log("That's a nice nickname! Mine is Kivi")
}

var animal = "cat"
var otherAnimal = "cat"
if (otherAnimal == "cat") {
    console.log("Hello " + otherAnimal + "lover! I am a " + animal + "lover too!")
} else { "I am a " + animal + "lover but I like " + otherAnimal + "lovers too!" }


var animal = prompt("What's your favourite animal?")
if (animal == "cat") {
    console.log("I like " + animal + "s too!")
} else {
    console.log("The " + animal + "s are lovely too!")
}

var myAnimal = "cat"
var animal = prompt("What's your favourite animal?")
if (animal == "cat") {
    console.log("Your favourite animal is " + animal + ". " + " Mine is " + myAnimal + " too!")
} else {
    console.log("My favourite one is " + myAnimal + ", " + " but I like " + animal + "s too!")
}


var fruit = "grapes"
var vegetable = "potatoes"
if (fruit == "grapes") {
    console.log("I like grapes too!")
} else if (vegetable == "potatoes") {
    console.log("Good!")
} else {
    console.log("Then what do you like to eat?")
}

var answer = prompt("Do you like fruits?")
if (answer == "I don't know") {
    console.log("Really? I like fruits very much!")
} else if (answer == "yes") {
    console.log("Great! What's your favourite?")
} else if (answer == "no") {
    console.log("Then how about vegetables?")
}
else {
    console.log("I don't know what you're talking about")
}

/* roses, jewelry, card, money, candy, electronics, books, puppy */

var answer = prompt("What would be a great idea for my wife's gift?")
if (answer == "roses") {
    console.log("My wife doesn't like " + answer)
} else if (answer == "Jewelry") {
    console.log(answer + " is too expensive!")
} else if (answer == "card") {
    console.log("Just a " + answer + " is not enough!")
} else if (answer == "money") {
    console.log("Noooo! My wife is very rich, " + answer + " is not needed")
} else if (answer == "candy") {
    console.log("She would kill if it's a " + answer + "!" + " She's constatly on a diet!")
} else if (answer == "electronics") {
    console.log("She will never like " + answer)
} else if (answer == "books") {
    console.log("She already has plenty of " + answer)
} else if (answer == "puupy") {
    console.log("Yes! I will buy a " + answer)
} else {
    console.log("I don't think so")
}



var answer1 = prompt("Do you like driving?")
var answer2 = prompt("How old are you?")
var answer3 = parseInt(answer2, 10)
if (answer1 == "yes" && answer3 >= 18) {
    console.log("You can drive my car.")
} else if (answer1 == "yes" && answer3 < 18) {
    console.log("You can't drive my car")
} else if (answer1 == "no" && answer3 < 18) {
    console.log("AS YOU WISH")
} else if (answer1 == "no" && answer2 == "I prefer not to say") {
    console.log("Fine. What else do you like to do?")
} else {
    console.log("I'll talk to you later")
}


var answer1 = prompt("Do you like driving?")
if (answer1 == "yes") {
    var answer2 = prompt("How old are you?")
    var answer3 = parseInt(answer2, 10)
    if (answer3 < 18) {
        console.log("You can't drive my car")
    } else {
        console.log("You can drive my car")
    }
}
if (answer1 == "no") {
    console.log("Ok, I'll ask you something else later")
}


var answer1 = prompt("My favourite colour is blue. What's yours?")
var answer2 = prompt("My number is 1. Now you pick a number")
if (answer1 == "blue") {
    if (answer2 == "1") {
        console.log("That's exactly like me!")
    } else {
        console.log("Like mine only for the colour")
    }
}
if (answer1 != "blue") {
    if (answer2 == "1") {
        console.log("Like mine only for the number")
    }
    else {
        console.log("We are totally different!")
    }
}

//????
var areYouHappy = false
if (!areYouHappy) {
    console.log("Then just be it")
}


var container = ["orange", "blue"]
container.pop()
container
container.push("blue", "red")
container

var things = []
var answer1
answer1 = prompt("Favourite 1?")
things.push(answer1)
answer1 = prompt("Favourite 2?")
things.push(answer1)
answer1 = prompt("Favourite 3?")
things.push(answer1)
console.log(things)



const dreamChef = "Denis"
if (dreamChef == "Denis") {
    colleagues.smiling()
    colleagues.becomingFat()
} else {
    colleagues.runnungAway()
}

for (i = 1; i < 5; i++) {
    console.log("hello " + i)
}


var things = [1, 2, "a", "b"]
for (var i = 0; i < 3; i++) {
    console.log(things[i])
}

var answer = prompt("Type YES or NO")
var answers = ["YES", "NO"]
var responses = ["You said YES", "You said NO", "You didn't follow directoions"]

for (var i = 0; i < 2; i++) {
    if (answer != answers[0] && answer != answers[1]) {
        console.log(responses[2])
        break;
    } else if (answer == answers[i]) {
        console.log(responses[i])
    }
}

var square = ""
for (var i = 0; i < 5; i++) {
    for (var t = 0; t < 5; t++) {
        square = square + "*"
    }
    square = square + "\n"
}
console.log(square)


var triangle = ""
for (var i = 0; i < 1; i++) {
triangle = triangle + "*"
        triangle = triangle + "\n"
    }
    for (var i = 0; i < 2; i++) {
        triangle = triangle + "*"
                }  
            triangle = triangle + "\n"
            for (var i = 0; i < 3; i++) {
                triangle = triangle + "*"
                         }
                    triangle = triangle + "\n"
console.log(triangle)


var triangle = ""
for (var i = 0; i < 5; i++) {
    for (var t = 0; t <= i; t++) {
        triangle = triangle + "*"
    }
    triangle = triangle + "\n"
}
console.log(triangle)


var favColour = "red"
switch (favColour) {
    case "red": 
    console.log ("red!")
    break
    case "blue": 
    console.log("blue!")
    break
    case favColour: 
    console.log (favColour)
}


function getNumber() {
    return 5
}
console.log(getNumber() + 5)



//Simple cashier

var youOwe = prompt ("What's the total you owe?")
var youGive = prompt("How much do you give?")
var Calculate
function Pay() {
    Calculate = youGive - youOwe
    //return Calculate
}
if(Calculate == 0) {
    console.log ("You gave the exact amount")
} else if (Calculate > 0){
    var Change = Calculate
    console.log ("You gave too much. Your change due is $" + Change)
} else if (Calculate < 0) {
    var notEnough = Math.abs(Calculate)
    console.log ("You gave too little. You still owe $" + notEnough)
} else {
    console.log ("Please answer with numbers")
}


//Simple cashier

var youOwe = prompt ("What's the total you owe?")
var youGive = prompt("How much do you give?")
var Calculate
function Pay() {
    Calculate = youGive - youOwe
    return Calculate
}
if(Pay() == 0) {
    console.log ("You gave the exact amount")
} else if (Pay() > 0){
    var Change = Pay()
    console.log ("You gave too much. Your change due is $" + Change)
} else if (Pay() < 0) {
    var notEnough = Math.abs(Pay())
    console.log ("You gave too little. You still owe $" + notEnough)
} else {
    console.log ("Please answer with numbers")
}


//Clean up the story

//task 1 - replace
var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

var firstStep = story.replace(/cheeseburgers/g, "hamburgers")
var secondStep = firstStep.replace(/cheeseburger/g, "hamburger")
var thirdStep = secondStep.replace(/Cheeseburgers/g, "Hamburgers")
var fourthStep = thirdStep.replace(/Cheeseburger/g, "Hamburger")
console.log(fourthStep)

//task 2 - capital letters
var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

var taskTwo = story.replace(/bun/ig, "BUN")
console.log(taskTwo)

//task 3 - how many characters 
var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

var taskThree = story.length
console.log(taskThree)

//task 4 - how many words 
var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

var taskFour = story.split(" ")
console.log(taskFour)


var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."
var taskFourAgain = story.split(" ").length
console.log(taskFourAgain)

/*var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."
var storyArr = story.split(" ")
var wordsNum = storyArr.length + 1
console.log("There are " + wordsNum + " words in the story.")

story = story.replace(/Cheeseburgers/g, "Hamburgers")
story = story.replace(/cheeseburgers/g, "hamburgers")
story = story.replace(/cheeseburger/g, "hamburger")
story = story.replace(/bun/gi, "BUN")
console.log(story)*/

//Roman to integer

var roman = prompt("Type a positive roman numeral")
function romanToInteger () {
    if (roman == "I" ) {
        roman = 1 
    } else if (roman == "V") {
        roman = 5
    } else if (roman == "X") {
        roman = 10
    } else if (roman == "L") {
        roman = 50
    } else if (roman == "C") {
        roman = 100
    } else if (roman == "D") {
        roman = 500
    } else if (roman == "M") {
        roman = 1000
    } else {
        roman = []
        for (i = 0; i < roman.length; i++) {
            roman = function complexRoman () {
                   if (roman == "I" ) {
        roman = 1 
    } else if (roman == "V") {
        roman = 5
    } else if (roman == "X") {
        roman = 10
    } else if (roman == "L") {
        roman = 50
    } else if (roman == "C") {
        roman = 100
    } else if (roman == "D") {
        roman = 500
    } else if (roman == "M") {
        roman = 1000
            }
        return roman
    }}
    
    return roman  
}}

romanToInteger ()


//version 2

roman = []
roman = prompt("Type a roman numeral")
function romanToInteger () {
        for (i = 0; i < roman.length; i++) {
     if (roman == "I" ) {
        roman = 1 
    } else if (roman == "V") {
        roman = 5
    } else if (roman == "X") {
        roman = 10
    } else if (roman == "L") {
        roman = 50
    } else if (roman == "C") {
        roman = 100
    } else if (roman == "D") {
        roman = 500
    } else if (roman == "M") {
        roman = 1000
            }
     else {
        roman = ???

            }
    }
    
    return roman  
}

romanToInteger ()


//versoin 3
roman = ["I", "V", "X", "L", "C", "D", "M"]
roman = prompt("Type a roman numeral")
function romanToInteger () {
    for (i = 0; i < roman.length; i++) {

    }
}

//version 4
function romanToInteger (s) {
    for (i = 0; i < s.length; i++) {
        console.log (s[i])
    }
}