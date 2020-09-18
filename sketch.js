var form,game;
var playerCount;
var gameState=0;
var database;
var quiz;
var questions, quizContainer, resultsContainer, submitButton;
function preload() {
    melon_img = loadImage("images/melon.png");
    apple_img = loadImage("images/apple2.png");
    banana_img = loadImage("images/banana2.png");
    orange_img = loadImage("images/orange2.png");
}

function setup(){
canvas = createCanvas(displayWidth-25,displayHeight-60);
database = firebase.database();
    game=new Game();
    game.start();
   
   
}
    

function draw(){
    
    background(255);

    
        game.update(1);
      

    if(gameState === 1){
        game.play();
       // quiz = new Questions();
        //quiz.generateQuiz(questions, quizContainer, resultsContainer, submitButton);
      }

  
   
    
}