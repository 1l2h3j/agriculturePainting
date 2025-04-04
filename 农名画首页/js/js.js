﻿ $(window).load(function(){$(".loading").fadeOut()})
$(function () {
    echarts_1();

    echarts_3();
    echarts_21();

    echarts_4();
    echarts_5();
    echarts_6();
    echarts_7();


function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
option = {
    tooltip: {
        trigger: 'axis',

        axisPointer: {
            type: 'shadow'
        }
    },
 legend: {
        data: ['中部', '东部', '西部', '东北'],
        left: 'center',
        textStyle: {color: "#fff"},
    },
          grid: {
        left: '0',
		top: '30',
        right: '10',
        bottom: '0',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
		 boundaryGap: false,
   // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
   data: ['2006','2009', '2012', '2015', '2018', '2021', '2024',],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
         //   margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
		splitNumber:4,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
				type:'dotted'
            }
        }
    }],
    series: [
		{
			name: '中部',
        type: 'line',
       smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#fbc20e',
                width: 2
            }
        },

		itemStyle: {normal: {color: '#fbc20e',}},
        // data: [6, 2, 5, 1, 7, 4, 13, 4, 18, 6, 8, 4],
        data: [500, 1050, 2100, 4300, 7400, 12300, 17500],

    },
		{
			name: '东部',
        type: 'line',
      smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#f7717e',
                width: 2
            }
        },
       	itemStyle: {normal: {color: '#f7717e',}},
        // data: [4, 6, 4, 8, 6, 8, 4, 6, 2, 5, 1, 7 ],
        data: [2000, 4000, 8000, 14500, 22700, 32000, 42500],

    },
		{
			name: '西部',
        type: 'line',
       smooth: true,
       symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#4670f4',
                width: 2
            }
        },

			itemStyle: {normal: {color: '#4670f4',}},
        // data: [8, 6, 8, 4,4, 6,  5,4,  6, 2, 1, 7 ],
        data: [250, 500, 1000, 2000, 4300, 7700, 12000],

    },
		{
			name: '东北',
        type: 'line',
     smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#64cd84',
                width: 2
            }
        },

			itemStyle: {normal: {color: '#64cd84',}},
        // data: [8,4, 6,  5,4,  6, 2, 1, 7, 6, 8, 4 ],
        data: [750, 1100, 1550, 2050, 2600, 3400, 4200],

    }

	]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));
var option = {

          grid: {
            top: '10',
            left: '0',
            right: '5%',
            bottom: '0',
            containLabel: true
          },
          yAxis: [{
            type: 'category',
            data: ['中部', '东部', '西部', '东北'],
            inverse: true,
            axisTick: { show: false},
            axisLabel: {
              textStyle: {
                color: 'rgba(255,255,255,.3)'
              }
            },
            axisLine: {
              show: false
            }
          }],
          xAxis: [{
            type: 'value',
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            barWidth: 10,
            data: [21.8, 50.9, 16.3, 10.9],
            label: {
              normal: {
                show: true,
                position: 'insideBottomRight',
                formatter: '{c}%',
                distance: 0,
                offset: [10, -15],
                color: '#fff',
                fontSize: 12,
                padding: [2, 5, 2, 5],
                backgroundColor: {
                  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA+CAYAAAD5wvNAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ3NTQ1RkVGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ3NTQ1RkRGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvulhDwAAAQ3SURBVHja7J1JaBRBGIX/iZEQN1CjwVxUcL+4hUnUU8SDHjQiiqJR0EOCYMAtIG4HRQXBBUQkXgQxxoOieJZ4UzO4oAe3CKJoQI2IGhUTZHz/dI12mul090xcJvU+ePSkpqsTXr1Ud81Ud8UW1SZFYuJgtsn0z+Iqd+2TFPHWGY1tFVSJ96ZgOx5lo7AdDBX9OmbMczx3mas8076BZQUhfoe3ns+xve/7/X6JcpyIZRK17u+2+I7tF5S/w+vneP0YuoXX16G33mMk5kkkCiV7RkLroNXQbE/Tk39HkdEIaDK00JTr//kd6Dx0FnqfzcELsqgzBjoCvYCOQuUMS14QM22lbfYSOgGV/cnAaG/UAD2FtkKD2QZ5yyBoE/QkfkMaoIF9HZiJerqDDkND6He/YYhp0wRCM62vAlMN3YZm0t9+ywyoNX5TluYamFroEjSMnlrR21xEaGqzDcxGqBEaQC+tQdu6MX4r1faRArPEXEUTOzkRb01lIFRgpkJN7Fms72maEJqpQYHR4VUzR0LEZKA5nug55PYGZjM0nV4Rg2Zhi19g9FO/vfSIeNiDXqYsU2B28lREfE5Nu7yBKYE20Bviw3r0MiXuwNRAxfSF+FBsMtIjMIT0xpp0YEZDs+gHCWC2XvxqYOYL57OQYDQjVRqYCnpBQlKugZlCH0hIJmtgJtAHEpKJGphS+kBCUqqBGUofSEiGFtADEgUGhjAwhIEhDAzJQ7o0MJ/pAwnJZw3MG/pAQvJBA/OMPpCQtGlgHtMHEpInGphW+kBCckcDo08mStILEoBmpCV90XuXfpAA7ibi0p7+HOYc/SAB6KPOxB2Yb/SE+KDZOOsOTAd0hr4QH87gdNThDoxyAOqkN8RDp8mGeAPTDu2jP8TDfr3YzRQY5Th0jx4Rg2bhmLvAG5huaCX0iV5Zj34pvQq9S3dvgVHaoLXQD3pmLdr2NYmK1DOZJSgwylWonr5ZSz3CcjXTG71NoDoF1bGnsa5nqUtUptpeogZGOQ0t5zWNNcPnFYk5qTaXbAOjXBFnUQOOnvov96EKhOVy0I5h5/TqhXClOI+u4lcI/Qdty91QPDFXHoapEGUSeBd0UJyFKnRs/oV+5y1foZPQJATlANQVtmI2dw28Fmf5m3Fmq4s2cT7N/096gS1ts7HiLH/zKupBclmRrcP0NCq9ob9KnGfN6NOjnSX8nCcwDmRb/VW6zQWss4SfyCNxZlXqRLmcJ/wX9tEfqX/IBaN84RC0I8dj6Opm22xKo803sulziZtyqK91t9tmms2B0XO6Ppv4WhZ1W0zdJANjFzo6qJZod07o/Odlpq4wMHYOMRdLuBv6dB9d1vejrWYxMA46olhktrnsw8BYhPYeC3x6j84IvRADYxEPMlyfZHOdw8BYhHsElB5JtdAWh0JakBH9jGW4OJ9UN9GO3/wUYAAaXtVsjsG1HQAAAABJRU5ErkJggg=='
                }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 0,
                  color: '#57eabf' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#2563f9' // 100% 处的颜色
                }], false),
                barBorderRadius: 14
              }
            }
          }, {
            type: "bar",
            barWidth: 10,
            xAxisIndex: 0,
            barGap: "-100%",
            data: [100, 100, 100, 100],
            itemStyle: {
              normal: {
                color: "#444a58",
                barBorderRadius: 14
              }
            },
            zlevel: -1
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

	function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
var plantCap = [{
       name: '吉林东丰',
       value: '6.5'
   }, {
       name: '上海金山',
       value: '9.0'
   }, {
       name: '江苏邳州',
       value: '7.5'
   }, {
       name: '山东日照',
       value: '7.0'
   }, {
       name: '陕西户县',
       value: '8.5'
   },{
       name: '青海湟中',
       value: '6.0'
   }];
   var datalist = [{
       offset: [56, 48],
       symbolSize: 80,
      // opacity: .95,
       color: '#0050e4',
   }, {

       offset: [30, 70],
       symbolSize: 60,
        color: '#fc4322'
   }, {
       offset: [0, 43],
       symbolSize: 40,
       color: '#e18310'

   }, {
       offset: [93, 30],
       symbolSize: 60,
        color: '#08ba79'
   }, {
       offset: [26, 19],
       symbolSize: 55,
       color: '#069fc5'
   }, {
       offset: [75, 75],
       symbolSize: 40,
        color: '#e18310'

   }];

   var datas = [];
   for (var i = 0; i < plantCap.length; i++) {
       var item = plantCap[i];
       var itemToStyle = datalist[i];
       datas.push({
           name: item.value + '\n' + item.name,
           value: itemToStyle.offset,
           symbolSize: itemToStyle.symbolSize,


           itemStyle: {
               normal: {
                  color: itemToStyle.color,
                   opacity: itemToStyle.opacity
              }
           },
       })
   }
   option = {
       grid: {
           show: false,
           top: 10,
           bottom: 10
       },

       xAxis: [{
           gridIndex: 0,
           type: 'value',
           show: false,
           min: 0,
           max: 100,
           nameLocation: 'middle',
           nameGap: 5
       }],

       yAxis: [{
           gridIndex: 0,
           min: 0,
           show: false,
           max: 100,
           nameLocation: 'middle',
           nameGap: 30
       }],
       series: [{
           type: 'scatter',
           symbol: 'circle',
           symbolSize: 120,
           label: {
               normal: {
                   show: true,
                   formatter: '{b}',
                   color: '#FFF',
                   textStyle: {
                       fontSize: '12'
                   }

               },
           },
           data: datas
       }]

   };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
option = {

    tooltip: {
        trigger: 'axis',

        axisPointer: {
            type: 'shadow'
        }
    },
 legend: {
        data: ['农民画产值（万元）', '冬季文旅收入（万元）'],
        left: 'center',
        textStyle: {color: "#fff"},
    },
          grid: {
        left: '0',
		top: '30',
        right: '10',
        bottom: '0',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
		 boundaryGap: false,
   // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    data: ['2006', '2009', '2012', '2015', '2018', '2021', '2024'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
         //   margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
		splitNumber:3,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
				type:'dotted'
            }
        }
    }],
    series: [
		{
			name: '农民画产值（万元）',
        type: 'line',
      //  smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#fbc20e',
                width: 2
            }
        },

		itemStyle: {normal: {color: '#fbc20e',}},
        data: [400, 600, 850, 1100, 1400, 1800, 2200],

    },
		{
			name: '冬季文旅收入（万元）',
        type: 'line',
     //   smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#58c8da',
                width: 2
            }
        },
       	itemStyle: {normal: {color: '#58c8da',}},
        data: [150, 300, 550, 800, 1200, 1800, 2500],

    }
	]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
 var myChart = echarts.init(document.getElementById('echart5'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
 legend: {
        data: ['创作者数量（人）', '政策补贴金额（万元）'],
        left: 'center',
        textStyle: {color: "#fff"},
    },
          grid: {
        left: '0',
		top: '30',
        right: '10',
        bottom: '0',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
		 boundaryGap: false,
   // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
   data: ['2006', '2009', '2012', '2015', '2018', '2021', '2024'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
         //   margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
		splitNumber:3,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
				type:'dotted'
            }
        }
    }],
    series: [
		{
			name: '创作者数量（人）',
        type: 'line',
      //  smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#fbc20e',
                width: 2
            }
        },

		itemStyle: {normal: {color: '#fbc20e',}},
       data: [80, 120, 180, 250, 320, 400, 480],

    },
		{
			name: '政策补贴金额（万元）',
        type: 'line',
     //   smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#58c8da',
                width: 2
            }
        },
       	itemStyle: {normal: {color: '#58c8da',}},
        data: [20, 50, 80, 120, 200, 280, 350],

    }
	]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
 var myChart = echarts.init(document.getElementById('echart6'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
	color: ["#248ff7",'#64cd84'],
 legend: {
        data: ['系统外部', '系统内部'],
        left: 'center',
        textStyle: {color: "#fff"},
	  itemWidth: 15,
        itemHeight: 10,
    },
          grid: {
        left: '0',
		top: '30',
        right: '10',
        bottom: '0',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
		// boundaryGap: false,
   data: ['1', '2', '3', '4', '5'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
         //   margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
		splitNumber:3,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
				type:'dotted'
            }
        }
    }],
   series : [
          {
            name:'系统外部',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90],
            barWidth:15
          },
          {
            name:'系统内部',
            type:'bar',
            stack: '排名',
            data:[220, 182, 191, 234, 290],
            barWidth:15,
            itemStyle:{
              normal:{
                barBorderRadius: [30, 30, 0, 0],
              }
            }
          },
        ]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_7() {
 var myChart = echarts.init(document.getElementById('echart7'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
 legend: {
        data: ['昨日', '今日','平均'],
        left: 'center',
        textStyle: {color: "#fff"},
    },
          grid: {
        left: '0',
		top: '30',
        right: '10',
        bottom: '0',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
		 boundaryGap: false,
   data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
         //   margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
		splitNumber:3,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
				type:'dotted'
            }
        }
    }],
    series: [
		{
			name: '昨日',
        type: 'line',
      //  smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
			areaStyle: {

            normal: {

                color: 'rgba(101,192,205,.3)'

            }

        },
		 lineStyle: {
            normal: {
				color: '#58c8da',
                width: 2
            }
        },

		itemStyle: {normal: {color: '#58c8da',}},
       data: [8, 6, 8, 4,4,  6, 2,4, 6,  5, 1, 7 ],

    },
		{
			name: '今日',
        type: 'line',
     //   smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
			 areaStyle: {

            normal: {
             color: 'rgba(218,179,101,.3)'
            }

        },

		 lineStyle: {

            normal: {
				color: '#f7b851',
                width: 2
            }
        },

       	itemStyle: {normal: {color: '#f7b851',}},
        data: [8, 4, 6, 7, 6, 8, 4,  5, 4,  6, 2, 6 ],

    },
		{
			name: '平均',
        type: 'line',
     //   smooth: true,
        symbol: 'circle',
        symbolSize: 3,
        showSymbol: false,
		 lineStyle: {

            normal: {
				color: '#fff',
                width: 1,
			   type:'dotted'
            }
        },
       	itemStyle: {normal: {color: '#fff',}},
        data: [5,5, 5,  5,5,  5, 5, 5, 5, 5, 5, 5 ],

    }
	]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})


















