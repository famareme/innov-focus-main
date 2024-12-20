import React from 'react';
import CardsHome from "./CardsHome"
import Slider from "./Slider"

const Home = () => {
  return ( 
    <div id='home'>
    <div className="banner">
      <div className="layer">
        <div className="container">
          <div className="banner-text-w3pvt">
          <Slider />
          </div>
        </div>
      </div>
    </div>
    
    <section className='banner-bottom pt-sm-5 pt-4 mt-sm-0 mt-2'>
            <CardsHome />
          </section>
    </div>
   );
}
 
export default Home;