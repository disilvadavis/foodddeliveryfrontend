const RestaurantCard = ({ restaurant }) => {
    return (
      <div className="restaurant-card">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
        <button>View Menu</button>
      </div>
    );
  };
  
  export default RestaurantCard;
  