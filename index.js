
let buttons = document.querySelectorAll("button");

document.addEventListener("keypress", (evt)=>{
    console.log(evt.key);
    let letter= evt.key;
    fun(letter);
    animation(letter);
})


for(i=0; i<=buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        console.log(this);
    
        let keys = this.innerText;
    fun(keys);
    animation(keys);
    })
}

function fun(lol){
    switch (lol) {
        case "w":
            let tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
            case "a":
                let tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
    
                case "s":
                    let tom3= new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
    
                    case "d":
                        let tom4= new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
    
                        case "j":
                            let crash= new Audio("sounds/crash.mp3");
                            crash.play();
                            break;
    
                            case "k":
                                let kickbass= new Audio("sounds/kick-bass.mp3");
                                kickbass.play();
                                break;
    
                                case "l":
                                    let snare= new Audio("sounds/snare.mp3");
                                    snare.play();
                                    break;
    
        default:
            console.log(this.innerText);
            break;
    }
}

function animation(currentkey){
   let animate= document.querySelector("."+ currentkey);
     animate.classList.add("pressed");
     setTimeout(function(){
        animate.classList.remove("pressed");
     }, 200);
}








