$(document).ready(function(){
    
    /* resize 관련 */
    let ww = $(window).width();
    let wh = $(window).height();
    let pc_menu_w = $('.pc_menu').width();
    
    $('.pc_sub_menu').css({ width: pc_menu_w, });
    $('section').css({ height: wh, });
    $('.text_box').css({ width: ww * 0.7, });
    
    $(window).resize(function(){
        ww = $(window).width();
        wh = $(window).height();
        pc_menu_w = $('.pc_menu').width();
        
        $('.pc_sub_menu').css({ width: pc_menu_w, });
        $('section').css({ height: wh, });
        $('.text_box').css({ width: ww * 0.7, });
    });
    
    /* scroll 관련 */
    let scrl_top = $(window).scrollTop();
    
    $(window).scroll(function(){
        
        scrl_top = $(window).scrollTop();
        
        if( scrl_top < ($('.sec_2').offset().top-500) ){
            $('.left_go_list').removeClass('go_orion go_choco go_market go_doctor go_jeju');
            $('.left_go_list').eq(0).addClass('go_orion')
        }else if( scrl_top >= ($('.sec_2').offset().top-500) && scrl_top < ($('.sec_3').offset().top-500) ){
            $('.left_go_list').removeClass('go_orion go_choco go_market go_doctor go_jeju');
            $('.left_go_list').eq(1).addClass('go_choco')
        }else if( scrl_top >= ($('.sec_3').offset().top-500) && scrl_top < ($('.sec_4').offset().top-500) ){
            $('.left_go_list').removeClass('go_orion go_choco go_market go_doctor go_jeju');
            $('.left_go_list').eq(2).addClass('go_market')
        }else if( scrl_top >= ($('.sec_4').offset().top-500) && scrl_top < ($('.sec_5').offset().top-500) ){
            $('.left_go_list').removeClass('go_orion go_choco go_market go_doctor go_jeju');
            $('.left_go_list').eq(3).addClass('go_doctor')
        }else if( scrl_top >= ($('.sec_5').offset().top-500) ){
            $('.left_go_list').removeClass('go_orion go_choco go_market go_doctor go_jeju');
            $('.left_go_list').eq(4).addClass('go_jeju')
        }
        
    });
    
}); //end