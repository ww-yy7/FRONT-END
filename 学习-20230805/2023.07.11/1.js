const yData = [60, 70, 80, 90];
const yMaxData = [100, 100, 100, 100];
option = {
  grid: {
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "动力车间",
        "制丝车间",
        "卷包车间",
        "综合办公",
      ],
      axisTick: {
         show: false,
        alignWithLabel: true,
      },
      nameTextStyle: {
        color: "#82b0ec",
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#82b0ec",
        },
      },
      axisLabel: {
         margin: 20,
         fontSize: 24,
        textStyle: {
          color: function (params, index) {
            return index === 4 ? "#d6f1ff" : "#d6f1ff"
          },
        },
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
          show: false,
        textStyle: {
          color: "#fff",
        },
        formatter: "{value}%",
      },
      splitLine: {
          show: false,
        lineStyle: {
          color: "#0c2c5a",
        },
      },
      axisLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "",
      type: "pictorialBar",
      symbolSize: [40, 16],
      symbolOffset: [0, -5],
      symbolPosition: "end",
      itemStyle: {
        normal: {
          color: function (params) {
            return params.dataIndex % 2 === 0 ? "#FE5449" : "#EAB316";
          }
        },
      },
      z: 12,
      label: {
        normal: {
          show: true,
          // position: "top",
          formatter: "{c}",
          fontSize: 24,
          color: "#fff"
        },
      },
      data: yData,
      zlevel: 2,
    },
    {
      data: yMaxData,
      type: "bar",
      barMaxWidth: "auto",
      barWidth: 40,
      barGap: "-100%",
      zlevel: -1,
      itemStyle: {
        normal: {
          opacity: 0.2,
          color: function (params) {
            return params.dataIndex % 2 === 0 ? "#FE5449" : "#EAB316";
          }
        },
      },
    },
    {
      name: "",
      type: "pictorialBar",
       symbolSize: [40, 16],
      symbolOffset: [0, -5],
      symbolPosition: "end",
      itemStyle: {
        normal: {
          opacity: 0.8,
          color: function (params) {
            return params.dataIndex % 2 === 0 ? "#FE5449" : "#EAB316";
          }
        },
      },
      z: 12,
      data: yMaxData,
      zlevel: -1,
    },
    {
      name: "",
      type: "pictorialBar",
      symbolSize: [40, 16],
      symbolOffset: [0, 5],
      z: 12,
      data: yData,
      zlevel: 2,
      itemStyle: {
        normal: {
          color: function (params) {
            return params.dataIndex % 2 === 0 ? "#FE5449" : "#EAB316";
          }
        },
      },
    },
    {
      type: "bar",
      itemStyle: {
        normal: {
          opacity: 0.7,
          color: function (params) {
            return params.dataIndex % 2 === 0 ? "#FE5449" : "#EAB316";
          }
        },
      },
      zlevel: 2,
      barWidth: "40",
      data: yData,
      markLine: {
        symbol:[],
        label:{
          position: 'start',
          show: true,
          color: '#EAB316',
          fontSize: 24,
          formatter:'{c}%'
      },
      lineStyle: {
         color: '#EAB316',
      },
          data: [{ type: 'average', name: 'Avg' }]
      }
    },
  ],
};
