/**
 * Created by sawyer on 2017-07-31.
 */
$(function () {
    $(".doctor-info ul li").click(function () {
        location.href="./doctorDetails.html";
    })
    //地图
    $("#map>div>div:nth-child(2)>div").addClass("addss");  //地图信息框不显示
    var addre = $("#addres").text();
    doSearch(addre);
});
// 百度地图API功能
var map = new BMap.Map("map");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
map.enableScrollWheelZoom();//启用滚轮放大缩小，默认禁用
// map.disableDragging();
//map展现结果的地图实例
//autoViewport检索结束后是否自动调整地图视野
var local = new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: true}});
//地图显示
local.setMarkersSetCallback(function(){  //标注成功后返回函数
    // $(".addss .BMap_noprint").addClass("image");
    var num = 0;
    $('.addss .BMap_noprint').click(function (e) {
        if (num++ % 2 == 0) {
            $(" #map").css({"height": "596px", "display": "block"});
            $(" .map").css({"height": "600px", "display": "block"});
        } else {
            $(" #map").css({"height": "196px", "display": "block"});
            $(" .map").css({"height": "200px", "display": "block"});
        }
        e.preventDefault(); //阻止元素的默认动作（如果存在）
    });
});
//地址检索
function doSearch(addre) {
    local.search(addre);
}
//移动端点击事件
var nums=0;
map.addEventListener('touchstart', function (e) {
    if (nums++ % 2 == 0) {
        $(" #map").css({"height": "596px", "display": "block"});
        $(" .map").css({"height": "600px", "display": "block"});
    } else {
        $(" #map").css({"height": "196px", "display": "block"});
        $(" .map").css({"height": "200px", "display": "block"});
    }
    // e.preventDefault(); //阻止元素的默认动作（如果存在）
});
