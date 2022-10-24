const $indicator = $('.slides>.slides-pagination>li>a');
const $container = $('.slides>.slides-container');
const $btnPrev = $('.slides>.slides-navigation.prev');
const $btnNext = $('.slides>.slides-navigation.next');

let nowIdx = 0;

//컨테이너이동, 활성화표시 함수
const moveFn = function(){
    $container.stop().animate({left:-1120*nowIdx},400);
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
};

//인디케이터에 대한 click 이벤트 구문 
$indicator.on('click', function(evt){
    evt.preventDefault();

    //보여질 슬라이드에 대한 index 추출
    nowIdx = $indicator.index(this);

    moveFn();//컨테이너이동, 활성화표시 함수호출
});


//이전버튼에 대한 click 이벤트 구문 
$btnPrev.on('click', function(evt){
    evt.preventDefault();

    //보여질 슬라이드에 대한 index 추출
    nowIdx<1 ? nowIdx=4 : nowIdx--;

    moveFn();//컨테이너이동, 활성화표시 함수호출   
});


//다음버튼에 대한 click 이벤트 구문 
$btnNext.on('click', function(evt){
    evt.preventDefault();

    //보여질 슬라이드에 대한 index 추출
    nowIdx<4 ? nowIdx++ : nowIdx=0;

    moveFn();//컨테이너이동, 활성화표시 함수호출    
});