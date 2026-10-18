window.addEventListener('load', () => { 
    const element1 = document.getElementById('typewriter-text'); 
    if (element1) { 
        const text1 = "Hello! I am Raahil Aalam. I see coding as something to do in my freetime and as something that is very fun. Unlike me, many people are obsessed with games, but I just usually play a game a couple of times then it gets boring. But coding for me brings new opportunities every time you touch the keyboard."; 
        let index1 = 0; 
        function run1() { 
            if (index1 < text1.length) { 
                element1.innerHTML += text1.charAt(index1); 
                index1++; 
                setTimeout(run1, 40); 
            } 
        } 
        run1(); 
    } 

    const element2 = document.getElementById('typewriter-text2'); 
    if (element2) { 
        const text2 = "I have completed 2 projects yet. AstroSpark WebOS and NovaSpark Dev (this project!) I am continuing to create more projects since I love to code."; 
        let index2 = 0; 
        function run2() { 
            if (index2 < text2.length) { 
                element2.textContent += text2.charAt(index2); 
                index2++; 
                setTimeout(run2, 40); 
            } 
        } 
        run2(); 
    } 

    const element3 = document.getElementById('typewriter-text3'); 
    if (element3) { 
        const text3 = "My hobbies mainly consist of coding and tinkering with tech. I absolutly love coding, I usually do that in my freetime. I also like to fix and tinker with technology, I usually volunteer to help someone with their computer in school."; 
        let index3 = 0; 
        function run3() { 
            if (index3 < text3.length) { 
                element3.textContent += text3.charAt(index3); 
                index3++; 
                setTimeout(run3, 40); 
            } 
        } 
        run3(); 
    } 

    const element4 = document.getElementById('typewriter-text4'); 
    if (element4) { 
        const text4 = "You can contact me at raahilaalam0804@gmail.com and at Hack Club Slack @raahilaalam0804"; 
        let index4 = 0; 
        function run4() { 
            if (index4 < text4.length) { 
                element4.textContent += text4.charAt(index4); 
                index4++; 
                setTimeout(run4, 40); 
            } 
        } 
        run4(); 
    } 
});
