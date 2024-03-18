let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function Point(x, y){
    this.x = x;
    this.y = y;
    this.findMid = function(otherPoint){
        return new Point((this.x+otherPoint.x)/2, (this.y+otherPoint.y)/2);
    }
}

let p1 = new Point(250, 0);
let p2 = new Point(500, 500);
let p3 = new Point(0, 500);
let currPoint = p1.findMid(p2);

function rollDice(){
    let value = Math.ceil(Math.random()*6);
    return value;
}

function executeProgram(){
    let num = rollDice();
    if(num === 1 || num === 2){
        currPoint = currPoint.findMid(p1);
    }
    else if(num === 3 || num === 4){
        currPoint = currPoint.findMid(p2);
    }
    else{
        currPoint = currPoint.findMid(p3);
    }
    ctx.beginPath();
    ctx.arc(currPoint.x, currPoint.y, 2, 0, 2*Math.PI);
    ctx.fillStyle = selectColor();
    ctx.fill();
}

function simulate(){
    for(let i=0; i<100; i++){
        executeProgram();
    }
}

window.addEventListener("keypress", event =>{
    if(event.key === "R"){
        executeProgram();
    }
})


window.onkeydown = function(event){
    if(event.key === "S"){
        simulate();
    }
}

function selectColor(){
    let box = document.getElementById("colorbox");
    if(box.checked){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return ("#" + randomColor);
    }
    else{
        return "black";
    }
}

let timer = null;
document.getElementById("b3").onclick = function(){
    if(timer){
        clearInterval(timer);
    }
    timer = setInterval(chaosTimer, 100);
}

function chaosTimer(){
    executeProgram();
}


document.getElementById("b4").onclick = function(){
    clearInterval(timer);
}


document.body.addEventListener("keydown", event =>{
    if(event.key === " "){
        if(!timer){
            timer = setInterval(chaosTimer, 100);
        }else{
            clearInterval(timer);
            timer = null;
        }

        
    }
})







