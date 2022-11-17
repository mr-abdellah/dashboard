import "./home.scss";
import Sidebar from "./../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="Home__container">
        <h1>container</h1>
      </div>
    </div>
  );
};

export default Home;
