var mySong =document.getElementById("mySong");
var icon_play =document.getElementById("icon_play");

icon_play.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon_play.setAttribute("scr", "pause.png");

    }else{
        mySong.pause();
        icon_play.setAttribute("scr", "play.button.png");
    }
}