//function that parses the string entered into the textarea and does many other things too.
function parse() {
  // get string entered into the textarea and set words
  const string = document.getElementById("text").value;
  const words = string.split(" ").length - 1;

  // these are True if they are equal to 1, otherwise they are false
  const wordsOne = words === 1;
  const charactersOne = string.length === 1;
  document.getElementById("words").innerHTML = words;
  document.getElementById("characters").innerHTML = string.length;

  //if only one word, singular, else plural
  wordsOne
    ? (document.getElementById("wordS").innerHTML = "word")
    : (document.getElementById("wordS").innerHTML = "words");

  //if only one character, singular, else plural
  charactersOne
    ? (document.getElementById("characterS").innerHTML = "character")
    : (document.getElementById("characterS").innerHTML = "characters");

  // Change all text in textarea to uppercase.
  document.getElementById("text").value = string.toUpperCase();
}
