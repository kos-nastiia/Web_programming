const ctx = document.getElementById('myChart').getContext('2d');
var gradient1 = ctx.createLinearGradient(0, 0, 0, 175);
gradient1.addColorStop(0.0, '#36d7e8');
gradient1.addColorStop(1.0, '#b194fa');
var gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
gradient2.addColorStop(0, '#06b99d');
gradient2.addColorStop(1, '#84d9d2');
var gradient3 = ctx.createLinearGradient(0, 0, 0, 175);
gradient3.addColorStop(0, '#ffbf96');
gradient3.addColorStop(1, '#fe7096');
const myChart = new Chart(ctx, {
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