import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function WeatherApp() {

  const threeHourlyData = ["12:00", "15:00", "18:00", "21:00", "00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"]

    const sampleData = [43, 40, 50, 40, 70, 40, 45, 33, 40, 60, 40, 50, 36];
  
    const canvasData = {
      datasets: [
        {
          label: "Home",
          borderColor: "nightblue",
          pointRadius: 5,
          fill: false,
          backgroundColor: 'yellow',
          lineTension: 0.4,
          data: sampleData,
          borderWidth: 1,
          pointBackgroundColor: "ccffcc",
          pointWidth: 10,
          pointHoverRadius: 10,
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          grid: {
            display: false,
          },
          labels: threeHourlyData,
          ticks: {
            color: "aliceblue",
            font: {

              size: 12,
            },
          },
        },
        y: {
          display: false,
          grid: {
            display: true,
          },
          border: {
            display: false,
          },
          min: 0,
          max: 80,
          ticks: {
            stepSize: 10,
            color: "green",
            font: {
              family: "Nunito",
              size: 12,
            },
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    };

    return (
        <div className="hidden w-full p-3 rounded-lg border-3 mt-3 border-green-50 md:block">
            <Line data={canvasData} options={options}/>
        </div>
    )
} 

// export const getTodayForecastWeather = (
//   response,
//   current_date,
//   current_datetime
// ) => {
//   let all_today_forecasts = [];

//   if (!response || Object.keys(response).length === 0 || response.cod === '404')
//     return [];
//   else
//     response?.list.slice().map((item) => {
//       if (item.dt_txt.startsWith(current_date.substring(0, 10))) {
//         if (item.dt > current_datetime) {
//           all_today_forecasts.push({
//             time: item.dt_txt.split(' ')[1].substring(0, 5),
//             icon: item.weather[0].icon,
//             temperature: Math.round(item.main.temp) + ' °C',
//           });
//         }
//       }
//       return all_today_forecasts;
//     });

//   if (all_today_forecasts.length < 7) {
//     return [...all_today_forecasts];
//   } else {
//     return all_today_forecasts.slice(-6);
//   }
// };