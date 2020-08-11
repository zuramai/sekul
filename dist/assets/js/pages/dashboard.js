var averageChartOptions = {
    series: [{
            name: 'Matematika',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Bahasa Indonesia',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'IPA',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
        text: 'Nilai'
        }
    },
    fill: {
        type: 'gradient',
        colors: ['#3485fd','#34eb95','#fff75e'],
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.2,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
    tooltip: {
        y: {
        formatter: function (val) {
            return "$ " + val + " thousands"
        }
        }
    }
};

var averageChart = new ApexCharts(document.querySelector("#average-chart"), averageChartOptions);
averageChart.render();