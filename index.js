// SELECT WORD FROM WORD LIST
let random_index;
let secret_word;
preset();
let test_word = 'WILLISAWSOME';
let guess_word = [];

let total_no_guesses = 10;
let input_alphabet;
let letters_guessed = {};
let letters_guessed_output = '';

// PRESETUP ==============================
// Update Score
document.getElementById("scores").innerHTML = total_no_guesses;
for (let i = 0; i < secret_word.length; i++) {
  guess_word.push('_');
}
// DISPLAY CURRENT STATUS
// guess_word = guess_word.join(' ');
document.getElementById("status").innerHTML = guess_word.join(' ');


// GAME MECHANICS =========================
function setAlphabet(alphabet) {
  input_alphabet = alphabet;
  if (secret_word.includes(input_alphabet)) {
    for (let i = 0; i < secret_word.length; i++) {
      if (input_alphabet == secret_word[i]) {
        guess_word[i] = input_alphabet;
      }
    }
    displayWarning("correct", input_alphabet);
  } else {
    total_no_guesses -= 1;
    document.getElementById("scores").innerHTML = total_no_guesses;
    displayWarning("incorrect", input_alphabet);
  }
  document.getElementById("status").innerHTML = guess_word.join(' '); //Update the game status

  if (input_alphabet in letters_guessed) {
    displayWarning("duplicate", input_alphabet);
    letters_guessed[input_alphabet] += 1
  } else {
    letters_guessed[input_alphabet] = 1
    letters_guessed_output += ' ' + input_alphabet;
  }

  // document.getElementById("word-input").innerHTML = input_alphabet;
  // document.getElementById("guessed").innerHTML = letters_guessed_output;
  // console.log(letters_guessed);

  // GAME OVER?
  if (total_no_guesses == 0) {
    // alert("Game Over");
    displayWarning("lose", secret_word);
  } else if (guess_word.includes('_') == false) {
    // alert("You Won!");
    console.log("You Won!");
    displayWarning("win", secret_word);
  }
}

function displayWarning(status, input_alphabet) {
  if (status == "correct") {
    document.getElementById("warning").innerHTML = "That's correct!";
    document.getElementById("warning").style.color = "green";
    document.getElementById("warning").style.visibility = "visible";
  } else if (status == "incorrect") {
    document.getElementById("warning").innerHTML = "That's incorrect!";
    document.getElementById("warning").style.color = "red";
    document.getElementById("warning").style.visibility = "visible";
  } else if (status == "duplicate") {
    document.getElementById("warning").innerHTML = "You've already guessed that letter! - " + input_alphabet;
    document.getElementById("warning").style.color = "red";
    document.getElementById("warning").style.visibility = "visible";
  } // WIN OR LOSE
  else if (status == "win") {
    document.getElementById("warning").innerHTML = "You've won!";
    document.getElementById("warning").style.color = "green";
    document.getElementById("warning").style.visibility = "visible";
  } else if (status == "lose") {
    document.getElementById("warning").innerHTML = "Sorry! you've lost! The word was: " + input_alphabet;
    document.getElementById("warning").style.color = "red";
    document.getElementById("warning").style.visibility = "visible";
  }
}

// RESTART FUNCTION
function restart() {
  preset();
  // secret_word = 'WIN';
  guess_word = [];

  total_no_guesses = 10;
  // input_alphabet;
  letters_guessed = {};
  letters_guessed_output = '';
  // PRESETUP ==============================
  // Update Score
  document.getElementById("scores").innerHTML = total_no_guesses;
  for (let i = 0; i < secret_word.length; i++) {
    guess_word.push('_');
  }
  // DISPLAY CURRENT STATUS
  // guess_word = guess_word.join(' ');
  document.getElementById("status").innerHTML = guess_word.join(' ');
  document.getElementById("warning").style.visibility = "hidden";

}

function preset() {
  random_index = Math.floor(Math.random() * words.length);
  secret_word = words[random_index].toUpperCase();
  console.log("YOU! You are such a cheater! I bet you are a developer... aren't you?! Anyways... the secret word is...: ", secret_word);
}
