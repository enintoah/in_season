const { default: Util } = require("./scripts/util");
const { default: Vegetable } = require("./scripts/vegetable");

window.Util = Util;
window.Vegetable = Vegetable;

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Dom fully loaded!!!")
  const home = document.getElementById("homepage")
  const spring = document.getElementById("spring")
  const summer = document.getElementById("summer")
  const autumn = document.getElementById("autumn")
  const winter = document.getElementById("winter")
})