
const text = "Software QA Engineer"; 
let i = 0;
const speed = 100; 

function typeWriter() {
    if (i < text.length) {
    document.getElementById('typewriter-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    } else {
    i = 0;
    document.getElementById('typewriter-text').innerHTML = '';
    setTimeout(typeWriter, speed * 5); 
    }
}

window.onload = function() {
    typeWriter();
};

