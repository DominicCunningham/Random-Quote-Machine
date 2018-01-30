
function randomQuote() {
  var quote = ["Once We Accept Our Limits, We Go Past Them", "Whatever the mind of man can conceive and believe, it can achieve.", "Strive not to be a success, but rather to be of value."];
  var author = ["Albert Einstein", "Napoleon Hill", "Albert Einstein"];
  var randomNumber = Math.floor(Math.random() * 2 - 0 + 1)) + 0;
  var RQuote = quote[randomNumber];
  var RAuthor = author[randomNumber];
  console.log(RQuote);
  console.log(RAuthor);
}
