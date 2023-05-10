const Questions = [
	{
		num: 1,
		q: "What is the size of double variable ?",
		ans: {
			op1: "8 bit",
			op2: "16 bit",
			op3: "32 bit",
			op4: "64 bit",
		},
		correct: "op4"
	},
	{
		num: 2,
		q: "What is a class in java?",
		ans: {
			op1: "A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object",
			op2: "class is a special data type",
			op3: "class is used to allocate memory to a data type",
			op4: "none of the above",
		},
		correct: "op1"
	}
];
/*
var array = function print() {
	var count = Object.keys(myObject).length;
	for (var id = 1; id <= count; id++) {
		answer = [];
		const num = document.getElementsByClassName("num");
		num.innerText = id;

		const ques = document.getElementsByClassName("question");
		ques.innerText = questions[id].q;

		const op1 = document.getElementsByClassName("op1");
		const op2 = document.getElementsByClassName("op2");
		const op3 = document.getElementsByClassName("op3");
		const op4 = document.getElementsByClassName("op4");
		op1.innerText = questions[id].ans[0].op1;
		op2.innertext = questions[id].ans[1].op2;
		op3.innerText = questions[id].ans[2].op3;
		op4.innerText = questions[id].ans[3].op4;
		
		  var selected = "";
  
	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		selected = op1.value;
	})
  
	// Show selection for op2
	op2.addEventListener("click", () => {
		op2.style.backgroundColor = "lightgoldenrodyellow";
		selected = op2.value;
	})
  
	// Show selection for op3
	op3.addEventListener("click", () => {
		op3.style.backgroundColor = "lightgoldenrodyellow";
		selected = op3.value;
	})
  
	// Show selection for op4
	op4.addEventListener("click", () => {
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	}) 
    
	};
	var start=true;
	if(start){
		print();
	}
}
*/
function start() {
	var quizContainer = document.getElementById('question');
	var resultsContainer = document.getElementById('result');
	var submitButton = document.getElementById('submit');

	generateQuiz(Questions, quizContainer, resultsContainer, submitButton);
}
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer) {
		var output = [];
		var answers;

		for (var i = 0; i < questions.length; i++) {

			answers = [];

			for (letter in questions[i].ans) {

				answers.push(
					'<label>'
					+ '<input type="radio" name="question' + i + '" value="' + letter + '">'
					+ letter + ': '
					+ questions[i].ans[letter]
					+ '</label><br>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].num +' . '+ questions[i].q + '</div><br>'
				+ '<div class="answers">' + answers.join('') + '</div><br><br>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer) {

		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');

		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;

		// for each question...
		for (var i = 0; i < questions.length; i++) {

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

			// if answer is correct
			if (userAnswer === questions[i].correct) {
				// add to the number of correct answers
				numCorrect++;

				// color the answers green
				answerContainers[i].style.color = 'green';
			}
			// if answer is wrong or blank
			else {
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = 'SCORE : '+numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function() {
		showResults(questions, quizContainer, resultsContainer);
	}

}