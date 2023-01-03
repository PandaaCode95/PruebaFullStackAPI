
require("dotenv").config();
const request = require("request");
const https = require ('https');
const axios = require("axios");
// const { response } = require("../app");
const BASE_URL = "https://api.themoviedb.org/";
const API_TOKEN = process.env.API_TOKEN;



async function getFilms(req,resp) {
  let url = BASE_URL + "3/trending/all/day?api_key=" + API_TOKEN;
    let data=
  axios.get(url).then(function (response) {
    
       resp.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data)

 
}
async function getPopular(req,resp) {
    let url =BASE_URL +"3/movie/popular?api_key=" + API_TOKEN +"&language=en-US&page=1";
    
    let data=
    axios.get(url).then(function (response) {
      console.log(response.data);
       resp.send(response.data)
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
        console.log("Fin del proceso")
    });
    console.log(data)
}
async function getTopRated(req,resp) {
    let url =BASE_URL +"3/movie/top_rated?api_key=" + API_TOKEN +"&language=en-US&page=1";
    
    let data=
    axios.get(url).then(function (response) {
    
       resp.send(response.data)
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
        console.log("Fin del proceso")
    });
    console.log(data)
}
async function getNew(req,resp) {
    let url =BASE_URL +"3/movie/latest?api_key=" + API_TOKEN +"&language=en-US&page=1";
    
    let data=
    axios.get(url).then(function (response) {
      
       resp.send(response.data)
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
        console.log("Fin del proceso")
    });
    console.log(data)
}
async function getSearch(req,resp) {
  console.log(req.query.filter)
 
    let filter= req.query.filter
    let url =
      BASE_URL +
      "3/search/movie?api_key=" +
      API_TOKEN +
      "&language=en-US&page=1&include_adult=false&query="+filter
    
    let data=
    axios.get(url).then(function (response) {
      console.log(response.data);
       resp.send(response.data)
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
        console.log("Fin del proceso")
    });
    console.log(data)
}

module.exports = { getFilms,getPopular,getTopRated, getNew, getSearch };
