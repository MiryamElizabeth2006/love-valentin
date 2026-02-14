const message = "Feliz San Valentín mi amor ❤️\n\nDesde que llegaste a mi vida todo es lindo\nGracias por existir, por tu sonrisa y por cada momento juntos.\n\nTe amo de aqui hasta la marin amor mio💕\n\nNunca te vayas de mi vida amor ❤️.";

let i = 0;

function openLetter(){
    document.querySelector(".envelope").classList.toggle("open");
    typeWriter();
}

function typeWriter(){
    if(i < message.length){
        document.getElementById("text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

function createHearts(){
    for(let i=0;i<20;i++){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="❤️ JOEL";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.animationDuration = (Math.random()*2+3)+"s";
        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);
    }
}