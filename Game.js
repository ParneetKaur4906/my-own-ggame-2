class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
            
        });
    }


   


start(){
    if(gameState===0){
        form=new Form();
        form.display();
    }
   /* if(gameState===1){
        var watermelon = createSprite(300,200,50,50);
       watermelon.addImage(melon_img);
       var orange = createSprite(400,200,70,70);
       orange.addImage(orange_img);
       var banana = createSprite(350,300,80,80);
       banana.addImage(banana_img);
       var apple = createSprite(450,300,90,90);
       apple.addImage(apple_img);
       drawSprites();
       
   }
   */
}
showQuestions(questions, quizContainer){
     
            
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];

        // for each available answer to this question...
        for(letter in questions[i].answers){

            // ...add an html radio button
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
        }

        // add this question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');

}

showResults(questions, quizContainer, resultsContainer){
	
    // gather answer containers from our quiz
    var answerContainers = this.quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
 
}
generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    /* showQuestions(questions, quizContainer){
            // code will go here
        }
    
        showResults(questions, quizContainer, resultsContainer){
            // code will go here
        }
        */
    
        // show the questions
        showQuestions(questions, quizContainer);
    
        // when user clicks submit, show results
        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        }
    }
    
play(){
    console.log("Hello")
    form.hide();
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
     var myQuestions = [
        {
            question: "What is 10/2?",
            answers: {
                a: '3',
                b: '5',
                c: '115'
            },
            correctAnswer: 'b'
        },
        {
            question: "What is 30/3?",
            answers: {
                a: '3',
                b: '5',
                c: '10'
            },
            correctAnswer: 'c'
        }
    ];
    generateQuiz(questions, quizContainer, resultsContainer, submitButton);
}

}
    