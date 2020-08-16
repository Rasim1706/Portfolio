import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Particles
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              strole: {
                width: 1,
                color: "#e8f1f2",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                sizi_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </>
  );
};
export default Home;
