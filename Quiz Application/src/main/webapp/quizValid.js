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
				'<div class="question">' + questions[i].num + ' . ' + questions[i].q + '</div><br>'
				+ '<div class="answers">' + answers.join('') + '</div><br><div class="required"></div><br>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer) {
		var unAnswered = false;
		var answerContainers = quizContainer.querySelectorAll('.answers');
		var statement = quizContainer.querySelectorAll('.required');

		var userAnswer = '';
		var numCorrect = 0;

		for (var i = 0; i < questions.length; i++) {

			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
			
			if (userAnswer === questions[i].correct) {
				numCorrect++;
				answerContainers[i].style.color = 'green';
			} else if (userAnswer === undefined) {
				unAnswered=true;
                statement[i].innerHTML = '*answer not chosen'+'<br>';
                statement[i].style.color = 'red';
			}
			else {
				answerContainers[i].style.color = 'red';
			}
		}
		if(!unAnswered){
		resultsContainer.innerHTML = 'SCORE : ' + numCorrect + ' out of ' + questions.length;
		}else{
			resultsContainer.innerHTML='Some questions are not answered..'
		}
	}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function() {
		showResults(questions, quizContainer, resultsContainer);
	}

}