import logo from "../../Assets/Images/logo.jpg";

import balloon from "../../Assets/Images/shutterstock.avif";
import "../Home/Home.css";

function Home() {
  
  return (
    <div className="App">
      <div className="fluid-container">
        <div className="row">
          <div class="col-xl-12">
            <img src={balloon} width="100%" height="100%"></img>
            <div class="carousel-caption">
              <marquee direction="right" behavior="alternate">
                <h1>Welcome to Dream Escape</h1>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
