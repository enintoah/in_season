const Util = {

  vegs() {
    let vegs = [
      'shallot', 'onion', 'carrot', 'cabbage', 'green bean', 'ginger', 'tomato', 
      'spinach', 'asparagus', 'artichokes', 'cucumber', 'bell peppers', 'celery',
      'mushroom', 'potato', 'pak choi', 'broccoli', 'corn', 'brussel sprouts', 
      'parsnip', 'kale', 'leek', 'turnip', 'cauliflower'
    ];
    return vegs
  },

  randomVeg() {
    let vegs = this.vegs();
    let randomNum = Math.floor(Math.random() * 23)
    return vegs[randomNum]
  },

  whatSeason() {
    const d = new Date()
    const month = d.getMonth()
    if (month > 1 && month < 5) return 'spring'
    if (month > 4 && month < 8) return 'summer'
    if (month > 7 && month < 11) return 'autumn'
    if (month < 2 || month === 11) return 'winter'
  }
}

export default Util