import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
        {props.bio}
        {props.links}
      </h1>
    </div>
  );
}

export default Home;
