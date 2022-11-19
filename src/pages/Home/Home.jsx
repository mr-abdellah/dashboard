import "./home.scss";
import Sidebar from "./../components/Sidebar/Sidebar";
import Navbar from "./../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="Home__container">
        <Navbar />
        <h1>container</h1>
      </div>
    </div>
  );
};

export default Home;
