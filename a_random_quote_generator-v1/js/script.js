// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote    : "Spread love everywhere you go.",
    source   : "Mother Teresa",
    citation : "NULL",
    year     : "NULL"
  },

  {
    quote    : "A champion is defined not by their wins but by how they can recover when they fall.",
    source   : "Serena Williams",
    citation : "NULL",
    year     : "NULL"
  },

  {
    quote    : "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source   : "Robert Louis Stevenson",
    citation : "NULL",
    year     : "1871"
  },

  {
    quote    : "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source   : "Buddha",
    citation : "NULL",
    year     : "NULL"
  },

  {
    quote    : "May the force be with you",
    source   : "Han Solo",
    citation : "Star Wars",
    year     : "1977"
  }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * 5);
  return array[randomNumber];
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
  var quotee = getRandomQuote(quotes);
  var str = "";



  str += "<p class='quote'>" + quotee.quote + "</p>";
  str += "<p class='source'>" + quotee.source;

  if(quotee.citation !== "NULL") {
    str += "<span class='citation'>" + quotee.citation + "</span>";
  }

  if(quotee.year !== "NULL") {
    str += "<span class='year'>" + quotee.year + "</span>";
  }
  str += "</p>";

  document.getElementById('quote-box').innerHTML = str;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
