const textToType = "Hello! I am Raahil Aalam. I see coding as something to do in my freetime and as something that is very fun. Unlike me, many people are obsessed with games, but I just usually play a game a couple of times then it gets boring. But coding for me brings new oppertunities every time you touch the keyboard.";
const speed = 40; 
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    document.getElementById("typewriter-text").innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
