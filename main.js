document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button.btn').addEventListener('click', function () {
        // Question 1
        const question1Answer = document.querySelector('input[name="question1"]:checked').value;
        const correctAnswer1 = 'b'; // Correct answer for question 1

        // Question 2
        const question2Answer = document.getElementById('question2').value;
        const correctAnswer2 = 'a'; // Correct answer for question 2

        // Question 3
        const question3Answers = document.querySelectorAll('input[name="question3"]:checked');
        const selectedAnswers3 = [];
        question3Answers.forEach(answer => selectedAnswers3.push(answer.value));
        const correctAnswers3 = ['a', 'c']; // Correct answers for question 3

        // Check answers
        let score = 0;
        if (question1Answer === correctAnswer1) {
            score++;
        }
        if (question2Answer === correctAnswer2) {
            score++;
        }
        if (selectedAnswers3.length === correctAnswers3.length && selectedAnswers3.every((value, index) => value === correctAnswers3[index])) {
            score++;
        }

        // Display result on the webpage
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Your score is ${score}/3`;
    });
});
