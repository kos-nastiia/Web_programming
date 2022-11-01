const ctx = document.getElementById('myChart2').getContext('2d');
var gradient1 = ctx.createLinearGradient(0, 0, 0, 175);
gradient1.addColorStop(0.0, '#36d7e8');
gradient1.addColorStop(1.0, '#b194fa');
var gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
gradient2.addColorStop(0, '#06b99d');
gradient2.addColorStop(1, '#84d9d2');
var gradient3 = ctx.createLinearGradient(0, 0, 0, 175);
gradient3.addColorStop(0, '#ffbf96');
gradient3.addColorStop(1, '#fe7096');
const myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Second chart',
            data: [33, 33, 34],
            backgroundColor: [
                gradient1,
                gradient2,
                gradient3
            ],
        }]
    },
});


var xValues = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart1", {
    type: "bar",
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues
    }]
    },
});