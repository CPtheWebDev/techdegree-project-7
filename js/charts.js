var ctx1 = document.getElementById('web-traffic-chart');
var myLineChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        label: 'Number of Visitors Weekly',
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
    },
    legend: {
        display: false
    }
}
});

var ctx2 = document.getElementById('daily-traffic-chart');
var myBarChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: 'Number of Visitors',
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
    },
    legend: {
        display: false
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
            '#34eb64',
            '#7bc9c6',
            '#7146e8'
        ],
        borderColor: [],
        borderWidth: 1
    }]
 }, 
 options: {
    legend: {
        position: 'right',
        labels: {
        boxWidth: 15
        }
    }
 }  
});