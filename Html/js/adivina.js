const input = document.querySelector("#input")
const button = document.querySelector("#adivina")
let aleatorio = Math.round(Math.random()*100);

//FUNCION ANONIMA ES LA FORMA MAS OPTIMA COMO SE USAN
button.addEventListener("click",(e)=>{
    if(input.value < aleatorio){
        alert("Mas arriba");
    }
    
    else{if(input.value > aleatorio){
        alert("Mas abajo");
    }
    else{
        alert("Ganaste!!!!!!!!!!!!!!!1")
    }
    }
});