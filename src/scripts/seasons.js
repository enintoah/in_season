const Seasons = {
  default() {
    let season = this.current()
    const section = document.getElementById(season)
    section.classList.add('shown')
    section.classList.remove('hidden')
  },

  select() {
    const home = document.getElementById('homepage')
    home.addEventListener('click', this.showSeason)
  },

  showSeason(e) {
    e.preventDefault();
    Seasons.doubleCheck()
    let selected = e.target;
    let season = selected.className;
    let shown = document.getElementsByClassName('shown')[0];
    let hidden = document.getElementById(season)
    if (shown === hidden) {
      window.scrollTo({top: shown.scrollHeight,
        behavior: 'smooth'
      })
    } 
    else if (hidden !== shown){
      shown.classList.remove('shown');
      hidden.classList.remove('hidden')
      shown.classList.add('hidden');
      hidden.classList.add('shown')
      window.scrollTo({top: hidden.scrollHeight,
        behavior: 'smooth'
      })
    }
  },

  current() {   
    const d = new Date()
    const month = d.getMonth()
    if (month > 1 && month < 5) return 'spring'
    if (month > 4 && month < 8) return 'summer'
    if (month > 7 && month < 11) return 'autumn'
    if (month < 2 || month === 11) return 'winter'
  },

  doubleCheck() {
    const sections = [
      document.getElementById('winter'), document.getElementById('summer'), 
      document.getElementById('autumn'), document.getElementById('spring')
    ]
    sections.forEach(el => { 
      if (el.classList[0] === undefined) {
        el.classList.add('shown')
      }
    })
    return 
  }
}

export default Seasons;