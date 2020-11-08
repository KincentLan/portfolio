import React, {useEffect, useState}from 'react';
import styled from 'styled-components';
import { FaGithubAlt, FaLinkedin, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';

const HeroContainer = styled.div`
  padding-top: 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

const Intro = styled.section`
  position: absolute;
  margin-left: 10%;
  font-family: 'BioRhyme', serif;

  h1 {
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 80px;
    text-shadow: 4px 4px 0px #177E89;
    margin: 0;
    padding: 0;
  }

  h2 {
    color: #28FFF2;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 45px;
    color: #28FFF2;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-family: BioRhyme;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 80px;
    margin: 0;
    padding: 0;

    color: #ADD6DA;
  }
  
  h4 {
   font-size: 30px;
   color: #FFFFFF;
   padding: 0;
   line-height: 80px;
   margin: 0;
  }
  
  h4 svg {
    margin-right: 30px;
  }
  
  a {
    text-decorations: none;
    color: white;
    transition: 0.3s;
  }
  
  a:hover {
    color: #28FFF2;
    font-size: 31px;
  }
`

function Hero() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight > height) {
        setHeight(window.innerHeight);
      }
    }
    window.addEventListener('resize', handleResize);
  })

  return (
    <HeroContainer style={{height: height}}>
      <Intro>
        <h2>Greetings! My name is</h2>
        <h1>Kincent Lan</h1>
        <h3>I code your problems away!</h3>
        <h4><a href="https://github.com/KincentLan/"><FaGithubAlt /></a>
          <a href="https://www.linkedin.com/in/kincent-lan/"><FaLinkedin /></a>
          <a href="https://www.facebook.com/profile.php?id=100010178592339"><FaFacebookSquare /></a>
          <a href="mailto:lan.k@northeastern.edu"><FaEnvelope /></a></h4>
      </Intro>
    </HeroContainer>
  );
}

export default Hero;
