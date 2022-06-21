import chart from './charts'
import key from './keys'

const Veg = { 

  eventListeners() {
    const spring = document.getElementById("spring")
    const summer = document.getElementById("summer")
    const autumn = document.getElementById("autumn")
    const winter = document.getElementById("winter")
    const close = document.getElementById('close')

    spring.addEventListener('click', this.handleClick)
    summer.addEventListener('click', this.handleClick)
    autumn.addEventListener('click', this.handleClick)
    winter.addEventListener('click', this.handleClick)
    close.addEventListener('click', this.closeModal)
  }, 

  nutrition() {
    const veg = { 'shallot': [17, .1, 3.2, 2.5, 8], 'onion': [9, .1, 1.7, 1.1, 4.2], 'carrot': [10, .2, 2.8, .9, 4.7], 'cabbage': [6, .1, 2, 1, 3.2], 
    'green bean': [5.66, .55, 2.6, 1.42, 1.94], 'ginger': [18, .8, 2, 1.8, 1.7], 'tomato': [3.9, .2, 1.2, .9, 2.6],  'spinach': [3.63, .4, 2.2, 2.9, .4], 
    'asparagus': [3.9, .1, 2.1, 2.2, 1.9], 'artichokes': [11, .2, 5, 3.3, 1], 'cucumber': [3.5, 0, .5, .66, 1.7], 'bell peppers': [9, .5, 3.1, 1.5, 6.3], 
    'celery': [3, .2, 1.58, .7, 1.3], 'mushroom': [3.3, .3, 1, 3.1, 2], 'potato': [17, .1, 2.2, 2, .8], 'pak choi': [2.2, .2, 1, 1.5, 1.2], 
    'broccoli': [6.64, .3, 2.4, 2.8, 1.7], 'corn': [19, 1, 1, 3, 5], 'brussel sprouts': [9, .3, 3.8, 3.4, 2.2], 'parsnip': [18, .3, 4.9, 1.2, 4.8], 
    'kale': [9, .9, 2, 4.3, 1.3], 'leek': [14, .3, 1.8, 1.5, 3.9], 'turnip': [6, .1, 1.8, .9, 3.8], 'cauliflower': [5, .3, 2, 1.9, 1.9]
    }
    return veg
  }, 

  recipes(name) {
    const url = `https://fit-life-food.p.rapidapi.com/recipes/${name}`;
    const options = {
      method: 'GET',
      headers: key
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error' + err))
  }, 

  handleClick(e) {
    e.preventDefault(); 
    let current = e.target; 
    Veg.modal(current);
  },
  
  modal(veg) {
    const canvasContainer = document.getElementById('canvas_container');
    const canvas = document.createElement('canvas');
    canvas.setAttribute("id", "myChart")
    canvasContainer.append(canvas);
    const that = this;
    const modalContainer = document.getElementById('modal_container');
    if (!that.nutrition()[veg.id]) {
      return 
    }
    else {
      chart(that.nutrition()[veg.id]);
      modalContainer.classList.add('show');
    }
  }, 
  
  closeModal(e) {
    e.preventDefault(); 
    const modalContainer = document.getElementById('modal_container');
    modalContainer.classList.remove('show');
    const canvas = document.querySelector('canvas');
    canvas.remove()
  },

  all() {
    let vegs = [
      'shallot', 'onion', 'carrot', 'cabbage', 'green bean', 'ginger', 'tomato', 
      'spinach', 'asparagus', 'artichokes', 'cucumber', 'bell peppers', 'celery',
      'mushroom', 'potato', 'pak choi', 'broccoli', 'corn', 'brussel sprouts', 
      'parsnip', 'kale', 'leek', 'turnip', 'cauliflower'
    ];
    return vegs
  },

  random() {
    let vegs = this.vegs();
    let randomNum = Math.floor(Math.random() * 23)
    return vegs[randomNum]
  },
  
}

export default Veg                                                                      