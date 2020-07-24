var ctx1 = document.getElementById('web-traffic-chart');
var myLineChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'TRAFFIC',
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        backgroundColor: [
            'rgba(113, 70, 232, 0.2)'
        ],
        borderColor: [
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8'
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});

var ctx2 = document.getElementById('daily-traffic-chart');
var myBarChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: 'DAILY TRAFFIC',
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: [
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8',
            '#7146e8'
        ],
        borderColor: [],
        borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});

var ctx3 = document.getElementById('mobile-user-chart');
var myDoughnutChart = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
        label: 'MOBILE USERS',
        data: [1, 1, 6],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            '#7146e8'
        ],
        borderColor: [],
        borderWidth: 1
    }]
 }
});