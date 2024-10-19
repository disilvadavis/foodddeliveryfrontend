import { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import axios from 'axios';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('YOUR_BACKEND_API_URL/restaurants')
      .then(response => setRestaurants(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Available Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
