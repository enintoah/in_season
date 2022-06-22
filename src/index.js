import Veg from './scripts/veg'
import Seasons from './scripts/seasons'
import NavBar from './scripts/navbar'

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Dom fully loaded!!!")
  Seasons.start()
  Veg.start()
  NavBar.start()
})

