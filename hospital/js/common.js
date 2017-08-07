/**
 * Created by sawyer on 2017-07-19.
 */
$(function () {
    $('header').html(headerHtml);
    $('footer').html(footerHtml);
    $(".header-logo").click(function () {
        location.href="./index.html";
    })
    $(".filter ul li").click(function () {
        console.log("11");
       $(this).css({"color":"#6031ba","border-color":"#6031ba"}).siblings().css({"color":"#323232","border-color":"#d9d9d9"});
       location.href="./projectDetails.html";
    });
    //    more  project
    $(".more").click(function () {
        location.href="./projectDetails.html";
    });
});

var headerHtml=function () {
    var html=
        ' <div class="header-nav">'+
        '<p><a href="#">注册</a><a href="#">登录</a></p>'+
        '</div>'+
        '<div class="header-title">'+
        '<div class="header-title-top">'+
        '<div class="header-top-left">'+
        '<img class="header-logo" src="./images/logo.png"  srcset="./images/logo@2x.png 2x,./images/logo@3x.png 3x" alt="logo">'+
        '<p>'+
        // '<span>辅助生殖资讯专家</span>'+
        '<span><img  src="./images/invalid-name.png" alt=""></span>'+
        '<span>专业/权威/可靠</span>'+
        '</p>'+
        '</div>'+
        '<div class="header-top-right">'+
        '<p><input type="text"><span><img src="./images/ss.png" srcset="./images/ss@2x.png 2x,./images/ss@3x.png 3x" alt=""></span></p>'+
        '<ul>'+
        '<li>HCG-孕酮-保胎</li>'+
        '<li>国顶尖生殖医院</li>'+
        '<li>多囊怀孕</li>'+
        '<li>高龄二胎</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
        '<div class="header-list">'+
        '<ul>'+
        '<li><a href="./index.html">首页</a><span></span></li>'+
        '<li><a href="./project.html">知识专题</a><span></span></li>'+
        '<li><a href="./hospital.html">医院医生</a><span></span></li>'+
        '<li><a href="./auxiliaryTool.html">辅助工具</a><span></span></li>'+
        // '<li><a href="./index.html"><img src="./images/invalid-index.png" srcset="./images/invalid-index@2x.png 2x,./images/invalid-index@3x.png 3x" alt=""></a><span></span></li>'+
        // '<li><a href="./project.html"><img src="./images/invalid-nal.png" srcset="./images/invalid-nal@2x.png 2x,./images/invalid-nal@3x.png 3x"</a><span></span></li>'+
        // '<li><a href="./hospital.html"><img src="./images/invalid-doc.png" srcset="./images/invalid-doc@2x.png 2x,./images/invalid-doc@3x.png 3x"</a><span></span></li>'+
        // '<li><a href="./auxiliaryTool.html"><img src="./images/invalid-tool.png" srcset="./images/invalid-tool@2x.png 2x,./images/invalid-tool@3x.png 3x"</a><span></span></li>'+
        // '<li><a href="./index.html"><img src="./images/invalid-index.png"  alt=""></a><span></span></li>'+
        // '<li><a href="./project.html"><img src="./images/invalid-nal.png" </a><span></span></li>'+
        // '<li><a href="./hospital.html"><img src="./images/invalid-doc.png" </a><span></span></li>'+
        // '<li><a href="./auxiliaryTool.html"><img src="./images/invalid-tool.png" </a><span></span></li>'+
        '</ul>'+
        '</div>'+
        '</div>';
    return html;
}
var footerHtml=function () {
    var html=
        '<div class="footer-info">'+
        '<div class="footer-copyright">'+
        '<p>Copyright © 2016</p>'+
        '<p>上海楚腾信息技术有限公司 版权所有</p>'+
        '<p>京ICP备05082115号 京卫计网审[2015]第0310号</p>'+
        '<p>京公网安备：110402430052号</p>'+
        '</div>'+
        '<div class="footer-html">'+
        '<p><a href="index.html">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</a></p>'+
        '<p><a href="project.html">知识专题</a></p>'+
        '<p><a href="hospital.html">医院医生</a></p>'+
        '<p><a href="auxiliaryTool.html">辅助工具</a></p>'+
        '</div>'+
        '<div class="footer-addr">'+
        '<p>网址：<a href="www.shctis.com.cn">www.shctis.com.cn</a></p>'+
        '<p>联系电话: <a href="tel:010-52685618">010-52685618</a></p>'+
        '<p>E-mail：zcr@shctis.com</p>'+
        '<p>地址:上海市普陀区云岭西路600弄2号楼402室  </p>'+
        '</div>'+
        '<div class="footer-download">'+
        '<img src="./images/qr.png" srcset="./images/qr@2x.png 2x,./images/qr@3x.png 3x" alt="二维码">'+
        '<p>手机客户端下载</p>'+
        '</div>'+
        '</div>';
    return html;
}

//获取html中参数的值
function getQueryString(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
    {
        return unescape(r[2]);
    }else
    {
        return null;
    }
}
