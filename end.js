const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value; //   this means savescoreBtn shoukd be disabled if theres is no username value
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  }; // this is an object of the score properties
  highScores.push(score); //to push the new score inside the localstorage
  highScores.sort((a, b) => b.score - a.score); //this means  if the "b" is higher than "a" then put "b" before "a"
  highScores.splice(5); // this means at index 5 start cutting everything that comes after by cutting we mean do not save

  localStorage.setItem("highScores", JSON.stringify(highScores)); // to update the localmstorage with the high scores while still converting it into a string because LOCAL STORAGE ONLY SAVES ITEM IN STRING FORMAT
  window.location.assign("/"); // this takes the user back to the home page
};


// to convert highscores to an empty array in local storage
// localStorage.setItem("highScores", JSON.stringify([]));
// to convert into an empty array
// console.log(JSON.parse(localStorage.getItem("highScores")));
