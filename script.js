var vid = document.getElementById("myVideo");

function playPause() {
    if (document.getElementById("uno").innerHTML == "play_circle") {
        vid.play();
        document.getElementById("uno").innerHTML = "pause_circle"
    } else {
        vid.pause();
        document.getElementById("uno").innerHTML = "play_circle"
    }
}

function muteNoMute() {
    if (document.getElementById("dos").innerHTML == "volume_up") {
        document.getElementById("dos").innerHTML = "volume_off"
        vid.muted = true;
    } else {
        document.getElementById("dos").innerHTML = "volume_up"
        vid.muted = false;
    }
}