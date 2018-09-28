let secret_word = 'WIN';
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

  // CHECK IF THE ALPHABET IS IN THE SECRET WORD
  if (secret_word.includes(input_alphabet)) {
    for (let i = 0; i < secret_word.length; i++) {
      if (input_alphabet == secret_word[i]) {
        guess_word[i] = input_alphabet;
      }
    }
  } else {
    total_no_guesses -= 1;
    document.getElementById("scores").innerHTML = total_no_guesses;
  }
  document.getElementById("status").innerHTML = guess_word.join(' '); //Update the game status

  if (input_alphabet in letters_guessed) {
    document.getElementById("warning").innerHTML = "You've already guessed that alphabet!";
    letters_guessed[input_alphabet] += 1
  } else {
    letters_guessed[input_alphabet] = 1
    letters_guessed_output += ' ' + input_alphabet;
  }

  document.getElementById("word-input").innerHTML = input_alphabet;
  document.getElementById("guessed").innerHTML = letters_guessed_output;
  console.log(letters_guessed);

  // GAME OVER?
  if (total_no_guesses == 0) {
    alert("Game Over");
  } else if (guess_word.includes('_') == false) {
    alert("You WIN!");
  }
}
