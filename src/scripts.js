const axios = require("axios");

const options = {
  method: "GET",
  url: "https://quotes15.p.rapidapi.com/quotes/random/",
  headers: {
    "X-RapidAPI-Key": "b723c16644mshb9e1ad5089cb612p1a9e00jsne6fd15687231",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com"
  }
};

function generateQuote() {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      pquote.innerHTML = response.data.content;
      pauthor.innerHTML = response.data.originator.name;
    })
    .catch(function (error) {
      console.error(error);
    });
}

let pquote = document.querySelector("#quote");
let pauthor = document.querySelector("#author");

generateQuote();
