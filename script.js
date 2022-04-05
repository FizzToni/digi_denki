/* Song Elements */
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
    lead_1_animation = document.getElementById('lead_1_animation');

/* Single Notes */
let Ais1_audio = document.getElementById('Ais1'),

    C2_audio = document.getElementById('C2'),
    Dis2_audio = document.getElementById('Dis2'),
    F2_audio = document.getElementById('F2'),
    G2_audio = document.getElementById('G2'),
    Ais2_audio = document.getElementById('Ais2'),

    C3_audio = document.getElementById('C3'),
    Dis3_audio = document.getElementById('Dis3'),
    F3_audio = document.getElementById('F3'),
    G3_audio = document.getElementById('G3'),
    Ais3_audio = document.getElementById('Ais3'),

    C4_audio = document.getElementById('C4'),
    Dis4_audio = document.getElementById('Dis4'),
    F4_audio = document.getElementById('F4'),
    G4_audio = document.getElementById('G4'),
    Ais4_audio = document.getElementById('Ais4'),

    C5_audio = document.getElementById('C5'),
    Dis5_audio = document.getElementById('Dis5'),
    F5_audio = document.getElementById('F5'),

    Ais1_img = document.getElementById('Ais1_img'),

    C2_img = document.getElementById('C2_img'),
    Dis2_img = document.getElementById('Dis2_img'),
    F2_img = document.getElementById('F2_img'),
    G2_img = document.getElementById('G2_img'),
    Ais2_img = document.getElementById('Ais2_img'),

    C3_img = document.getElementById('C3_img'),
    Dis3_img = document.getElementById('Dis3_img'),
    F3_img = document.getElementById('F3_img'),
    G3_img = document.getElementById('G3_img'),
    Ais3_img = document.getElementById('Ais3_img'),

    C4_img = document.getElementById('C4_img'),
    Dis4_img = document.getElementById('Dis4_img'),
    F4_img = document.getElementById('F4_img'),
    G4_img = document.getElementById('G4_img'),
    Ais4_img = document.getElementById('Ais4_img'),

    C5_img = document.getElementById('C5_img'),
    Dis5_img = document.getElementById('Dis5_img'),
    F5_img = document.getElementById('F5_img');





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
Ais1_img.addEventListener('mouseover', function() {
    Ais1_audio.currentTime = 0;
    Ais1_audio.play();
}, false);

C2_img.addEventListener('mouseover', function() {
    C2_audio.currentTime = 0;
    C2_audio.play();
}, false);

Dis2_img.addEventListener('mouseover', function() {
    Dis2_audio.currentTime = 0;
    Dis2_audio.play();
}, false);

F2_img.addEventListener('mouseover', function() {
    F2_audio.currentTime = 0;
    F2_audio.play();
}, false);

G2_img.addEventListener('mouseover', function() {
    G2_audio.currentTime = 0;
    G2_audio.play();
}, false);

Ais2_img.addEventListener('mouseover', function() {
    Ais2_audio.currentTime = 0;
    Ais2_audio.play();
}, false);

C3_img.addEventListener('mouseover', function() {
    C3_audio.currentTime = 0;
    C3_audio.play();
}, false);

Dis3_img.addEventListener('mouseover', function() {
    Dis3_audio.currentTime = 0;
    Dis3_audio.play();
}, false);

F3_img.addEventListener('mouseover', function() {
    F3_audio.currentTime = 0;
    F3_audio.play();
}, false);

G3_img.addEventListener('mouseover', function() {
    G3_audio.currentTime = 0;
    G3_audio.play();
}, false);

Ais3_img.addEventListener('mouseover', function() {
    Ais3_audio.currentTime = 0;
    Ais3_audio.play();
}, false);

C4_img.addEventListener('mouseover', function() {
    C4_audio.currentTime = 0;
    C4_audio.play();
}, false);

Dis4_img.addEventListener('mouseover', function() {
    Dis4_audio.currentTime = 0;
    Dis4_audio.play();
}, false);

F4_img.addEventListener('mouseover', function() {
    F4_audio.currentTime = 0;
    F4_audio.play();
}, false);

G4_img.addEventListener('mouseover', function() {
    G4_audio.currentTime = 0;
    G4_audio.play();
}, false);

Ais4_img.addEventListener('mouseover', function() {
    Ais4_audio.currentTime = 0;
    Ais4_audio.play();
}, false);

C5_img.addEventListener('mouseover', function() {
    C5_audio.currentTime = 0;
    C5_audio.play();
}, false);

Dis5_img.addEventListener('mouseover', function() {
    Dis5_audio.currentTime = 0;
    Dis5_audio.play();
}, false);

F5_img.addEventListener('mouseover', function() {
    F5_audio.currentTime = 0;
    F5_audio.play();
}, false);




/*
test_button.addEventListener('mouseleave', function() {
    fadeOut(piano_hover);
    piano_hover.currentTime = 0;
}, false);
*/
