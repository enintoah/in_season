const NavBar = {

  start() {
    NavBar.homeScroll()
    NavBar.cheatButton()
    NavBar.githubButton()
    NavBar.linkedIn()
  },

  homeScroll() {
    const navTitle = document.getElementById('nav_title')
    navTitle.addEventListener('click', ()=> {
      window.scrollTo({top: 0,
      behavior: 'smooth'
      })
    })
  }, 

  cheatButton() {
    const cheat = document.getElementsByClassName('cheat')[0]
    cheat.addEventListener(('click'), () => {
      location.href = 'https://spinthewheel.app/fast-food-2q47';
    })
  },

  githubButton() {
    const git = document.getElementById('github')
    git.addEventListener('click', () => {
      location.href = 'https://github.com/enintoah'
    })
  },

  linkedIn() {
    const link = document.getElementById('linkedIn')
    link.addEventListener('click', () => {
      location.href = 'https://www.linkedin.com/in/anthonie-lorsithong-551741232/'
    })
  }
}

export default NavBar