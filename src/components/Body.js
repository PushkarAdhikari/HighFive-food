import RestaurantCard from "./RestauranrCard";
import resList from '../utils/mockData'
import { useState } from "react";

const Body = () => {

  const [resListArr, setResListArr] = useState(resList);
  const [searchText, setSearchText] = useState('');

  const filteredResList = () => {
    const updatedResList = resListArr.filter((res) => (
      res.data.avgRating > 4
    ))
    setResListArr(updatedResList)
  }

  function searchFilterData(sText, resCardArr) {
    const stextLowecase = sText.toLowerCase();
    const filteredData = resCardArr.filter((restaurant) => {
      const restaurantLowercase = restaurant.data.name.toLowerCase();
      return restaurantLowercase.includes(stextLowecase)
    })
    setResListArr(filteredData);
  }

  return (
    <div className='container mt-40'>
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
          resListArr.map((restaurantList) => (
            <RestaurantCard key={restaurantList.data.id} resData={restaurantList} />
          ))
        }
        <br /><br /><br /><br />
      </div>
    </div>
  )
}

export default Body;