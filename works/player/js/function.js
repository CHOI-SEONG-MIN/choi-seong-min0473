const $myvideo = document.getElementById('myvideo');

const $btnPlay = $('.play');
const $btnPause = $('.pause');
const $btnResume = $('.resume');

$btnPlay.on('click',  function(){
    $myvideo.load();
    $myvideo.play();
});

$btnPause.on('click', function(){
    $myvideo.pause();
});

$btnResume.on('click', function(){
    $myvideo.play();
});