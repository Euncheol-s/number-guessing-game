var randomNumber = Math.floor(Math.random()* 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetBtn;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {  // 사용자가 적은 숫자 판별하는 함수
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
            
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
        } else if (guessCount === 10) {
            lastResult.textContent = '!!!GAME OVER!!!';
            setGameOver();
            } else {
                lastResult.textContent = 'Wrong!';
                lastResult.style.backgroundColor = 'red';
                    if(userGuess < randomNumber) {
                        lowOrHi.textContent = 'Last guess was too low!';
                    } else if(userGuess > randomNumber) {
                        lowOrHi.textContent = 'Last guess was too high!';
                        }
                }       
    guessCount++;
    guessField.value = '';
    guessField.focus();
}


function setGameOver() {  // 게임을 다시 시작할 지에 대한 여부를 묻는 함수
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetBtn = document.createElement('button');
    resetBtn.textContent = 'Start new game';
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetGame);
}


function resetGame() {  // 게임을 초기화하는 함수
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');

    for (var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
        }

    resetBtn.parentNode.removeChild(resetBtn);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guesses.parentNode.removeChild(guesses);
    lastResult.parentNode.removeChild(lastResult);
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}