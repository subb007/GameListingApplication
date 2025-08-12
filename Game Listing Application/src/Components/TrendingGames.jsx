import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log("Trending GameList:", gameList);
  }, [gameList]);

  const handleCardClick = async (gameId) => {
    try {
      const response = await GlobalApi.getGameStores(gameId);
      const stores = response.data.results;

      if (stores?.length) {
        window.open(stores[0].url, "_blank");
      } else {
        alert("No store link available for this game.");
      }
    } catch (error) {
      console.error("Error fetching store URL:", error);
      alert("Failed to fetch game download page.");
    }
  };

  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="md:grid mt-5 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {gameList.slice(0, 4).map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="bg-[#76a8f75e] group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer rounded-lg p-2"
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="h-[270px] rounded-lg object-cover w-full"
            />
            <h2 className="dark:text-white text-[20px] font-bold mt-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingGames;
