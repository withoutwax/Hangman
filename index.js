let secret_word = 'WIN';

let total_no_guesses = 10;
let input_alphabet;
let letters_guessed = {};
let letters_guessed_output = '';

function setAlphabet(alphabet) {
  input_alphabet = alphabet;

  if (input_alphabet in letters_guessed) {
    document.getElementById("warning").innerHTML = "You've already guessed that alphabet!";
    letters_guessed[input_alphabet] += 1
  } else {
    letters_guessed[input_alphabet] = 1
    letters_guessed_output += input_alphabet;
  }

  document.getElementById("status").innerHTML = input_alphabet;
  document.getElementById("guessed").innerHTML = letters_guessed_output;
  console.log(letters_guessed);
  // status.value = input_alphabet;
  // console.log(status.value);
}
