const axios = require("axios");

async function getHotels() {
  return (await axios.get('./hotels.json')).data;
}

async function list() {
  let res = await getHotels();
  return res;
}

export {
  list
}