import Veg from './scripts/veg'
// import Charter from './scripts/charts'
import Chart from 'chart.js/auto';
import Seasons from './scripts/seasons'


// window.Charter = Charter; 
window.Seasons = Seasons; 
window.Veg = Veg;


window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Dom fully loaded!!!")

  Seasons.default()
  Seasons.select()
  chart()



  const open = document.getElementById("tomato");
  const modal_container = document.getElementById('modal_container')
  const close = document.getElementById('close')

  open.addEventListener('click', () => {
    modal_container.classList.add('show');
  })


  close.addEventListener('click', () => {
    modal_container.classList.remove('show');
  })
  
})


function chart() {
  const find = document.getElementById('myChart')
  let myChart = new Chart(find, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
}