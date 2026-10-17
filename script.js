
const textToType = "Hello! I am Raahil Aalam. I see coding as something to do in my freetime and as something that is very fun. Unlike me, many people are obsessed with games, but I just usually play a game a couple of times then it gets boring. But coding for me brings new oppertunities every time you touch the keyboard."; 
const speed = 40; 
let index = 0; 

function typeWriter() { 
    const element = document.getElementById("typewriter-text");
    if (!element) return; 

    if (index < textToType.length) { 
        element.innerHTML += textToType.charAt(index); 
        index++; 
        setTimeout(typeWriter, speed); 
    } 
} 


const textToType2 = "I have completed 2 projects yet. AstroSpark WebOS and NovaSpark Dev (this project!) I am continuing to create more projects since I love to code."; 
const speed2 = 40; 
let index2 = 0; 

function typeWriter2() { 
    const element2 = document.getElementById("typewriter-text2");
    if (!element2) return;

    if (index2 < textToType2.length) { 
        element2.textContent += textToType2.charAt(index2); 
        index2++; 
        setTimeout(typeWriter2, speed2); 
    } 
} 

window.addEventListener("load", () => {
    typeWriter();
    typeWriter2();
});
