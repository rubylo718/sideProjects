document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container", {
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    title: {
      text: "Scatter Chart",
    },
    subtitle: {
      text: "Ruby Lo",
    },
    xAxis: {
      title: {
        enabled: true,
        text: "x-axis",
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "y-axis",
      },
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 100,
      y: 70,
      floating: true,
      backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
      borderWidth: 1,
    },
    plotOptions: {
      series: {
        lineWidth: 3,
      },
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          },
        },
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x} %, {point.y} MPa",
        },
      },
    },
    series: [
      {
        name: "Series-1 y=2x+1",
        color: "rgba(223, 83, 83, .5)",
        data: [
          [0, 1],
          [1, 3],
          [5, 11],
          [9, 19],
        ],
        visible: true,
      },
      {
        name: "Series-2 y=0.5x^2-1",
        color: "rgba(119, 152, 191, .5)",
        data: [
          [0, -1],
          [1, -0.5],
          [2, 1],
          [3, 3.5],
          [4, 7],
          [5, 11.5],
          [6, 17],
          [7, 23.5],
          [8, 31],
          [9, 39.5],
        ],
        visible: true,
      },
    ],
  });
});
