/**
 * Created by sawyer on 2017-07-21.
 */
$(function () {
    $(".project-filter-box ul li").click(function () {
        $(this).css({"color":"#6031ba","border-color":"#6031ba"}).siblings().css({"color":"#323232","border-color":"#d9d9d9"});
        location.href="";
    });
    $(".hospital-filter-info .hospital-info-title span").click(function () {
        location.href="./hospitalDetails.html";
    });
    $(".hospital-doctor-float li").click(function () {
        location.href="./doctorDetails.html";
    });
    //滑动设置
    $(window).scroll(function(){
        var $s_top;
        $s_top = $(window).scrollTop();
        var mediafixed = $('.hospital-doctor-float dl');
        if($s_top >393)
        {
            mediafixed.css({'position':'fixed','top':'20px'});
        } else
        {
            mediafixed.css({'position':'relative','top':'1.6rem'});
        }
    });
})