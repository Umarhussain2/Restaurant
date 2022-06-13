import React from "react";
import {Link}from 'react-router-dom'
function Home() {



  return (
    <div className="home">
      <div className="homecontent">
        <div className="homeleft">
          <h1>
            A Landmark A landmark in the <br></br>Culinary Landscape<br></br>
            of Chennai City.
          </h1>
          <h3>
            Since the BLUE Hotel opened its doors<br></br>
            in 1951, it has delivered scrumptious food packed<br></br>
            with authentic, delicious flavours enriched by them<br></br>
            restaurant's seventy year old history. <br></br>
            It was the first restaurant to open in a post-independent<br></br>
            Madras, and stands a landmark till today.
          </h3>
        </div>
        <div className="img">
          <img
            src="https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"
            width="500px"
            height="400px"
          ></img>
          <Link to ='/home' className ='link-click'> home</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
