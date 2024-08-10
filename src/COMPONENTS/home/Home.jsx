import Aos from "aos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "./Banner";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
        {/* its the main landing page*/}
        <Banner></Banner>
    </div>
  );
};

export default Home;
