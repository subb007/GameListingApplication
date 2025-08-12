import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGenresId from '../Components/GamesByGenresId';

function Home({ searchTerm }) {
  const [allGameList,setAllGameList]=useState();
  const [gameListByGenres,setGameListByGenres]=useState([]);
  const [selGenresName,setSelGenresName]=useState('Action');

  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4);
  },[])

  useEffect(() => {
  if (searchTerm && searchTerm.length > 1) {
    GlobalApi.searchGames(searchTerm).then((resp) => {
      setGameListByGenres(resp.data.results);
      setSelGenresName(`Results for "${searchTerm}"`);
    });
  } else {
    getAllGamesList();
    getGameListByGenresId(4); // default genre
  }
}, [searchTerm]);

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results)
    })
  }

  const getGameListByGenresId=(id)=>{
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      console.log("Game List By GenresId:", resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }
  return (
    <div className="grid grid-cols-4 px-8">
    <div className="hidden md:block">
      <GenreList
        setGenresId={(setGenresId) => getGameListByGenresId(setGenresId)}
        selectedGenresName={(name) => setSelGenresName(name)}
      />
    </div>
    <div className="col-span-4 md:col-span-3">
      {searchTerm && searchTerm.length > 1 ? (
        // ✅ If searching, show search results only
        <GamesByGenresId gameList={gameListByGenres} selGenresName={selGenresName} />
      ) : allGameList?.length > 0 && gameListByGenres.length > 0 ? (
        // ✅ Default layout when no search is active
        <>
          <Banner gameBanner={allGameList[0]} />
          <TrendingGames gameList={allGameList} />
          <GamesByGenresId
            gameList={gameListByGenres}
            selGenresName={selGenresName}
          />
        </>
      ) : (
        <p className="text-white mt-10">No games found.</p>
      )}
    </div>
  </div>
  )
}

export default Home
