var game = document.getElementById("game");

// This is a game in which the user types a letter and no matter what they type the 
// final text will always be a string decided by the computer.

function generateText(){
    var block1Choices = ["Dear ", "To ", "Hello ", "Greetings ", "Good day "]
    var block2Choices = ["Mr. President,", "Sir,", "Madam,", "Jeff Bezos,", "Elon Musk,", "Mark Zuckerberg,", "Angela Merkel,", "Justin Trudeau,", "Emmanuel Macron,", "Your Majesty,", "Your Highness,", "Your Excellency,", "Steve Jobs,", "Bill Gates,", "Tim Cook,", "Satya Nadella,", "Sundar Pichai,", "Larry Page,", "Sergey Brin,", "John,", "Jane,", "David,", "Sarah,", "Michael,", "Emily,", "William,", "Olivia,", "James,", "Sophia,"];
    var block3Choices = ["I am writing to you today to inform you that ", "This letter should be taken with utmost seriousness as ", "I am sorry to inform you that ", "Don't tell my friends but "]
    var block4Choices = ["you appear to have double parked your car in front of my house.", "I have accidentally run over your son.", "your house appears to have burned down.", "your dog has gotten it's leg caught in my oven again.", "I couldn't find a cake for your wedding", "I accidentally spilled coffee on your laptop.", "I lost your passport.", "I scratched your car while parking.", "Your son broke your favorite vase.", "I forgot to water your plants while you were away."];
    var block5Choices = ["I am sorry for the inconvenience.", "I am sorry for your loss.", "I am sorry for the damage.", "I am sorry for the trouble.", "I am sorry for the pain."]
    var block6Choices = ["Despite the current situation, it is important to move forward. Therefore, I recommend that you", "Given the circumstances, it would be wise to", "In light of the situation, I suggest that you", "To address the issue at hand, I advise that you", "If you want to resolve this matter, I would recommend that you"]
    var block7Choices = ["consult with a legal expert.", "consider purchasing a new property.", "look into buying a new vehicle.", "seek professional help.", "contact the authorities.", "speak with a religious leader.", "treat yourself to a meal.", "reach out to a trusted family member or friend."]
    var block8Choices = ["I hope this letter finds you well.", "Please call ASAP.", "We need to make sure this never happens again.", "Perhaps some forgiveness will be imparted.", "Thank you for your prompt response.", "I look forward to hearing from you soon.", "Let's touch base next week to discuss further.", "Please let me know if you have any questions or concerns."]
    var block9Choices = ["Sincerely, ", "Yours truly, ", "Yours faithfully, ", "Yours sincerely, ", "Yours, ", "Thank you, ", "Best wishes, ", "Best regards, ", "Kind regards, ", "Regards, "]
    var block10Choices = ["Tim Cook", "King Charles III", "Jim", "Eric", "Dorothy", "Elon Musk", "Sandra Lykes", "Liam Ericsson", "Paul Smith"]
    return `  `+ block1Choices[Math.floor(Math.random() * block1Choices.length)] + block2Choices[Math.floor(Math.random() * block2Choices.length)] + '`' + block3Choices[Math.floor(Math.random() * block3Choices.length)] + block4Choices[Math.floor(Math.random() * block4Choices.length)] + '`' + block5Choices[Math.floor(Math.random() * block5Choices.length)] + ' '+ block6Choices[Math.floor(Math.random() * block6Choices.length)] + ' ' + block7Choices[Math.floor(Math.random() * block7Choices.length)] + '`' + block8Choices[Math.floor(Math.random() * block8Choices.length)] + '`' + block9Choices[Math.floor(Math.random() * block9Choices.length)] + '`' +block10Choices[Math.floor(Math.random() * block10Choices.length)] + '.';
}

var string = generateText();
var stringArray = string.split("");
var stringLength = stringArray.length;
var stringIndex = 0;
var stringIndexMax = stringLength - 1;

var gameText = document.createElement("p");
gameText.setAttribute("id", "gameText");
gameText.innerHTML = stringArray[stringIndex];
game.appendChild(gameText);
var no = 0

// If on pc, use keypress
document.onkeyup = function(event){
    // If it is a backspace, remove the last character
    if (event.keyCode != 8) {
        // Remove the blinking cursor
        var cursor = document.getElementById("cursor");
        if (cursor) {
            cursor.parentNode.removeChild(cursor);
        }
        var key = event.key;
        var gameText = document.getElementById("gameText");
        if (stringIndex < stringIndexMax) {
            stringIndex++;
            if (stringArray[stringIndex] == "`") {
                gameText.innerHTML += "<br>";
            } else {
                gameText.innerHTML += stringArray[stringIndex];
            }
        } else {
            no++
            if (no == 3) {
                gameText.innerHTML = ""
                string = generateText();
                stringArray = string.split("");
                stringLength = stringArray.length;
                stringIndex = 0;
                stringIndexMax = stringLength - 1;
            }
        }
        // Display a blinking cursor at the end of the text
        var cursor = document.createElement("span");
        cursor.setAttribute("id", "cursor");
        cursor.innerHTML = "|";
        gameText.appendChild(cursor);
    } else {
        // Remove the blinking cursor
        var cursor = document.getElementById("cursor");
        if (cursor) {
            cursor.parentNode.removeChild(cursor);
        }
        var gameText = document.getElementById("gameText");
        if (stringIndex > 0) {
            stringIndex--;
            gameText.innerHTML = gameText.innerHTML.slice(0, -1);
        }
        // Display a blinking cursor at the end of the text
        var cursor = document.createElement("span");
        cursor.setAttribute("id", "cursor");
        cursor.innerHTML = "|";
        gameText.appendChild(cursor);
    }
}

// If on mobile, use touchstart
document.addEventListener("touchstart", function(event){
        // Remove the blinking cursor
        var cursor = document.getElementById("cursor");
        if (cursor) {
            cursor.parentNode.removeChild(cursor);
        }
        var key = event.key;
        var gameText = document.getElementById("gameText");
        if (stringIndex < stringIndexMax) {
            stringIndex++;
            if (stringArray[stringIndex] == "`") {
                gameText.innerHTML += "<br>";
            } else {
                gameText.innerHTML += stringArray[stringIndex];
            }
        } else {
            no++
            if (no == 3) {
                gameText.innerHTML = ""
                string = generateText();
                stringArray = string.split("");
                stringLength = stringArray.length;
                stringIndex = 0;
                stringIndexMax = stringLength - 1;
            }
        }
        // Display a blinking cursor at the end of the text
        var cursor = document.createElement("span");
        cursor.setAttribute("id", "cursor");
        cursor.innerHTML = "|";
        gameText.appendChild(cursor);
});

// This is a game in which the user types a letter and no matter what they type the\\\\\\