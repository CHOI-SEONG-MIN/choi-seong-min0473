//바닐라
if(true){
    const $btnPrev = document.querySelector('.slides-previous');
    const $btnNext = document.querySelector('.slides-next');    
    const $container = document.querySelector('.slides-container');

    $container.style.transition = 'all 0.4s ease-in-out';

        
    $btnPrev.addEventListener('click', function(evt){
        evt.preventDefault();

        $container.style.left = 160 + 'px';
        
        setTimeout(function(){            
            $container.style.transition = 'none';
            //DOM에 존재하는 요소를 첫번째 자식으로 이동(무엇을, 어디에)
            $container.insertBefore($container.lastElementChild, $container.firstElementChild);  
            $container.style.left = 0;      
            setTimeout(function(){
                $container.style.transition = 'all 0.4s ease-in-out';    
            },100);
        },400)    
    });
        
    $btnNext.addEventListener('click', function(evt){
        evt.preventDefault();

        $container.style.left = -160 + 'px';
        
        setTimeout(function(){            
            $container.style.transition = 'none';
            $container.appendChild($container.firstElementChild);
            $container.style.left = 0;      
            setTimeout(function(){
                $container.style.transition = 'all 0.4s ease-in-out';    
            },100);
        },400)    
    });
}

//제이쿼리
if(false){
    const $btnPrev = $('.slides-previous');
    const $btnNext = $('.slides-next');
    
    const $container = $('.slides-container');
    
    $btnPrev.on('click', function(evt){
        evt.preventDefault();
    
        $container.stop().animate({
            left:160
        },400,'easeInOutCubic',function(){
            $container.children('li').eq(8).prependTo($container);
            $container.css('left',0);
        });
    });
    
    
    $btnNext.on('click', function(evt){
        evt.preventDefault();
    
        $container.stop().animate({
            left:-160
        },400,'easeInOutCubic',function(){
            $container.children('li').eq(0).appendTo($container);
            $container.css('left',0);
        });
    })
    
}