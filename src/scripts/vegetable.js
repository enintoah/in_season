class Vegetable {
  constructor(name) {
    this.name = name
  }

  nutrition() {
    const url = `https://fit-life-food.p.rapidapi.com/nutrition/${this.name}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '89d7858e63msh2125295e901cc51p17d9e7jsn37923b4e324e',
        'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error' + err))
  }

  recipes() {
    const url = `https://fit-life-food.p.rapidapi.com/recipes/${this.name}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '89d7858e63msh2125295e901cc51p17d9e7jsn37923b4e324e',
        'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error' + err))
  }
}

export default Vegetable