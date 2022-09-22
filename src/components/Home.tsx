import React from "react";

import Logo from '../components/Logo'
import "./Home.css";
function Home() {
 
  return (
    <div className="bgBox">
      <div className="homeContainer top">
        <div className="outline">
          {/* <div className="homeLogo"> */}
            <Logo />
          {/* </div> */}
        </div>
        </div>
        <div className="homeContainer bottom">
            <div className="outline">
                <h2 id="welcome">Welcome!</h2>
                <h1 id="CTA"> Select your section above! </h1>
            </div>
        </div>
    </div>
  );
}

export default Home;
