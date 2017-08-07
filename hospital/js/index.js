/**
 * Created by sawyer on 2017-07-19.
 */
$(function () {
    $('.header-list ul li:first-child a').css('color','#ff3688');
    //轮播
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        //paginationHide :true,
        loop:true,
        autoplay:3000,
        autoplayDisableOnInteraction : false,
        speed:1000,
    });
    $('.pregnancy-title ul li').click(function () {
        $('.pregnancy-title ul li .pregnancy-span').css({"border-color":"#ffffff","color":"#323232"});
        $(this).children(".pregnancy-span").css({"border-color":"#6031ba","color":"#6031ba"});
    });
    //咨询按钮
    $(".click-btn").hover(function () {
        $(this).addClass("hov");

    },function () {
        $(this).removeClass("hov");
    });
    $('.click-btn').click(function () {
        $(this).removeClass("hov").unbind('hover');
        $('.click-btn').removeClass("btn-click").addClass("btn-click-not");
        $(this).removeClass("btn-click-not").addClass("btn-click");
        var imgId = $(this).attr("imgid");
        if(imgId=='2')
        {
            location.href="./auxiliaryTool.html?imgid=2";
        }else if(imgId=="3")
        {
            location.href="./auxiliaryTool.html?imgid=3";
        }else
        {
            location.href="./auxiliaryTool.html?imgid=1";
        }
    });
//    more
    $(".pregnancy-title p").click(function () {
       location.href="./projectDetails.html";
    });
});
// var classifyInfoHtml=function () {
//     var html=' <div class="pregnancy-title">'+
//         '<img src="images/baby.jpg" alt="" title="备孕">'+
//         '<ul>'+
//         '<li>排卵相关</li>'+
//         '<li>月经不调</li>'+
//         '<li>不孕筛查</li>'+
//         '<li>妇科问题</li>'+
//         '</ul>'+
//         '<p>More ></p>'+
//         '</div>';
//     return html;
// }