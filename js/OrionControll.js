$(document).ready(function(){
    
    
    /* 히든 메뉴 */
    let menu_num = 0;
    
    $('.pc_menu_li>a').mouseenter(function(){
        $('.pc_hidden_menu').stop().slideDown(400);
    });
    
    $('header').mouseleave(function(){
        $('.pc_hidden_menu').stop().slideUp(400);
    });
    
    $('.sub_menu_li').mouseenter(function(){
        menu_num = $(this).index();
        $('.pc_menu_li').children('a').attr({ 
            style : '', 
        });
        $('.pc_menu_li').eq(menu_num).children('a').attr({ 
            style : 'color: #e3051a', 
        });
    }).mouseleave(function(){
        $('.pc_menu_li').children('a').attr({ 
            style : '', 
        });
    });
    
    $('.tab_sub_li').mouseenter(function(){
        menu_num = $(this).index();
        $('.tab_main_li').children('a').attr({ 
            style : '', 
        });
        $('.tab_main_li').eq(menu_num).children('a').attr({ 
            style : 'color: #e3051a', 
        });
    }).mouseleave(function(){
        $('.tab_main_li').children('a').attr({ 
            style : '', 
        });
    });
    
    /* 옆 메뉴 클릭 */
    let left_go_num = 0;
    $('.left_go_list').click(function(){
        
        left_go_num = $(this).index();
        
        if( left_go_num == 0 ){
            $('body, html').animate({ scrollTop: $('.sec_1').offset().top, });
        }else if( left_go_num == 1 ){
            $('body, html').animate({ scrollTop: $('.sec_2').offset().top, });
        }else if( left_go_num == 2 ){
            $('body, html').animate({ scrollTop: $('.sec_3').offset().top, });
        }else if( left_go_num == 3 ){
            $('body, html').animate({ scrollTop: $('.sec_4').offset().top, });
        }else if( left_go_num == 4 ){
            $('body, html').animate({ scrollTop: $('.sec_5').offset().top, });
        }
        
    });
    
    /* scroll */
    let event_scroll = false;
    let wheeltime = false;
    let delta = 0;
    
    $('section').each(function(){
        /* 마우스 휠 */
        $(this).on('mousewheel DOMMouseScroll', function(e){
            
            if(wheeltime == true){ return ; }
            
            setInterval(function(){
                wheeltime = false;
            }, 500);
            wheeltime = true;
            
            const E = e.originalEvent;
            
            if(E.detail)
                delta = E.detail * (-40);
            else
                delta = E.wheelDelta;
            
            if(delta < 0 && !event_scroll ){
                event_scroll = true;
                $('html, body').stop(0, 0).animate({
                    scrollTop: $(this).next().offset().top ,
                }, 500, function(){
                    event_scroll = false;
                });
            }else if(delta > 0 && !event_scroll && $(window).scrollTop() != 0){
                event_scroll = true;
                $('html, body').stop(0, 0).animate({
                    scrollTop: $(this).prev().offset().top ,
                }, 500, function(){
                    event_scroll = false;
                });
            }
            
        });
        
    });
    
    /* tab_click */
    let click_pan = false;
    $('.ham').click(function(){
        if(!click_pan){
            $(this).attr({
                src: 'img/common/close.png',
            });
            click_pan = true;
        }else{
            $(this).attr({
                src: 'img/common/ham.png',
            });
            click_pan = false;
        }
        
        $('.tab_menu').slideToggle(500);
    });
    
}); //end