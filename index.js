var listof = ["w", "a", "s", "d", "j", "k", "l"];
for (let index = 0; index < listof.length; index++) {
document.querySelector("button." + listof[index]).addEventListener("click",
function(){
    sound(listof[index]);
    buttonanimation(listof[index]);
  }

);
}
document.addEventListener("keydown",function(event)
{
    sound(event.key);
    buttonanimation(event.key);
}    
     

);

function sound(key)
{
   
        switch (key) {
            case "w":
              var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
    
              break;
            case "a":
              var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
    
              break;
            case "s":
              var audio = new Audio("sounds/tom-3.mp3");
              audio.play();
    
              break;
            case "d":
              var audio = new Audio("sounds/tom-4.mp3");
              audio.play();
    
              break;
            case "j":
              var audio = new Audio("sounds/snare.mp3");
              audio.play();
    
              break;
            case "k":
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
    
              break;
            case "l":
              var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
    
              break;
            default:
              break;
          }
    
          // if(listof[index]==="w"){
          //     document.querySelector("button."+listof[index]).style.color="White";
          // var audio = new Audio('sounds/tom-1.mp3');
          // audio.play();
    
          // }
        }
    

        function buttonanimation(currentkey) {
         
          document.querySelector("."+currentkey).classList.add("pressed");  
            setTimeout(function() {
                document.querySelector("."+currentkey).classList.remove("pressed");
            },100);


        }