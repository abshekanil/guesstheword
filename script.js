const words = [
    "dog",
    "cat",
    "horse",
    "tiger",
    "lion",
    "elephant",
    "peakcock",
    "gorilla",
    "fox",
    "deer",
    "bat",
    "buffalo",
    "cow",
];

let displayWord = "";
let letterInput = document.getElementById('letterInput');
let btn = document.getElementById('btn');
let gameContainer = document.querySelector('.gameContainer');
//  finding randomIndex

let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
// console.log(selectedWord);

// to store guessed letters
let guessedlist = [];

// to show initial words
for(let i=0; i<selectedWord.length; i++)
{
    displayWord+="_ ";
}
document.querySelector('.displayWord').textContent = displayWord;

function guessLetter(){

    if(!letterInput.value){
        alert("Empty input box, Please add input letter");
        return;
    }

    let letter = letterInput.value.toLowerCase();
    letterInput.value = "";
    // console.log(letter);

    if(guessedlist.includes(letter))
    {
        alert("You already entered this letter");
        return;
    }

    guessedlist.push(letter);

    let updateDisplay = "";
    let allLetterGuessed = true;

    for(let i=0; i<selectedWord.length; i++)
    {
        if(guessedlist.includes(selectedWord[i]))
        {
            updateDisplay += selectedWord[i] + " ";
        }else{
            updateDisplay += "_ ";
            allLetterGuessed = false;
        }
    }
    document.querySelector('.displayWord').textContent = updateDisplay;

    if(allLetterGuessed)
    {
        let congrats = document.createElement("h1");
        congrats.innerHTML = " 🎉 🎉Congratulations 🎉 ";
        gameContainer.appendChild(congrats);
    }

}


btn.addEventListener("click", guessLetter);

