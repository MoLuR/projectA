/**
 * Created by sawyer on 2017-07-24.
 */
$(function () {
    // console.log(arr1);
    var a= arr1.info.imgs;
    var vHtml='';
    a.forEach(function (e) {
        vHtml+=imageBtnHtml(e.id,e.title,e.btn,e.src);
    });
    $('.image-btn').append(vHtml);
});
var imageBtnHtml=function (id,title,btn,src) {
    var html=' <div class="image-single">'+
        '<img src="'+ src+' " alt="">'+
        '<p><span>'+title +'</span><span imgid="'+id+'" class="click-btn">'+btn +'</span></p>'+
        '</div>';
    return html;
}
var arr1={
    "info":{
        "imgs":[
            {
                "id":"1",
                "title":"求助医生",
                "btn":"点击咨询",
                "src":"./images/sy-06.png"
            },
            {
                "id":"2",
                "title":"计算排卵期",
                "btn":"点击计算",
                "src":"./images/sy-08.png"
            },
            {
                "id":"3",
                "title":"计算预产期",
                "btn":"点击计算",
                "src":"./images/sy-10.png"
            }
        ]
    }
}


