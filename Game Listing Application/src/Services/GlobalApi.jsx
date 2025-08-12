import axios from "axios"

const key="2d8b044fcf0643328a992218e97207a5"
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api',
});

const getGenreList=axiosCreate.get('/genres?key='+ key);
const getAllGames=axiosCreate.get('/games?key='+ key);
const getGameListByGenreId=(id)=>
  axiosCreate.get('/games?key='+key+'&genres='+id);
const searchGames = (query) => 
  axiosCreate.get(`/games?key=${key}&search=${query}`);
const getGameStores = (id) =>
  axiosCreate.get(`/games/${id}/stores?key=${key}`);

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId,
    searchGames,
    getGameStores,
}