let Hourly = [
  0,
  500,
  1000,
  750,
  1250,
  1750,
  1250,
  1500,
  1000,
  1500,
  2000,
  1500,
  2000
];
let Daily = [
  1200,
  500,
  800,
  1550,
  1250,
  1750,
  1250,
  1500,
  300,
  1500,
  1400,
  1500,
  2300
];
let Weekly = [
  600,
  600,
  1000,
  750,
  1850,
  750,
  1250,
  500,
  1000,
  100,
  2000,
  1500,
  2000
];
let Monthly = [
  2000,
  1500,
  2000,
  750,
  500,
  1750,
  2050,
  1500,
  1800,
  500,
  2000,
  100,
  0
];
let traffic_buttons = document.querySelectorAll(".traffic-header button");
let traffic_buttons_ul = document.querySelector(".traffic-header ul");

//Setting initial traffic graph
let Data = Hourly;
let first_traffic_button = document.querySelector(".traffic-link button");
first_traffic_button.style.backgroundColor = "lightgreen";
first_traffic_button.style.color = "white";

function clicked_traffic_header(ev) {
  ev.target.style.backgroundColor = "lightgreen";
  ev.target.style.color = "white";
  Data = eval(ev.target.textContent);
}

//Traffic graph
var traffic = document.getElementById("myChart").getContext("2d");
let Reset_function = () => {
  var chart = new Chart(traffic, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(116,119,191,.15)",
          borderColor: "rgb(116,119,191)",
          borderWidth: 1,
          data: Data
        }
      ]
    },

    options: {
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves
        },
        point: {
          radius: 8
        }
      },

      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMax: 2500,
              suggestedMin: 0,
              stepSize: 500,

              labelOffset: 25
              //padding: 40
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              labelOffset: 65,
              //padding: 40
              suggestedMax: 66,
              suggestedMin: 0,
              stepSize: 6
            }
          }
        ]
      }
    }
  });
};
Reset_function();

var daily_traffic = document.getElementById("myChart2").getContext("2d");
var myBarChart = new Chart(daily_traffic, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        backgroundColor: "rgb(116,119,191)",
        data: [50, 75, 150, 100, 200, 175, 75]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 250,
            suggestedMin: 0,
            stepSize: 50,

            labelOffset: 25
            //padding: 40
          }
        }
      ]
    }
  }
});

var mobile_users = document.getElementById("myChart3").getContext("2d");
var myDoughnutChart = new Chart(mobile_users, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Phone", "Tablets"],
    datasets: [
      {
        backgroundColor: ["#51B6C8", "#7477BF", "#78CF82"],
        data: [1000, 5000, 2000]
      }
    ]
  },
  options: {
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "normal",
        fontSize: 22
      }
    }
  }
});

//Traffic Buttons
traffic_buttons_ul.addEventListener("click", ev => {
  if (ev.target.tagName == "BUTTON") {
    for (let i = 0; i < traffic_buttons.length; i++) {
      traffic_buttons[i].style.backgroundColor = "white";
      traffic_buttons[i].style.color = "black";
    }
    clicked_traffic_header(ev);
    Reset_function();
  }
});
