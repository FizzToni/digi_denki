let audios = document.querySelectorAll('audio');
console.log(audios);

let lead_1_img = document.getElementById('lead_1'),
    lead_2_img = document.getElementById('lead_2'),
    ambience_img = document.getElementById('ambience'),
    drums_img = document.getElementById('drums'),
    clarinet_img = document.getElementById('clarinet'),
    voice_img = document.getElementById('voice'),

    lead_1_audio = document.getElementById('lead_1_loop'),
    lead_2_audio = document.getElementById('lead_2_loop'),
    ambience_audio = document.getElementById('ambience_loop'),
    drums_audio = document.getElementById('drums_loop'),
    clarinet_audio = document.getElementById('clarinet_loop'),
    voice_audio = document.getElementById('voice_loop'),

    init_button = document.getElementById('initiate'),
    init_window = document.getElementById('floating_window'),
    main_window = document.getElementById('main_window'),

    /* animation start */
    lead_1_animation = document.getElementById('lead_1_animation'),

    /* for hover test */
    test_button = document.getElementById('test'),
    piano_hover = document.getElementById('piano_loop')
;

init_button.addEventListener('click', function(){
    lead_1_audio.volume = 0;
    lead_2_audio.volume = 0;
    ambience_audio.volume = 0;
    drums_audio.volume = 0;
    clarinet_audio.volume = 0;
    voice_audio.volume = 0;

    lead_1_audio.loop = true;
    lead_2_audio.loop = true;
    ambience_audio.loop = true;
    drums_audio.loop = true;
    clarinet_audio.loop = true;
    voice_audio.loop = true;

    lead_1_audio.play();
    lead_2_audio.play();
    ambience_audio.play();
    drums_audio.play();
    clarinet_audio.play();
    voice_audio.play();

    main_window.style.filter = 'blur(0px)';
    init_window.style.display = 'none';


})

lead_1_img.addEventListener('click', function() {
    lead_1_audio.volume = .3;
    lead_1_animation.style.display = 'flex';
    }, false);

lead_2_img.addEventListener('click', function() {
    lead_2_audio.volume = .3;

}, false);

ambience_img.addEventListener('click', function() {
    ambience_audio.volume = .3;
}, false);

drums_img.addEventListener('click', function() {
    drums_audio.volume = 1;
}, false);

voice_img.addEventListener('click', function() {
    voice_audio.volume = .5;
}, false);

clarinet_img.addEventListener('click', function() {
    clarinet_audio.volume = .3;
}, false);


/* HOVER EFFECT */

test_button.addEventListener('mouseover', function() {
    piano_hover.volume = 1;
    piano_hover.play();
}, false);

/*
test_button.addEventListener('mouseleave', function() {
    fadeOut(piano_hover);
    piano_hover.currentTime = 0;
}, false);
*/