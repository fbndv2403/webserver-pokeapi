
let music = document.getElementById('music');
let boton = document.getElementById('boton');
count = 0;
music.volume = 0.1;
function presionar(){
    if(count == 0){
        count = 1;
        music.play();
    }else{
        count = 0;
        music.pause();
    }
}


    window.onload = presionar()

