// 图形颜色，带透明
const color = [
  "rgba(100,202,255,.2)",
  "rgba(93,210,177,.2)",
  "rgba(255,191,100,.2)",
];
//   图形边框颜色
const borderColor = ["rgb(100,202,255)", "rgb(93,210,177)", "rgb(255,191,100)"];
//   图形渐变色
const colors = [
  {
    type: "radial",
    x: 0.5,
    y: 0.5,
    r: 2.5,
    colorStops: [
      {
        offset: 0,
        color: "rgb(13,58,95)", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "rgb(32,95,148)", // 100% 处的颜色
      },
    ],
  },
  {
    type: "radial",
    x: 0.5,
    y: 0.5,
    r: 2.5,
    colorStops: [
      {
        offset: 0,
        color: "rgb(7,59,71)", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "rgb(37,142,136)", // 100% 处的颜色
      },
    ],
  },
  {
    type: "radial",
    x: 0.5,
    y: 0.5,
    r: 1,
    colorStops: [
      {
        offset: 0,
        color: "rgb(38,44,52)", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "rgb(104,94,69)", // 100% 处的颜色
      },
    ],
  },
];
const data = [
  {
    value: 550,
    name: "一级统计",
  },
  {
    value: 450.71,
    name: "工厂使用",
  },
  {
    value: 300,
    name: "生产使用",
  },
];
let Label1 = (data) => {
  let opts = [];
  for (let i = 0; i < data.length; i++) {
    let item = {};
    item.name = data[i].name;
    item.value = data[i].value;
    item.label = {
      position: "inside",
      textBorderColor: "transparent",
      // 采用 rich 中定义样式。
      formatter: ["{b|{b}}", "{c|{c}}"].join("\n"), //用\n来换行
      rich: {
        b: {
          color: borderColor[i],
          lineHeight: 25,
          fontSize: 24,
        },
        c: {
          color: "#fff",
          fontSize: 24,
          fontFamily: "Microsoft YaHei",
          fontWeight: "bold",
        },
      },
    };

    opts.push(item);
  }
  return opts;
};
let Label2 = (data) => {
  let opts = [];
  for (let i = 0; i < data.length; i++) {
    let item = {};
    item.name = data[i].name;
    item.value = data[i].value;
    item.itemStyle = {
      color: colors[i],
      borderColor: borderColor[i],
    };
    item.label = {
      position: "rightTop",
      textBorderColor: "transparent",
      //a和b来识别不同的文字区域
      formatter: "{b|}{a|{d}%}    {c|}",
      algin: "left",
      rich: {
        a: {
          left: 20,
          padding: [0, 0, 25, -70],
          color: "#fff",
          fontSize: 24,
        },
        // b: {
        //   height: 10,
        //   width: 10,
        //   lineHeight: 10,
        //   borderRadius: 10,
        //   backgroundColor: borderColor[i], // 圆点颜色和饼图块状颜色一致
        // },
        c: {
          height: 10,
          width: 2,
          backgroundColor: borderColor[i], // 圆点颜色和饼图块状颜色一致
        },
      },
    };
    opts.push(item);
  }
  return opts;
};
// 指定图表的配置项和数据
const option = {
  title: {
    text: "Tce",
    show: false,
    textStyle: {
      color: "rgb(117,135,143)",
    },
  },
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    top: 0,
    left: 0,
  },
  series: [
    {
      name: "Expected",
      type: "funnel",
      // left: '10%',
      width: "60%",
      emphasis: {
        disabled: true,
      },
      color: color,
      itemStyle: {
        borderWidth: 0,
      },
      data: Label1(data),
    },
    {
      name: "Expected",
      type: "funnel",
      // left: '10%',
      width: "60%",
      maxSize: "60%",
      emphasis: {
        disabled: true,
      },
      labelLine: {
        length: 180,
        lineStyle: {
          type: "dashed",
        },
      },
      // labelLayout: {
      //   dx: -160,
      //   dy: 0,
      // },

      data: Label2(data),
    },
  ],
};
