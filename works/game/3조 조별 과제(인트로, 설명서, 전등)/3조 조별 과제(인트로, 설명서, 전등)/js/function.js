const $goWrap = $(".goWrap"); //게임 페이지로 넘어가는 버튼
const $btnStart = $(".start"); //시작버튼
const $mosquito = $(".mosquito"); //모기
const $score = $(".score"); //잡은 모기
const $btnLevel = $(".levelchk"); //레벨버튼 일괄
const $timer = $(".count"); //타이머
const $frame = $(".game > .frame"); //배경이미지
const $light = $(".light"); //전등

let intervalKey;
let timerIntevalKey;

const bgImg = [
    "./images/room1.jpg",
    "./images/room2.jpg",
    "./images/room3.jpg",
    "./images/room4.jpg",
    "./images/room5.jpg",
];

let level = null; // 난이도 (모기이동간격)
let timer = 10;
let score = 0; //잡은모기수

let isStart = false; // 게임중 시작버튼 재동작 방지

/* 게임 페이지로 넘어가는 버튼 */
$goWrap.on("click", function(evt) {
  evt.preventDefault();

  $('#wrap_intro').hide();
  $('#wrap').show();
});

/* 난이도 선택 */
$btnLevel.on("click", function () {
    if ($(this).hasClass("Lv_1")) {
        level = 1200;
        $(this).addClass("on").siblings().removeClass("on");
    } else if ($(this).hasClass("Lv_2")) {
        level = 1000;
        $(this).addClass("on").siblings().removeClass("on");
    } else {
        level = 800;
        $(this).addClass("on").siblings().removeClass("on");
    }
});

/* 게임시작 */
$btnStart.on("click", function () {
    if (level === null) {
        alert("난이도를 선택해주세요");
        return;
    }

    //게임중 시작버튼 재동작 방지
    if (isStart) return;

    //점수 초기화
    score = 0;
    $score.children("span").text(score);

    //배경이미지 변경
    const randomNum = Math.floor(Math.random() * 5);
    $frame.css({ backgroundImage: `url(${bgImg[randomNum]})` });

    //모기 랜덤 위치 생성
    intervalKey = setInterval(() => {
        isStart = true;

        $mosquito.show();

        //랜덤좌표
        const coordX = Math.floor(Math.random() * 940);
        const coordY = Math.floor(Math.random() * 650);

        $mosquito.stop().animate({ top: coordY, left: coordX }, 700);
    }, level);

    //타이머 동작
    timerIntevalKey = setInterval(() => {
        timer--;
        $timer.text(timer);
    }, 1000);

    //게임종료 (리셋)
    setTimeout(() => {
        clearInterval(intervalKey);
        clearInterval(timerIntevalKey);
        score = 0;
        timer = 10;
        $timer.text(timer);
        isStart = false;
        $mosquito.hide();

        alert('게임 종료!');
    }, 10000);
});

/* 모기클릭시 이벤트 */
$mosquito.on("click", function () {
    // 점수집계
    score += 1;
    $score.children("span").text(score);
});

/* 마우스 이벤트 */
$frame.on("mousemove", function () {
    $(this).css({ cursor: "url(./images/cursor.png), auto" });
});

$frame.on("click", function () {
    $(this).css({ cursor: "url(./images/strike.png), auto" });
});

/* 전등 */
$light.on("click", function(evt) {
  evt.preventDefault();

  $light.toggleClass('off');

  if($light.hasClass('off')) {  // 끄면
    $light.css({backgroundPositionX: -328});
    $frame.append("<span class='filter'></span>");
  } else {  // 켜면
    $light.css({backgroundPositionX: -125});
    $frame.children().remove(".filter");
  }
});