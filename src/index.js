import Veg from './scripts/veg'
import Seasons from './scripts/seasons'

window.Seasons = Seasons; 
window.Veg = Veg;


window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Dom fully loaded!!!")
  Seasons.default()
  Seasons.select()
  Veg.eventListeners()

  const navTitle = document.getElementById('nav_title')
  navTitle.addEventListener('click', ()=> {
    window.scrollTo({top: 0,
    behavior: 'smooth'
    })
  })
})

