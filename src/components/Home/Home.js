import React from "react";
import profile from "../../assets/profile.jpeg";
import {
  HomeContainer,
  HomeImage,
  HomeHeading,
  HomeDescription,
} from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeImage src={profile} alt="Profile" />
      <HomeHeading>
        Hi, Im <span>Amrit Singh</span>
      </HomeHeading>
      <HomeDescription>
        Highly motivated and enthusiastic Full Stack Engineer with experience in
        designing, developing and maintaining web applications using
        technologies such as Generative AI, Typescript, React, Next.js, Node.js,
        Python.
      </HomeDescription>
    </HomeContainer>
  );
};

export default Home;
