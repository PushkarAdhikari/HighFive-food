import { useEffect, useState } from "react";
import RestaurantCard from "./RestauranrCard";
import resList from '../utils/mockData'
import SimmerUI from "./SimmerUI";

const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [resListArr, setResListArr] = useState(resList);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getAllRestaurant();
  }, [])

  async function getAllRestaurant() {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5800357&lng=77.32741709999999&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json(); 
    setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  }

  const filteredResList = () => {
    const updatedResList = filteredRestaurents.filter((res) => (
      res.data.avgRating > 4.1
    ))
    setFilteredRestaurents(updatedResList)
  }

  function searchFilterData(sText, allRestaurents) {
    const stextLowecase = sText.toLowerCase();
    const filteredData = allRestaurents.filter((restaurant) => {
      const restaurantLowercase = restaurant.data.name.toLowerCase();
      return restaurantLowercase.includes(stextLowecase)
    })
    setFilteredRestaurents(filteredData);
  }
  
  if(!allRestaurents) return null;

  return allRestaurents.length === 0 ? (
    <SimmerUI />
  ) : (
    <div className='container'>
      <div className="filterWrapper">
        <div className="filter">
          <button type="button" onClick={filteredResList}>Top rated Restaurant</button>
        </div>
        <div className="search">
          <input type="text" name="search-text" value={searchText} onChange={(e) => (setSearchText(e.target.value))} /><button type="button" onClick={() => { searchFilterData(searchText, resListArr) }}>Search</button>
        </div>
      </div>
      <div className='card-wrapper'>
        {
          filteredRestaurents.map((restaurantList) => (
            <RestaurantCard key={restaurantList.data.id} resData={restaurantList} />
          ))
        }
        <br /><br /><br /><br />
      </div>
    </div>
  )
}

export default Body;