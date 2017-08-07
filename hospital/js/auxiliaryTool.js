/**
 * Created by sawyer on 2017-07-25.
 */


$(function () {
    var imgId=parseInt(getQueryString('imgid'));
    imgIdHtml(imgId);
    // alert('imgId='+imgId);
    //咨询按钮
    $(".click-btn").hover(function () {
        $(this).addClass("hov");

    },function () {
        $(this).removeClass("hov");
    });
    $('.click-btn').click(function () {
        $(".output").css({"display":"block"});
        $('.click-btn').removeClass("btn-click").addClass("btn-click-not");
        $(this).removeClass("btn-click-not").addClass("btn-click");
        $("input").val("");
        imgId=$(this).attr("imgid");
        // alert( $(this).attr("imgid"));  //1是咨询医生； 2是排卵期预测； 3是预产期预测；
        imgIdHtml(imgId);
    });
    //    计算
    $(".count").click(function () {
        var  countType=$(".self-testing-title").text();
        console.log(countType);
        var dataProgesterone=$(".data-Progesterone").val(); //黄体激素平均周期
        if(dataProgesterone.length==0)
        {
            dataProgesterone=$(".data-Progesterone").attr("placeholder");
            $(".data-Progesterone").val(dataProgesterone);
        }
        var dataMenstruation=$(".data-menstruation").val(); //月经周期
        var dataDay=$(".data-day").val();   //月经日期
        if(dataDay.length==0)
        {
            dataDay=$(".data-day").attr("placeholder");
            $(".data-day").val(dataDay);
        }
        var arr=dataDay.split("-");
        var year=arr[0];
        var month=arr[1];
        var day=arr[2];
        if(dataMenstruation.length==0)
        {
            dataMenstruation=$(".data-menstruation").attr("placeholder");
            $(".data-menstruation").val(dataMenstruation);
            console.log(dataMenstruation);
            clickType(countType,dataDay,year,month,day,dataMenstruation);
        }else
        {
            clickType(countType,dataDay,year,month,day,dataMenstruation);
        }
        // console.log(dataMenstruation+":::::"+dataDay);

    })
});

function imgIdHtml(imgId) {
    // alert(typeof imgId+''+imgId);
    if(imgId=="3")
    {
        $(".click-btn[imgid='3']").addClass("btn-click");
        $('.output-due-date').hide();
        $('.oviposit-period').show();
        $('.self-testing-title').text("预产期自测");
    }else if(imgId=="2")
    {
        $(".click-btn[imgid='2']").addClass("btn-click");
        $('.output-due-date').show();
        $('.oviposit-period').hide();
        $('.self-testing-title').text("排卵期自测");
    }else if(imgId=="1")
    {
        $(".click-btn[imgid='1']").addClass("btn-click");
        $('.self-testing-title').text("咨询医生");
        $('.output-due-date').hide();
        $('.oviposit-period').hide();
    }else  //默认显示
    {
        // $('.output-due-date').hide();
        // $('.self-testing-title').text("预产期自测");
        // $(".click-btn[imgid='3']").addClass("btn-click");
        $('.oviposit-period').hide();
        $('.self-testing-title').text("排卵期自测");
        $(".click-btn[imgid='2']").addClass("btn-click");
    }

}
//月份
var arrDataL=["01","03","05","07","08","10","31"];
var arrDataM=["04","06","09","11"];
var arrDataS=["02"];
var dayNews,monthNews,yearNews;
function clickType(countType,dataDay,year,month,day,dataMenstruation) {
    var yearNew,monthNew,dayNew;
    if(countType=="预产期自测")
    {
        // alert("预产期自测");
        if(parseInt(month)+9>12)
        {
            monthNew=parseInt(month)+9-12;
            yearNew=parseInt(year)+1;
        }else
        {
            monthNew=parseInt(month)+9;
            yearNew=parseInt(year);
        }
        dayNew=parseInt(day)+7;
        judgeMonthTwice(yearNew,monthNew,dayNew);

    }else if(countType=="排卵期自测")
    {
        var dayDataBefore=parseInt(dataMenstruation)-19;
        var dayDataAfter=parseInt(dataMenstruation)-10;
        console.log("dayDataBefore:"+dayDataBefore);
        console.log("dayDataAfter:"+dayDataAfter);
        showTime(dayDataBefore,dataDay,$(".dayData-before")); //当前时间添加两天
        showTime(dayDataAfter,dataDay,$(".dayData-after")); //当前时间添加两天
        // alert("排卵期自测");

    }else if(countType=="咨询医生")
    {
        alert("咨询医生");
    }


}

//预产期判断计算
function  judgeMonthTwice(yearNew,monthNew,dayNew){
    console.log(yearNew+"."+monthNew+"."+dayNew);
    yearNews=yearNew;
    if($.inArray(monthNew,arrDataM)>0)
    {
        console.log("M:"+dayNew);
        if(dayNew>30)
        {
            dayNews=dayNew-30;
            monthNews=monthNew+1;
        }else
        {
            dayNews=dayNew;
            monthNews=monthNew;
        }
    }else if($.inArray(monthNew,arrDataS)>0)
    {
        if(dayNew>28)
        {
            dayNews=dayNew-28;
            monthNews=monthNew+1;
        }else
        {
            dayNews=dayNew;
            monthNews=monthNew;
        }
    }else
    {
        if(dayNew>31)
        {
            dayNews=dayNew-31;
            monthNews=monthNew+1;
            // 3月25至3月底是个关键点 （3+9）
            if(monthNews>12)
            {
                monthNews=monthNews-12;
                yearNews=yearNew+1;
            }else
            {
                monthNews=monthNews;
                yearNews=yearNew;
            }
        }else
        {
            dayNews=dayNew;
            monthNews=monthNew;
            console.log("L:"+dayNew);
        }
    }

    $(".oviposit-period-data").html("<span> "+yearNews+" </span>年<span> "+monthNews+" </span>月 <span> "+dayNews+" </span>日");
}
//排卵期计算
function showTime(day,dataDay,obj){
    var dayTime=day*24*60*60*1000; //参数天数的时间戳
    var timestamp1 = Date.parse(dataDay);
    var timeFin = new Date(parseInt(timestamp1)+dayTime).toLocaleString(); //把两个时间戳转换成普通时间
    var arr1=timeFin.split("/");
    var year1=arr1[0];
    var month1=arr1[1];
    var day1=arr1[2];
    day1=day1.substring(0,2);
    var html="<span>"+year1+" </span>年<span> "+month1+" </span>月 <span> "+day1+" </span>日  </p> ";
    obj.html(html);
    console.log(year1+","+month1+","+day1);
}
