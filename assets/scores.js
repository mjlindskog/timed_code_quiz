var getScores = localStorage.getItem('getScores');
getScores.JSON.parse(getScores);
for(i=0; i < getScores.length; i++) {
    var scoreLi = document.createElement('li');
    scoreLi.textContent=getScores[i].submitValue
}

var allScores = document.querySelector('.all-time-scores');
var mainMenuBtn = document.querySelector('.main-menu-btn');
var resetBtn = document.querySelector('.reset-btn');


// document.getElementsByClassName('main-menu-btn').onclick = returnStart;
// document.getElementsByClassName('reset-btn').onclick = clearAllScores;

mainMenuBtn.addEventListener("click", returnStart);
resetBtn.addEventListener("click", clearAllScores);

function clearAllScores() {
    location.reload();
    localStorage.clear();

};

function returnStart() {
    window.location.replace("./index.html");

}