import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`YOUR_BACKEND_API_URL/restaurants/${id}`)
      .then(response => setRestaurant(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      {/* Add menu and other details */}
    </div>
  );
};

export default RestaurantDetail;
