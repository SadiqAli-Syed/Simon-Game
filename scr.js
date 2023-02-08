var divColors = ["red", "green", "yellow", "blue"];

var red    = new Audio("DJ DJ Sounds/red.mp3");
var green  = new Audio("DJ DJ Sounds/green.mp3");
var yellow = new Audio("DJ DJ Sounds/yellow.mp3");
var blue   = new Audio("DJ DJ Sounds/blue.mp3");
var wrong  = new Audio("DJ DJ Sounds/wrong.mp3");



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
}
function EventListener(colorName, color, randomChosenColour){
    
    if (randomChosenColour == colorName){
        color.play();
        $("#" + colorName).fadeOut().fadeIn();
        $("#p").append("<button id='btn1'> <h2> Play again!</h2></button>");
        $("#p").append("<h2 id='h'>That was Correct!</h2> ");
    }
    else {
        wrong.play();
        $("#p").append("<button id='btn1'> <h2> Play again!</h2></button>");
        $("#p").append("<h2 id='h'>That was Correct!</h2> ");
    }
    $("#btn1").click(function(){
        $("#btn1").remove();
        $("#btn2").remove();
        $("h2").remove();
        start();
    })
    $("#btn1").click(function(){
        alert("Removing");
        $("#btn1").remove();
        $("#btn2").remove();
        $("h2").remove();
        start();
    })
}

// Kindalu Starts Here
start();
