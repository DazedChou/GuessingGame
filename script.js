var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var wordEl = document.querySelector("#wordGuess");
var scoreEl = document.querySelector("#score");

var timer = 10; //game length
var wins = 0;
var loss = 0;
var words = ["javascript","loops","data attributes","local storage","selectors","variables",
"methods"];

function startGame(){

    //TIMER
    var timerInterval = setInterval(function(){

        timer--;
        timerEl.textContent = "Time left: " + timer;
 
        if (timer == 0){
            clearInterval(timerInterval);
            loss++;
            wordEl.textContent = "You Lost";
        }
    },1000)

    var currentWord = words[Math.floor(Math.random()*words.length)];
    console.log(currentWord);
    var wordSplit = currentWord.split("");
    console.log(wordSplit);

    var wordHidden;
    

}

startEl.addEventListener("click",startGame);