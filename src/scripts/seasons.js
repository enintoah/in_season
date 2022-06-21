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
    let selected = e.target;
    let season = selected.className;
    let shown = document.getElementsByClassName('shown')[0];
    let hidden = document.getElementById(season)
    if (shown === hidden) {
      window.scrollTo(0, shown.scrollHeight)
    } 
    else {
      shown.classList.remove('shown');
      shown.classList.add('hidden');
      hidden.classList.remove('hidden')
      hidden.classList.add('shown')
      window.scrollTo(0, hidden.scrollHeight)
    }
  },

  current() {   
    const d = new Date()
    const month = d.getMonth()
    if (month > 1 && month < 5) return 'spring'
    if (month > 4 && month < 8) return 'summer'
    if (month > 7 && month < 11) return 'autumn'
    if (month < 2 || month === 11) return 'winter'
  }

}

export default Seasons;