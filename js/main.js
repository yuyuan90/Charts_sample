var dom1 = document.getElementById("revenue_by_area");
var myChart = echarts.init(dom1);
var app = {};
option = null;
app.title = '环形图';

option = {
    title : {
        text: 'Revenue by Area (¥)',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['HQ','North China','East China','South China']
    },
    series: [
        {
            name:'Revenue by Area',
            type:'pie',
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:6029555, name:'HQ'},
                {value:1612124, name:'North China'},
                {value:9976327, name:'East China'},
                {value:623289, name:'South China'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};



var dom2 = document.getElementById("sales_performance");
var myChart = echarts.init(dom2);
var app = {};
option = null;
app.title = '条形图';

option = {
    title: {
        text: 'Sales Team Performance in 2019 (¥)'
    },
    legend: {},
    tooltip: {},
    
    dataset: {
        source: [
            ['Sales', 'Actual', 'Goal'],
            ['Ryo', 1303010, 1000000],
            ['Eric', 542746, 900000],
            ['Martin', 334269.55, 350000],
            ['Sylvie', 317875.5, 300000],
            ['Charlene', 66050, 100000],
            ['...', '-', '-'],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        
        {type: 'bar'},
        {type: 'bar'}
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom3 = document.getElementById("analytics_payback_period");
var myChart = echarts.init(dom3);
var app = {};

option = {
    title: {
        text: 'Payback Period - Analytics',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Revenue', 'R&D Cost'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['Year0','Year1','Year2','Year3']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 0, 1190000, 2180000]
        },
        {
            name: 'R&D Cost',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [1900000, '-', '-', '-']
        },
        {
            name: 'Revenue',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', 1190000, 990000, 550000]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom4 = document.getElementById("annual_repurchaser");
var myChart = echarts.init(dom4);
var app = {};
var colors = ['#5793f3', '#675bba'];

option = {
    title: {
        text: 'Repurchasers & Repurchase Rate'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
    
    },
    
    xAxis: [
        {
            type: 'category',
            data: ['2017', '2018', '2019'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Peple',
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: 'Ratio',
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: 'Total Clients',
            type: 'bar',
            data: [200, 320, 355]
        },
        {
            name: 'Repurchasers: Existing - Maintenance',
            type: 'bar',
            stack: 'Repurchaser',
            data: [40, 60, 39]
        },
        {
            name: 'Repurchasers: Existing - New Opportunities',
            type: 'bar',
            stack: 'Repurchaser',
            data: [30, 50, 49]
        },
        {
            name: 'Repurchase Rate',
            type: 'line',
            
            yAxisIndex: 1,
            data: [0.4, 0.34, 0.25]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom5 = document.getElementById("revenue_by_product");
var myChart = echarts.init(dom5);
var app = {};
option = null;
option = {
    title : {
        text: 'Revenue by Product Line (¥)',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 5,
        data: ['CognizeOS', 'FAM', 'Others', 'AM', 'Visiting', 'DMeeting', 'Analytics', 'DBooking']
        
    
    },
    series: [
        {
            center: ['50%', '55%'],
            name: 'Revenue',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 14988186, name: 'CognizeOS'},
                {value: 1928995, name: 'FAM'},
                {value: 1324114, name: 'Others', selected: true},
                
                
            ]
        },
        {
            center: ['50%', '55%'],
            name: 'Revenue',
            type: 'pie',
            radius: ['50%', '60%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 11,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 11200010, name: 'DMeeting'},
                {value: 3607143, name: 'Analytics'},
                {value: 181033, name: 'DBooking & Assign'},
                
                {value: 1928995, name: 'AM'},
                
                {value: 1324114, name: 'Visiting'},
                
             
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};



var dom6 = document.getElementById("revenue_from_top_ten");
var myChart = echarts.init(dom6);
var app = {};

option = {
    title : {
        text: 'Revenue from Top10 (¥)',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'Revenue from Top10 (¥)',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                {value: 5243066 , name:'Others'},
                {value: 12998229 , name:'Top10 Clients'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};




var dom7 = document.getElementById("revenue_by_month");
var myChart = echarts.init(dom7);
var app = {};

option = {
    title : {
        text: 'Monthly Recurring Revenue (¥)',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {         
            type: 'shadow'     
        }
    },
    legend: {
        data: ['New MRR', 'Expansion MRR', 'Churn MRR'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        
    },
    yAxis: {
        
            type: 'value',

    },
    series: [
        {
            name: 'New MRR',
            type: 'bar',
            stack: '总量',
            label: {
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320,0,0,0,0,0]
        },
        {
            name: 'Expansion MRR',
            type: 'bar',
            stack: '总量',
            label: {
                position: 'insideRight'
            },
            data: [1854, 1070, 4202, 1642, 2693, 2855, 1511, 3437, 5325, 6767, 1254, 3402]
        },
        {
            name: 'Churn MRR',
            type: 'bar',
            stack: '总量',
            label: {
                position: 'insideRight'
            },
            data: ['-220', '-182', '-191','-234', '-290', '-330', 0, 0, 0, '-900', '-678', '-890']
        },
    
        
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom8 = document.getElementById("payback_period_by_product");
var myChart = echarts.init(dom8);
var app = {};

option = {
    title : {
        text: 'Payback Period by Product (Month)',
        x:'center'
    },
    xAxis: {
        type: 'category',
        data: ['DMeeting', 'Analytics', 'Assign', 'DBooking', 'AM', 'FM', '...']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [16, 18, 15, 12, 22, 25, '-'],
        type: 'bar'
    }]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom17 = document.getElementById("product_line_goal_vs_actual");
var myChart = echarts.init(dom17);
var app = {};

option = {
    title: {
        text: 'Revenue Goal vs. Actual by Products',
        x:'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Goal', 'Actual'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['DMeeting', 'Analytics', 'Assign', 'DBooking', 'AM', 'FM','...']
        
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Actual',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Goal',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        
        
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom9 = document.getElementById("top_ten_clients");
var myChart = echarts.init(dom9);
var app = {};
option = null;
app.title = '条形图';

option = {
    title: {
        text: 'Top 10 Clients in 2019'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Shimadzu','Loreal','JD','BMW','SAIC Motor','Volkswagen','Porsche','Adidas','CMB','Huawei']
    },
    series: [
        {
            name: 'Sales(¥)',
            type: 'bar',
            data: [ 322560,348598, 378319, 464639, 853004, 1102144, 1224845, 1556529, 3204672,  3542921 ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};




var dom10 = document.getElementById("client_industry");
var myChart = echarts.init(dom10);
var app = {};

option = {
   
    title: {
        text: 'Client Industry Types',
        left: 'center',
        textStyle: {
            color: '#000'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            center: ['50%', '65%'],
            name: 'Client Industry Types',
            type: 'pie',
            radius: '75%',
            data: [
                {value: 335, name: 'Media'},
                {value: 310, name: 'Technology'},
                {value: 274, name: 'Mechanical'},
                {value: 235, name: 'Banking'},
                {value: 400, name: 'Others'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                
            },
            labelLine: {
                lineStyle: {
                    
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom11 = document.getElementById("revenue_from_channels");
var myChart = echarts.init(dom11);
var app = {};


option = {
    title : {
        text: 'Revenue from Channels/Direct Sales (¥)',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'Revenue from Channels (¥)',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                {value: 5243066 , name:'Direct Sales'},
                {value: 12998229 , name:'Channels-M&E Contractor'},
                {value: 12998229 , name:'Channels-Professional Channel'},
                {value: 12998229 , name:'Channels-SI/AV'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom12 = document.getElementById("deals_from_channels");
var myChart = echarts.init(dom12);
var app = {};

option = {
    title : {
        text: 'Deals from Channels/Direct Sales',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'Deals from Channels',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                {value: 20 , name:'Direct Sales'},
                {value: 34 , name:'Channels-M&E Contractor'},
                {value: 56 , name:'Channels-Professional Channel'},
                {value: 23 , name:'Channels-SI/AV'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom14 = document.getElementById("top_ten_channel");
var myChart = echarts.init(dom14);
var app = {};

option = {
    title: {
        text: 'Top Ten Channels (¥)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['泛翔','北京融拓力和','永峻','上海昂盛','ITR','上海海直','北京江森','上海万利斯','哲城','上海尚腾']
    },
    series: [
        {
            name: 'Sales(¥)',
            type: 'bar',
            data: [ 2,5, 10, 15, 21, 29, 34, 40, 43, 56 ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom15 = document.getElementById("leads_funnel");
var myChart = echarts.init(dom15);
var app = {};

option = {
    title: {
        text: '2019 Leads Funnel',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },

    series: [
        {
            name:'Sales Funnel',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            min: 0,
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 2112, name: 'Leads'},
                {value: 212, name: 'Closing'},
                {value: 358, name: 'Negotiation'},
                {value: 459, name: 'Proposal'},
                {value: 1400, name: 'Opportunityies'}
            ]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom16 = document.getElementById("revenue_by_deal_type");
var myChart = echarts.init(dom16);
var app = {};

option = {
    title : {
        text: 'Revenue by Deal Type (¥)',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 0,
        data:['New','Existing - Maintenance','Existing - Supplements','Existing - New Opportunities']
    },
    series: [
        {
            name:'Revenue by Deal Type (¥)',
            type:'pie',
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:6029555, name:'New'},
                {value:1612124, name:'Existing - Maintenance'},
                {value:1612124, name:'Existing - Supplements'},
                {value:9976327, name:'Existing - New Opportunities'}
                
            ]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom17 = document.getElementById("new_client_each_month");
var myChart = echarts.init(dom17);
var app = {};

option = {
    title: {
        text: 'Clients vs. New Clients',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {          
            type: 'shadow'      
        }
    },
    legend: {
        data: ['Previous', 'New'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
       
    },
    yAxis: {
         type: 'value'
    },
    series: [
        {
            name: 'Previous',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [99, 109, 114, 116, 116, 122]
        },
        {
            name: 'New',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [10, 5, 2, 0, 6, 11]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom18 = document.getElementById("new_client_source");
var myChart = echarts.init(dom18);
var app = {};

option = {
    title: {
        text: 'New Client Sources in 2019',
        x:'center'
       
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {           
            type: 'shadow'      
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['New Clients', 'Clients Referrel', 'Contractors', 'Pro-channels', 'SI']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 100, 50, 15, 0]
        },
        {
            name: 'New Clients',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [200, 100, 50, 35, 15]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};








var dom19 = document.getElementById("new_channel_each_month");
var myChart = echarts.init(dom19);
var app = {};

option = {
    title: {
        text: 'Channels vs. New Channels',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {          
            type: 'shadow'      
        }
    },
    legend: {
        data: ['Previous', 'New'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
       
    },
    yAxis: {
         type: 'value'
    },
    series: [
        {
            name: 'Previous',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [99, 109, 114, 116, 116, 122,133,143,150,162,170,190]
        },
        {
            name: 'New',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [10, 5, 2, 0, 6, 11,10,7,12,8,20,14]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom20 = document.getElementById("new_channel_source");
var myChart = echarts.init(dom20);
var app = {};

option = {
    title: {
        text: 'New Channel Sources in 2019',
        x:'center'
       
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {           
            type: 'shadow'      
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['New Channels', 'xxx', 'xxx', 'xxx', 'xxx']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 100, 50, 15, 0]
        },
        {
            name: 'New Channels',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [200, 100, 50, 35, 15]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom21 = document.getElementById("revenue_vs_cost");
var myChart = echarts.init(dom21);
var app = {};

option = {
    title: {
        text: '2019 Revenue vs. Cost (¥)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {       
            type: 'shadow'   
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Cost', 'Revenue'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['Revenue','Software','Hardware','Deployment','Customization','Maintenance','Service','Profit']
        
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Amount',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 17902971, 13818456, 13773495, 13008089, '-', '-', '-']
        },
        {
            name: 'Revenue',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [18241295, '-', '-', '-', '-', '-', '-',13008090]
        },
        
        {
            name: 'Cost',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', 338324, 4084515, 44961, 765406, '-', '-', '-']
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom22 = document.getElementById("sales_total_target_met");
var myChart = echarts.init(dom22);
var app = {};

option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'Sales',
            type: 'gauge',
            radius : '100%',
            center: ['50%', '50%'],
            detail: {formatter: '{value}%'},
            data: [{value: 60, name: 'YTD Met'}]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





var dom23 = document.getElementById("sales_monthly_performance");
var myChart = echarts.init(dom23);
var app = {};

option = {
    title: {
        text: 'Sales Performance by Month (¥)'
    },
    legend: {},
    tooltip: {},
    
    dataset: {
        source: [
            ['Sales', 'Actual', 'Goal'],
            ['Jan', 1303010, 1000000],
            ['Feb', 542746, 900000],
            ['Mar', 334269.55, 350000],
            
            ['Apr', 317875.5, 300000],
            ['May', 66050, 100000],
            ['Jun', 66050, 100000],
            
            ['Jul', 66050, 100000],
            ['Aug', 66050, 100000],
            ['Sep', 66050, 100000],
            
            ['Oct', 66050, 100000],
            ['Nov', 66050, 100000],
            ['Dec', 66050, 100000],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        
        {type: 'bar'},
        {type: 'bar'}
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};






var dom24 = document.getElementById("ltv_vs_cac");
var myChart = echarts.init(dom24);
var app = {};

option = {
    title: {
        text: 'LTV/CAC - Marketing'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
       
    },
    legend: {
        data: ['CAC', 'LTV', 'rCAC'],
        right:true
    },
    xAxis: [
        {
            type: 'category',
            data: ['2017', '2018', '2019'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Amount(¥)',
            min: 0,
            max: 10000,
            interval: 5000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: 'rCAC',
            min: 0,
            max: 6,
            interval: 1,
            axisLabel: {
                formatter: '{value}x'
            }
        }
    ],
    series: [
        {
            name: 'CAC',
            type: 'bar',
            data: [1000, 1100, 1250]
        },
        {
            name: 'LTV',
            type: 'bar',
            data: [3000, 4500, 5000]
        },
        {
            name: 'rCAC',
            type: 'line',
            yAxisIndex: 1,
            data: [3, 4.09, 4]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};



var dom25 = document.getElementById("profit_by_product");
var myChart = echarts.init(dom25);
var app = {};

option = {
    title : {
        text: 'Profit by Product Line (¥)',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 5,
        data: ['CognizeOS', 'FAM', 'Others', 'AM', 'Visiting', 'DMeeting', 'Analytics', 'DBooking']
        
    
    },
    series: [
        {
            center: ['50%', '55%'],
            name: 'Profit',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 14988186, name: 'CognizeOS'},
                {value: 1928995, name: 'FAM'},
                {value: 1324114, name: 'Others', selected: true},
                
                
            ]
        },
        {
            center: ['50%', '55%'],
            name: 'Revenue',
            type: 'pie',
            radius: ['50%', '60%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 11,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 11200010, name: 'DMeeting'},
                {value: 3607143, name: 'Analytics'},
                {value: 181033, name: 'DBooking & Assign'},
                
                {value: 1928995, name: 'AM'},
                
                {value: 1324114, name: 'Visiting'},
                
             
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom26 = document.getElementById("deals_by_product");
var myChart = echarts.init(dom26);
var app = {};

option = {
    title : {
        text: 'Deals by Product Line',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['AM','FM','DMeeting','DBooking','Assign','Analytics']
    },
    series: [
        {
            name:'Deals by Product',
            type:'pie',
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:3, name:'AM'},
                {value:1, name:'FM'},
                {value:8, name:'DMeeting'},
                {value:12, name:'DBooking'},
                {value:5, name:'Assign'},
                {value:6, name:'Analytics'},
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom27 = document.getElementById("channel_types");
var myChart = echarts.init(dom27);
var app = {};

option = {
   
    title: {
        text: 'Channel Types',
        left: 'center',
        textStyle: {
            color: '#000'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            center: ['50%', '65%'],
            name: 'Channel Types',
            type: 'pie',
            radius: '75%',
            data: [
                {value: 335, name: 'M&E Contractor'},
                {value: 310, name: 'Professional Channel'},
                {value: 274, name: 'SI/AV'},
                {value: 400, name: 'Others'},
                
                
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                
            },
            labelLine: {
                lineStyle: {
                    
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom28 = document.getElementById("dmeeting_payback_period");
var myChart = echarts.init(dom28);
var app = {};

option = {
    title: {
        text: 'Payback Period - DMeeting',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Revenue', 'R&D Cost'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['Year0','Year1','Year2','Year3']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 0, 800000, 1300000]
        },
        {
            name: 'R&D Cost',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [1900000, '-', '-', '-']
        },
        {
            name: 'Revenue',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: ['-',800000, 500000, 200000]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom29 = document.getElementById("dbooking_payback_period");
var myChart = echarts.init(dom29);
var app = {};

option = {
    title: {
        text: 'Payback Period - DBooking',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Revenue', 'R&D Cost'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['Year0','Year1','Year2','Year3']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 0, 1190000, 2180000]
        },
        {
            name: 'R&D Cost',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [1900000, '-', '-', '-']
        },
        {
            name: 'Revenue',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', 1190000, 990000, 550000]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom30 = document.getElementById("assign_payback_period");
var myChart = echarts.init(dom30);
var app = {};

option = {
    title: {
        text: 'Payback Period - Assign',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Revenue', 'R&D Cost'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['Year0','Year1','Year2','Year3']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 0, 1190000, 2180000]
        },
        {
            name: 'R&D Cost',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [1900000, '-', '-', '-']
        },
        {
            name: 'Revenue',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', 1190000, 990000, 550000]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom31 = document.getElementById("am_payback_period");
var myChart = echarts.init(dom31);
var app = {};

option = {
    title: {
        text: 'Payback Period - AM',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Revenue', 'R&D Cost'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['Year0','Year1','Year2','Year3']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 0, 1190000, 2180000]
        },
        {
            name: 'R&D Cost',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [1900000, '-', '-', '-']
        },
        {
            name: 'Revenue',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', 1190000, 990000, 550000]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};








var dom32 = document.getElementById("fm_payback_period");
var myChart = echarts.init(dom32);
var app = {};

option = {
    title: {
        text: 'Payback Period - FM',
        x:'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['Revenue', 'R&D Cost'],
        right:true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['Year0','Year1','Year2','Year3']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 0, 1190000, 2180000]
        },
        {
            name: 'R&D Cost',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [1900000, '-', '-', '-']
        },
        {
            name: 'Revenue',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: ['-', 1190000, 990000, 550000]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
};







var dom33 = document.getElementById("annual_repurchase_by_times");
var myChart = echarts.init(dom33);
var app = {};

option = {
    title : {
        text: 'Repurchaser by Times',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'Repurchasers',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                
                {value: 2 , name:'5 times'},
                {value: 5 , name:'4 times'},
                {value: 4 , name:'3 times'},
                {value: 8 , name:'2 times'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};








var dom34 = document.getElementById("annual_repurchase_by_product");
var myChart = echarts.init(dom34);
var app = {};

option = {
    title : {
        text: 'Repurchased Products',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'Amount',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                
                {value: 2 , name:'Analytics'},
                {value: 5 , name:'DMeeting'},
                {value: 4 , name:'Assign'},
                {value: 8 , name:'DBooking'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};





