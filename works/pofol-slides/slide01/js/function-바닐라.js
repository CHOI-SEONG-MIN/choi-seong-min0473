/**
 * indicator(a태그) 돔 선택
 * 사용자가 a 태그를 클릭! -> a태그에 대한 click 이벤트 구문
 * a태그의 기본기능 작동 방지
 * 
 * 이번에 클릭한 인디케이터의 index를 구함
 * 컨테이너 돔 선택하고 이동 -> left 좌표 변환
 * 
 * 이번에 클릭한 인디케이터에 .on을 붙여서 활성화 표시
 * 
 * 이전, 다음 버튼 클릭시 인덱스번호 추출
 */

const $indicators = document.querySelectorAll('.slides>.slides-pagination>li>a');
const $container = document.querySelector('.slides>.slides-container');
const $btnPrev = document.querySelector('.slides>.slides-navigation.prev');
const $btnNext = document.querySelector('.slides>.slides-navigation.next');

let nowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스 번호

//인디케이터에 대한 클릭이벤트 구문
$indicators.forEach(function($indicator, idx){
    $indicator.addEventListener('click', function(evt){
        evt.preventDefault();

        nowIdx = idx;
        
        //컨테이너 이동
        $container.style.left = -1120*nowIdx + 'px';

        //활성화표시
        $indicators.forEach(function(anchor, actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });
    });
});


//이전버튼에 대한 클릭이벤트 구문
$btnPrev.addEventListener('click', function(evt){
    evt.preventDefault();

    /**
     *   nowIdx 
     *     0    ->    4
     * 
     *     4    ->    3
     *     3    ->    2
     *     2    ->    1 
     *     1    ->    0
     * 
     *     0    ->    4
     */

    if(nowIdx>0){
        nowIdx--;
    }else{
        nowIdx=4;
    }

    //컨테이너 이동
    $container.style.left = -1120*nowIdx + 'px';


    //활성화표시
    $indicators.forEach(function(anchor, actIdx){
        anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
    });

});


//다음버튼에 대한 클릭이벤트 구문
$btnNext.addEventListener('click', function(evt){
    evt.preventDefault();

    /**
     *   nowIdx 
     *     0    ->    1
     *     1    ->    2
     *     2    ->    3
     *     3    ->    4
     *  
     *     4    ->    0
     */
    
    if(nowIdx<4){
        nowIdx++;
    }else{
        nowIdx=0;
    }

    //컨테이너 이동
    $container.style.left = -1120*nowIdx + 'px';


    //활성화표시
    $indicators.forEach(function(anchor, actIdx){
        anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
    });
 
});