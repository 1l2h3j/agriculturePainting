 $(window).load(function(){
             $(".loading").fadeOut()
            })

/****/
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});

 $(function () {

 	echarts_1();
 	echarts_2();
 	echarts_3();

 	function echarts_1() {
 		var myChart = echarts.init(document.getElementById('echart1'));
 		option = {
 			tooltip: {

 				trigger: 'axis',
 				axisPointer: {
 					lineStyle: {
 						color: '#57617B'
 					}
 				},
 				formatter: '{b}日	:<br/> 生产情况{c}'
 			},

 			grid: {
 				left: '0',
 				right: '20',
 				top: '10',
 				bottom: '0',
 				containLabel: true
 			},
 			xAxis: [{
 				type: 'category',
 				boundaryGap: false,
 				axisLine: {
					show: false,
 					lineStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				data: ['3.2', '3.3', '3.4', '3.5', '3.6', '3.7']
 			}],
 			yAxis: [{
 				axisLabel: {
 					show: true,
 					textStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				axisLine: {
					show: false,

 				},
 				splitLine: {
 					lineStyle: {
						type:'dotted',
 						color: 'rgba(255,255,255,.1)'
 					}
 				}
 			}],
 			series: [{
 				name: '生产情况',
 				type: 'line',
 				smooth: true,
 				symbol: 'circle',
 				symbolSize: 5,
 				showSymbol: false,
 				lineStyle: {
 					normal: {
 						width: 2
 					}
 				},

 				areaStyle: {
 					normal: {
 						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
 							offset: 0,
 							color: 'rgba(98, 201, 141, 0.5)'
 						}, {
 							offset: 1,
 							color: 'rgba(98, 201, 141, 0.1)'
 						}], false),
 						shadowColor: 'rgba(0, 0, 0, 0.1)',
 						shadowBlur: 10
 					}
 				},
 				itemStyle: {
 					normal: {
 						color: '#4cb9cf',
 						borderColor: 'rgba(98, 201, 141,0.27)',
 						borderWidth: 12
 					}
 				},
 				data: [91, 60, 70, 54, 80, 40]
 			}]
 		};

 		// 使用刚指定的配置项和数据显示图表。
 		myChart.setOption(option);
 		window.addEventListener("resize", function () {
 			myChart.resize();
 		});
 	}
	 function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
   option = {
        tooltip: {
            trigger: 'axis'
        },
        radar: {
			indicator: [
				{ name: '设计构思', max: 100 },  // 创意方案完成度
				{ name: '线稿绘制', max: 100 },  // 传统技法数字化率
				{ name: '色彩填充', max: 100 },  // 颜料消耗合理指数
				{ name: '细节刻画', max: 100 },  // 非遗技法还原度
				{ name: '装裱工艺', max: 100 },  // 传统装裱完成度
				{ name: '数字化保存', max: 100 }  // 数字档案完整率
			],
            splitNumber: 4,
			 nameGap: 0,
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#2c353d'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#2c353d'],
                    width: 1
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['transparent']
                }
            },
            name: {
                color: 'rgba(255,255,255,.8)',

            },
        },
        series: [{
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#096e32',
                    borderColor: '#46ff91'
                }
            },
            areaStyle:{
                color:['#096e32'],
                opacity:0.4
            },
            data: [{
                value: [60, 33, 10, 50, 80, 100],
            }]
        },]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	 function echarts_3() {
 		var myChart = echarts.init(document.getElementById('echart3'));
 		option = {
 			tooltip: {

 				trigger: 'axis',
 				axisPointer: {
 					lineStyle: {
 						color: '#57617B'
 					}
 				},
 				formatter: '{b}:<br/> 使用人数{c}'
 			},

 			grid: {
 				left: '0',
 				right: '20',
 				top: '10',
 				bottom: '0',
 				containLabel: true
 			},
 			xAxis: [{
 				type: 'category',
 				boundaryGap: false,
 				axisLine: {
					show: false,
 					lineStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				data: ['1月', '2月', '3月', '4月', '5月', '6月']
 			}],
 			yAxis: [{
 				axisLabel: {
 					show: true,
 					textStyle: {
 						color: 'rgba(255,255,255,.6)'
 					}
 				},
 				axisLine: {
					show: false,

 				},
 				splitLine: {
 					lineStyle: {
						type:'dotted',
 						color: 'rgba(255,255,255,.1)'
 					}
 				}
 			}],
 			series: [{
 				name: '产量统计',
 				type: 'line',
 				//smooth: true,
 				symbol: 'circle',
 				symbolSize: 5,
 				//showSymbol: false,
 				lineStyle: {
 					normal: {
 						width: 2
 					}
 				},

 				areaStyle: {
 					normal: {
 						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
 							offset: 0,
 							color: 'rgba(98, 201, 141, 0.5)'
 						}, {
 							offset: 1,
 							color: 'rgba(98, 201, 141, 0.1)'
 						}], false),
 						shadowColor: 'rgba(0, 0, 0, 0.1)',
 						shadowBlur: 10
 					}
 				},
 				itemStyle: {
 					normal: {
 						color: '#4cb9cf',
 						borderColor: 'rgba(98, 201, 141,0.27)',
 						borderWidth: 12
 					}
 				},
 				data: [33, 78, 25, 56, 14, 91]
 			}]
 		};

 		// 使用刚指定的配置项和数据显示图表。
 		myChart.setOption(option);
 		window.addEventListener("resize", function () {
 			myChart.resize();
 		});
 	}
 })












