let input_alphabet;
let letters_guessed = {};

function setAlphabet(alphabet) {
  input_alphabet = alphabet;

  if (input_alphabet in letters_guessed) {
    document.getElementById("warning").innerHTML = "You've already clicked the value!";
  } else {
    letters_guessed[input_alphabet] = 1
  }

  document.getElementById("status").innerHTML = input_alphabet;
  console.log(letters_guessed);
  // status.value = input_alphabet;
  // console.log(status.value);
}

// console.log(input_alphabet);
// function test() {
//   console.log(input_alphabet);
// }
