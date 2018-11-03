/* CODING CHALLENGE
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {

    // 1. Build a function constructor called Question to describe a question.
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            // keep attention to THIS.answers[i]
            console.log(i + ' : ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer!');
        }
    }

    // 2. Create a couple of questions using the constructor
    var question01 = new Question(
        'Which of the following is NOT a primitive JavaScript data type?', 
        ['Number', 
        'Boolean',
        'Text',
        'Undefined'
        ], 
    2);

    var question02 = new Question(
        'A JavaScript operator is similar to a:',
        ['Variable',
        'Function',
        'Array',
        'Closure'],
    1);

    var question03 = new Question(
        'What do the expressions 1 == true and 1 === true return?',
        ['true and false, because == performs type coercion and === does not',
        'false and true, because == performs type coercion and === does not',
        'true and false, because === performs type coercion and == does not',
        'false and true, because === performs type coercion and == does not'],
    0);
    
    // 3. Store them all inside an array
    var questions = [question01, question02, question03];

    // 4. Select one random question and log it on the console
    var randomQ = Math.floor(Math.random() * questions.length);
    
    // We are using a method of another object without using call(), apply(), bind(). How is it possible?
    questions[randomQ].displayQuestion();
    
    // 5. Use the 'prompt' function to ask the user for the correct answer.
    var answer = parseInt(prompt('Please select the correct answer.', '0, 1, 2, 3'));
    
    questions[randomQ].checkAnswer(answer);

})(); // end IIFE