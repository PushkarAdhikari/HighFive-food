import RestaurantCard from "./RestauranrCard";
import resList from '../utils/mockData'
import { useState } from "react";

const Body = () => {

  const [resListArr, setResListArr] = useState(resList);

  const filteredResList = () => { 
   const updatedResList = resListArr.filter((res)=>(
      res.data.avgRating > 4
    ))
    setResListArr(updatedResList)
  }

  return (
    <div className='container mt-40'>
      <div className="filter">
        <button type="button" onClick={filteredResList}>Top rated Restaurant</button>
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