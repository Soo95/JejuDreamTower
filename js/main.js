$(document).ready(function(){
    //main-slider
    $('.visual-bxslider').bxSlider({
        mode:'fade',
        auto:true,
        autoDelay:4000  //4초 기다림

    });
    //room-bxslider
    $('.bxslider').bxSlider({
        auto:true,
        autoDelay:4000  //4초 기다림
    });
    //background-move(윈도우 화면이 이동하면 배경이미지도 이동)
    $(window).scroll(function(){
        //윈도우 화면의 맨 왼쪽 위치값을 변수 y에 저장
        var y=$(window).scrollTop();
        //$(this).offset().top : accept 영역의 상단위치값
        //$(window).height() : 브라우저의 높이값
        //$(this).height(): 보고있는 영역의 높이값
        //parseInt(): 실수를 정수로 변환하는 메소드
        $('.sunset').filter(function(){
            return $(this).offset().top < ( y+$(window).height()) && $(this).offset().top + $(this).height() > y;
        }).css('background-position','0px '+parseInt(-y/3)+'px');
    });
    //top클릭하면 상단이동
    $('.top').click(function(){
        $('html,body').animate({scrollTop:0});
    });
});