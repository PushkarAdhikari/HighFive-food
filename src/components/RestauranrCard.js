import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData: {data} } = props;
    const {cloudinaryImageId, name, cuisines, slaString, avgRating, costForTwoString } = data;
    console.log(data)  
    return (
      <> 
        <div className='card'>
          <a href="" className='restaurant-anchor'>
            <div className='restaurant-card'>
              <div>
                <img src={`${CDN_URL}/${cloudinaryImageId}`}
                  style={{ maxWidth: '100%' }} />
              </div>
              <h3>{name}</h3>
              <span className='cuisines'>{cuisines.join(', ')}</span>
              <div className='feedback'>
                <span className='rating'>★ {avgRating}</span>
                <span>{slaString}</span>
                <span>{costForTwoString}</span>
              </div>
            </div>
          </a>
        </div>
      </>
    )
  }

  export default RestaurantCard;