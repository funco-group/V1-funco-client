import Chart from "react-apexcharts";
import palette from "@/lib/palette";

function ChartGraph() {
  const data = [
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T07:00:00",
      candle_date_time_kst: "2024-03-22T16:00:00",
      opening_price: 96064000.0,
      high_price: 96120000.0,
      low_price: 95515000.0,
      trade_price: 95740000.0,
      timestamp: 1711093004883,
      candle_acc_trade_price: 10274649080.45679,
      candle_acc_trade_volume: 107.32050787,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T06:00:00",
      candle_date_time_kst: "2024-03-22T15:00:00",
      opening_price: 96079000.0,
      high_price: 96500000.0,
      low_price: 95801000.0,
      trade_price: 96114000.0,
      timestamp: 1711090798591,
      candle_acc_trade_price: 26885541889.15029,
      candle_acc_trade_volume: 279.60550414,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T05:00:00",
      candle_date_time_kst: "2024-03-22T14:00:00",
      opening_price: 95843000.0,
      high_price: 96099000.0,
      low_price: 95539000.0,
      trade_price: 96094000.0,
      timestamp: 1711087199983,
      candle_acc_trade_price: 19902045830.7427,
      candle_acc_trade_volume: 207.57656952,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T04:00:00",
      candle_date_time_kst: "2024-03-22T13:00:00",
      opening_price: 95490000.0,
      high_price: 95971000.0,
      low_price: 95070000.0,
      trade_price: 95870000.0,
      timestamp: 1711083598964,
      candle_acc_trade_price: 19108999757.82396,
      candle_acc_trade_volume: 200.10658765,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T03:00:00",
      candle_date_time_kst: "2024-03-22T12:00:00",
      opening_price: 94951000.0,
      high_price: 95821000.0,
      low_price: 94891000.0,
      trade_price: 95421000.0,
      timestamp: 1711079999838,
      candle_acc_trade_price: 23794688269.48659,
      candle_acc_trade_volume: 249.55336391,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T02:00:00",
      candle_date_time_kst: "2024-03-22T11:00:00",
      opening_price: 95042000.0,
      high_price: 95296000.0,
      low_price: 94545000.0,
      trade_price: 94951000.0,
      timestamp: 1711076399234,
      candle_acc_trade_price: 38785599860.16539,
      candle_acc_trade_volume: 408.49337249,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T01:00:00",
      candle_date_time_kst: "2024-03-22T10:00:00",
      opening_price: 95461000.0,
      high_price: 95950000.0,
      low_price: 95042000.0,
      trade_price: 95042000.0,
      timestamp: 1711072799914,
      candle_acc_trade_price: 27835433315.39194,
      candle_acc_trade_volume: 291.36379825,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-22T00:00:00",
      candle_date_time_kst: "2024-03-22T09:00:00",
      opening_price: 95618000.0,
      high_price: 96213000.0,
      low_price: 95008000.0,
      trade_price: 95465000.0,
      timestamp: 1711069198960,
      candle_acc_trade_price: 43161390086.45557,
      candle_acc_trade_volume: 451.51995836,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-21T23:00:00",
      candle_date_time_kst: "2024-03-22T08:00:00",
      opening_price: 95683000.0,
      high_price: 95880000.0,
      low_price: 95365000.0,
      trade_price: 95552000.0,
      timestamp: 1711065599950,
      candle_acc_trade_price: 21659804918.39919,
      candle_acc_trade_volume: 226.49833533,
      unit: 60,
    },
    {
      market: "KRW-BTC",
      candle_date_time_utc: "2024-03-21T22:00:00",
      candle_date_time_kst: "2024-03-22T07:00:00",
      opening_price: 95953000.0,
      high_price: 96291000.0,
      low_price: 95601000.0,
      trade_price: 95683000.0,
      timestamp: 1711061999604,
      candle_acc_trade_price: 22430477186.57217,
      candle_acc_trade_volume: 233.82012286,
      unit: 60,
    },
  ];

  const state = {
    options: {
      chart: {
        toolbar: { show: true },
        // background: "#f9fafc",
      },
      xaxis: {
        type: "datetime" as const,
        categories: data?.map((price) => price.candle_date_time_kst),
        labels: {
          style: {
            colors: "black",
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: palette.brandBlue,
            downward: palette.brandRed,
          },
        },
      },
    },
    series: [
      {
        name: "price",
        data: data?.map((price) => {
          return {
            x: new Date(price.candle_date_time_kst).getTime(),
            y: [
              price.opening_price,
              price.high_price,
              price.low_price,
              price.trade_price,
            ],
          };
        }),
      },
    ],
    // optionsBar: {
    //   chart: {
    //     type: "bar",
    //     brush: {
    //       enabled: true,
    //       target: "candles",
    //     },
    //     selection: {
    //       enabled: true,
    //       xaxis: {
    //         categories: data?.map((price) => price.candle_date_time_kst),
    //       },
    //       fill: {
    //         color: "#ccc",
    //         opacity: 0.4,
    //       },
    //       stroke: {
    //         color: "#0D47A1",
    //       },
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   plotOptions: {
    //     bar: {
    //       columnWidth: "80%",
    //       colors: {
    //         ranges: [
    //           {
    //             from: -1000,
    //             to: 0,
    //             color: "#F15B46",
    //           },
    //           {
    //             from: 1,
    //             to: 10000,
    //             color: "#FEB019",
    //           },
    //         ],
    //       },
    //     },
    //   },
    //   stroke: {
    //     width: 0,
    //   },
    //   xaxis: {
    //     type: "datetime",
    //     categories: data?.map((price) => price.candle_date_time_kst),
    //     axisBorder: {
    //       offsetX: 13,
    //     },
    //   },
    //   yaxis: {
    //     labels: {
    //       show: false,
    //     },
    //   },
    // },
  };

  return (
    <div>
      <Chart
        type="candlestick"
        options={state.options}
        series={state.series}
        height={350}
      />
      {/* <Chart
        type="bar"
        options={state.optionsBar}
        series={state.series}
        height={160}
      /> */}
    </div>
  );
}

export default ChartGraph;
