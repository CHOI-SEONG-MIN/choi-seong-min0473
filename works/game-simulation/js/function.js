/**
 	1. Start 버튼을 누르면 시작
	2. 10초후 게임 자동 종료
	3. 두더지의 좌표는 랜덤
		x : 100, 300, 500
		y : 100, 230, 360
		
	4. 두더지를 클릭하면 점수획득
	5. 두더지 이동시간은 사용자 입력
	
	score = 0;// 점수
	intervalID = null; //두더지 타이머
	
	음향효과 : 아야~! 왜때려~!
 */

    const $btnStart = $('button');//시작버튼
    const $comment = $('h2');//상단 메세지
    const $ddz = $('.frame');//두더지캐릭터
    const $score = $('strong');//점수
    
    let score = 0;
    let intervalID = null;
    
    $btnStart.on('click', function(){
        clearInterval(intervalID);
    
        score = 0;
        $score.text('0000점');
    
        intervalID = setInterval(function(){
    
            $comment.text('메롱~! 나 잡아 봐라~!');
    
            $ddz.children('img').attr({
                src : './images/ddz_normal.png'
            });
    
            //랜덤으로 100, 300, 500
            const coordX = 100 + Math.floor(Math.random()*3)*200;
    
            //랜덤으로 100, 230, 360
            const coordY = 100 + Math.floor(Math.random()*3)*130
    
            $ddz.css({
            display:'block',
            left:coordX,
            top:coordY
            }).stop()
            .animate({top:coordY-30},650)
            .animate({top:coordY},250);
    
        }, 900);
    
        setTimeout(function(){
            clearInterval(intervalID);
            $ddz.hide();
            $comment.text('START 버튼을 누르면 게임이 시작됩니다.');
        }, 10000)
    });
    
    $ddz.on('click', function(){
    
        score += 100;
        $score.text(score+'점');
    
        $(this).children("img").attr({
            src:'./images/ddz_shock.png'
        });
    
        $(this).css({
            cursor : 'url(./images/hammer_skew.png), auto'
        });
    
        $comment.text('아야~! 왜때려~! 제법인데...!');
    });
    
    $ddz.on('mouseover', function(){
        $ddz.css({cursor: 'crosshair'})
    })