import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Food Delivery App</h1>
      <Link to="/restaurants">Browse Restaurants</Link>
    </div>
  );
};

export default Home;
