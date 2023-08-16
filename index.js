let play=document.getElementById("play");
    function playMs(){
        let audio=new Audio("top-3.mp3");
        audio.play()
     }
     play.addEventListener("click",playMs);

let play1=document.getElementById("play1");
     function playMi(){
         let audio=new Audio("tom-1.mp3");
         audio.play()
      }
      play1.addEventListener("click",playMi); 

let play2=document.getElementById("play2");
    function playMu(){
        let audio=new Audio("snare.mp3");
        audio.play()
     }
     play2.addEventListener("click",playMu);

let play3=document.getElementById("play3");
     function playMc(){
         let audio=new Audio("tom-1.mp3");
         audio.play()
      }
      play3.addEventListener("click",playMc);

let play4=document.getElementById("play4");
      function playMg(){
          let audio=new Audio("kick-bass.mp3");
          audio.play()
       }
       play4.addEventListener("click",playMg);

let play5=document.getElementById("play5");
       function playMs(){
           let audio=new Audio("tom-3.mp3");
           audio.play()
        }
        play5.addEventListener("click",playMs);

let play6=document.getElementById("play6");
        function playMv(){
            let audio=new Audio("crash.mp3");
            audio.play()
         }
         play6.addEventListener("click",playMv);

// for button sound                for button sound                      for button sound


document.addEventListener("keydown", keySound);

         function keySound(event) {
             makeSound(event.key);
             buttonAnimation(event.key);
         }
         

function makeSound(key) {
            switch (key) {
                case "w":
                    var audio = new Audio("tom-3.mp3");
                    audio.play();
                    break;
                case "a":
                    var audio = new Audio("tom-1.mp3");
                    audio.play();
                    break;
                case "s":
                    var audio = new Audio("snare.mp3");
                    audio.play();
                    break;
                case "d":
                    var audio = new Audio("tom-1.mp3");
                    audio.play();
                    break;
                case "j":
                    var audio = new Audio("kick-bass.mp3");
                    audio.play();
                    break;
                case "k":
                    var audio = new Audio("tom-3.mp3");
                    audio.play();
                    break;
                case "l":
                    var audio = new Audio("crash.mp3");
                    audio.play();
                    break;
                default:
                    alert("Wrong Key Pressed!")
                    break;
            }
}

