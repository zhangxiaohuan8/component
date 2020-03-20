$(function() {
    var myChart = echarts.init(document.getElementById('main1'));
     var xData=[],
         yData=[6,9,8,8,7];
    for(var i=2000;i<=2020;i+=5){
        xData.push(i);
    }
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {},
        xAxis: {
            data:xData
        },
        yAxis: {},
        series: [{
            name:'排名',
            type: 'line',
            data:yData
        }]
    };
    myChart.setOption(option);
});
