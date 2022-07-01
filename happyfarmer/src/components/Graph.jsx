import React, { useState } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import Setting from './Setting';
import setting from '../assets/settings.png';

// const donutData = {
//   series: [50, 40, 30, 10, 0],
//   options: {
//     chart: {
//       type: 'donut',
//     },
//     legend: {
//       position: 'bottom',
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//       },
//     ],
//     plotOptions: {
//       pie: {
//         donut: {
//           // hollow: {
//           //   margin: 15,
//           //   size: '70%',
//           //   image: '../../css/images/a-icon.jpg',
//           //   imageWidth: 64,
//           //   imageHeight: 64,
//           //   imageClipped: false
//           // },
//           labels: {
//             show: true,
//             total: {
//               showAlways: true,
//               show: true,
//               label: 'ALARM',
//               fontSize: '12px',
//               color: 'red',
//             },
//             value: {
//               fontSize: '22px',
//               show: true,
//               color: 'blue',
//             },
//           },
//         },
//       },
//     },
//     labels: ['침입', '배회', '쓰러짐', '화재', '안전모'],
//     title: {
//       text: '이벤트별 통계',
//       align: 'center',
//     },
//   },
// };

const test = {
  series: [
    {
      name: 'Desktops',
      data: [10, 69, 35, 28, 39],
    },
  ],
  options: {
    chart: {
      type: 'line',
      stacked: false,
      foreColor: '#a8a8a8',
      fontFamily: 'poppinsM',
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
        zoomedArea: {
          fill: {
            color: '#65B065',
            opacity: 0.15,
          },
          stroke: {
            opacity: 0,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    toolbar: {
      autoSelected: 'zoom',
    },
    legend: {
      position: 'bottom',
    },
    colors: ['#65B065'],
    stroke: {
      curve: 'smooth',
    },
    grid: {
      row: {
        colors: ['#ffffff'],
      },
    },
    responsive: [
      {
        breakpoint: 767,
        options: {
          chart: {
            height: '140',
          },
        },
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
  },
  yaxis: {
    labels: {
      formatter: function (data) {
        return (data / 100000000).toFixed(0);
      },
    },
  },
};

function Graph() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && <Setting></Setting>}
      <Container>
        <TitleContainer>
          <DataTitle>Temperature</DataTitle>
          <SettingButton type='button' onClick={() => setToggle(!toggle)}>
            <SettingButtonImage
              src={setting}
              alt='setting button'
            ></SettingButtonImage>
          </SettingButton>
        </TitleContainer>
        <GraphContainer>
          <ChartContainer>
            <ReactApexChart
              options={test.options}
              series={test.series}
              type='line'
              height={160}
            ></ReactApexChart>
          </ChartContainer>
        </GraphContainer>
      </Container>
    </>
  );
}

export default Graph;

const Container = styled.div`
  width: 43%;
  height: fit-content;
  padding: 0.5vh 2.5vh 1.5vh 2.5vh;
  overflow: hidden;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 85%;
    padding: 0.7vh 1.5vh;
    margin: 2vh 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    margin: 1.2vh 0;
  }
`;

const DataTitle = styled.div`
  font-family: 'poppinsSB';
  font-size: 14px;
  color: #5f5f5f;
  margin-left: 1vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 11px;
    margin-left: 0.5vh;
  }
`;

const SettingButton = styled.button`
  width: 7%;
  height: 2.5vh;
  margin-right: 1vh;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 1.6vh;
    margin-right: 0.4vh;
  }
`;

const SettingButtonImage = styled.img`
  height: 2.5vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 1.6vh;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24vh;
  padding: 1vh 0;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 1px 3px 6px rgba(142, 142, 142, 0.16);
  position: relative;
  @media screen and (max-width: 767px) and (orientation: portrait) {
  }
`;

const ChartContainer = styled.div`
  position: absolute;
  top: 1vh;
  left: 0;
`;
