var questionsLi = [
    {
        subject: "What type of file would most likely contain this tag: <!DOCTYPE html> ?",
        choice: [".html", ".js", ".css", ".md"],
        answer: ".html"
    },
    {
        subject: "_____ and _____ are considered to be types of loops.",
        choice: ["Const/let", "If/else", "This/window", "While/for"],
        answer: "While/for"
    },
    {
        subject: "Which of follwing options most accurately lists the order of the box model and its properties?",
        choice: ["content, border, padding, margin", "content, padding, border, margin", "text, padding, border", "text, padding, margin, border"],
        answer: "content, padding, border, margin"
    },
    {
        subject: "What tag is used to link a .js file to an .html file?",
        choice: ["<link>", "<a>", "<meta>", "<script>"],
        answer: "<script>"
    },
    {
        subject: "what would be used in CSS to select every element on the page",
        choice: ["*", ":", "#", "."],
        answer: "*"
    }
];

// time variables

var startTime = 59;
var timePenalty = 10;
var timerInterval = 0;
var timer = document.querySelector("#time");
// The start button
var startBtn = document.querySelector("#start-quiz");
var questions = document.querySelector("#load-questions");
var QuestionsDiv = document.querySelector("#questions-div");
var index = 0;

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function runQuestions() {
	// Sets interval
	if(timerInterval === 0) {
		// Stops execution of quiz when time is up
		timerInterval = setInterval(function() {
			startTime--;
			timer.textContent = startTime;
			if (startTime <= 0) {
				clearInterval(timerInterval);
				endGame();
				startTime.textContent="TIME IS UP!";
			}
	  	},1000);
	}
	nextQuestion(index);
};

startBtn.addEventListener("click", runQuestions);

var choiceList = document.createElement("ul");
var displayQuestions = document.createElement("p");

// WHEN I answer a question
// THEN I am presented with another question
function nextQuestion(index) {
	questions.innerHTML = "";
	choiceList.innerHTML = "";
	for(var i=0; i < questionsLi.length; i++) {
		var displayChoices = questionsLi[index].choice;
		questions.textContent = questionsLi[index].subject;
		console.log(questionsLi[index].subject);
	};
	displayChoices.forEach(function (newItem) {
		var eachChoice = document.createElement("li");
		eachChoice.textContent = newItem;
		questions.appendChild(choiceList);
		choiceList.appendChild(eachChoice);
		eachChoice.addEventListener("click", (compareChoices));
	});
}

function compareChoices(event) {
	var option = event.target;
	if(option.matches("li")) {
		var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "choice-div");
        if (option.textContent === questionsLi[index].answer) {
        } else {
			// WHEN I answer a question incorrectly
			// THEN time is subtracted from the clock
            startTime = startTime - timePenalty;
        }
	}

	index++;
	if(index >= questionsLi.length) {
		// WHEN all questions are answered or the timer reaches 0
		// THEN the game is over
		endGame();
	}else{
		nextQuestion(index);
	}
	questions.appendChild(newDiv);
}

function endGame () {
	questions.innerHTML = "";
	timer.innerHTML = "";
	var congrats = document.createElement('h2');
	congrats.textContent="Congrats on completeing the quiz";
	questions.appendChild(congrats);
	congrats.setAttribute('class', 'final-score-h2');

	var newPara = document.createElement('p');
	questions.appendChild(newPara);

	if(startTime >= 0 ) {
		var score = startTime
		var anotherPara = document.createElement('p');
		clearInterval(timerInterval);
		newPara.textContent='Your score: '+score;
		questions.appendChild(anotherPara);
	}

	var initialsInput = document.createElement("input");
	initialsInput.textContent = "";
	initialsInput.setAttribute("type", "text");
	questions.appendChild(initialsInput);

	var submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent='submit';
	questions.appendChild(submitButton);
	
	// WHEN the game is over
	// THEN I can save my initials and my score
	submitButton.addEventListener("click", function() {
		var submitValue = initialsInput.value;
		if (submitValue === null) {
			alert('You must enter your initials in order for your score to be to recorded.');
		}else{
			var scoreInitials = {
				points: score,
				submitValue: submitValue
			}
			var getScores = localStorage.getItem('getScores');
			if (getScores == null) {
				getScores=[];
	
			}else{getScores = JSON.parse(getScores);}
			getScores.push(scoreInitials);
			var addScore = JSON.stringify(getScores);
			window.location.replace('./score.html');
		}
	});

}

var points = 0;
