// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote    : "Spread love everywhere you go."
    source   : "Mother Teresa"
    citation : ""
    year     : ""
  },

  {
    quote    : "A champion is defined not by their wins but by how they can recover when they fall."
    source   : "Serena Williams"
    citation : ""
    year     : ""
  },

  {
    quote    : "Don't judge each day by the harvest you reap but by the seeds that you plant."
    source   : "Robert Louis Stevenson"
    citation : ""
    year     : "1871"
  },

  {
    quote    : "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
    source   : "Buddha"
    citation : ""
    year     : ""
  },

  {
    quote    : "May the force be with you"
    source   : "Han Solo"
    citation : "Star Wars"
    year     : "1977"
  }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * 6);
  return array[randomNumber];
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
  var quote = getRandomQuote(quotes);
  var str   = "";

  str += <p class="quote"> quote.quote </p>;
  str += <p class="source"> quote.source;

  if(quote.citation !== "") {
    str += <span class="citation"> quote.citation </span>;
  }

  if(quote.year !== "") {
    str += <span class="year"> quote.year </span>;
  }
  str += </p>;

  document.getElementById('quote-box').innerHTML = str;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
