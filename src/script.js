var playBtn = document.getElementById('play'),
    resetBtn = document.getElementById('reset'),
    heartbeat = document.getElementById('guitar'),
    heartbeat2 = document.getElementById('strange'),
    audios = document.querySelectorAll('audio');
console.log(audios);

let playing = false;


playBtn.addEventListener('click', function() {
    heartbeat.loop = true;
    if(!playing) {
        heartbeat.play();
        playing = true;
    } else {
        heartbeat.pause();
        playing = false;
    }
}, false);

resetBtn.addEventListener('click', function() {
    heartbeat2.loop = true;
    if(!playing) {
        heartbeat2.play();
        playing = true;
    } else {
        heartbeat2.pause();
        playing = false;
    }
}, false);

/*
resetBtn.addEventListener('mouseover', function() {
    heartbeat2.play();
}, false);

resetBtn.addEventListener('mouseleave', function() {
    heartbeat2.pause();
    heartbeat2.currentTime = 0;
}, false);
*/
