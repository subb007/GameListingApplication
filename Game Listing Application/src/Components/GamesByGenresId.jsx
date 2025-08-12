import React, { useEffect } from 'react';
import GlobalApi from '../Services/GlobalApi';


function GamesByGenresId({ gameList, selGenresName }) {
  useEffect(() => {
    console.log("GameList", gameList);
  }, []);

  const handleCardClick = async (gameId) => {
    try {
      const response = await GlobalApi.getGameStores(gameId);
      const stores = response.data.results;

      if (stores?.length) {
        // Open the first available store URL
        window.open(stores[0].url, '_blank');
      } else {
        alert("No store link available for this game.");
      }
    } catch (error) {
      console.error("Error fetching store URL:", error);
      alert("Failed to fetch game download page.");
    }
  };

  return (
    <div>
      <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selGenresName} Games</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {gameList.map((item) => (
          <div
            key={item.id}
            className='bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'
            onClick={() => handleCardClick(item.id)}
          >
            <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover' alt={item.name} />
            <h2 className='text-[20px] dark:text-white font-bold'>
              {item.name}
              <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-200 text-green-700 font-medium'>
                {item.metacritic}
              </span>
            </h2>
            <h2 className='text-gray-800 dark:text-gray-300'>
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
