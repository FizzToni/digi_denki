var playBtn = document.getElementById('play'),
    resetBtn = document.getElementById('reset'),
    drum_loop = document.getElementById('drum_loop'),
    piano_loop = document.getElementById('piano_loop'),
    test_button = document.getElementById('test_button'),
    audios = document.querySelectorAll('audio');
console.log(audios);

let playing = false;

playBtn.addEventListener('click', function() {
    drum_loop.loop = true;
    if(!playing) {
        drum_loop.play();
        playing = true;
    } else {
        drum_loop.pause();
        playing = false;
    }
}, false);

resetBtn.addEventListener('click', function() {
    piano_loop.loop = true;
    if(!playing) {
        piano_loop.play();
        playing = true;
    } else {
        piano_loop.pause();
        playing = false;
    }
}, false);

/*
resetBtn.addEventListener('mouseover', function() {
    piano_loop.play();
}, false);

resetBtn.addEventListener('mouseleave', function() {
    piano_loop.pause();
    piano_loop.currentTime = 0;
}, false);
*/

test_button.addEventListener('click', function() {
    div.transform.rotate(90);
}, false);

