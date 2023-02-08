var divColors = ["red", "green", "yellow", "blue"];

var red    = new Audio("sounds/red.mp3");
var green  = new Audio("sounds/green.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var blue   = new Audio("sounds/blue.mp3");
var wrong  = new Audio("sounds/wrong.mp3");



function start(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = divColors[randomNumber];
    $("#red").click(function(){
        EventListener("red", red, randomChosenColour);
    })
    $("#green").click(function(){
        EventListener("green", green, randomChosenColour);      
    })
    $("#yellow").click(function(){
        EventListener("yellow", yellow, randomChosenColour);
    })
    $("#blue").click(function(){
        EventListener("blue", blue, randomChosenColour);
    })
    $("#btn").click(function(){
        alert("Removing");
        $("#btn1").remove();
        $("#btn2").remove();
        $("h2").remove();
        start();
    })
}
function EventListener(colorName, color, randomChosenColour){
    
    if (randomChosenColour == colorName){
        color.play();
        $("#" + colorName).fadeOut().fadeIn();
        $("#p").append("<h1 id='h'>That was Correct!</h1> <button id='btn1'> Play again!</button>");
    }
    else {
        wrong.play();
        $("#p").append("<h1 id='H'>That was Incorrect!</h1> <button id='btn2'> Try again?</button>");
    }
}
start();
