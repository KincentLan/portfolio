import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const NavBarDiv = styled.div`
  overflow: hidden;
  float: right;
  padding: 20px;
  
  a {
      color: #FFFFFF;
      text-align: center;
      font-family: "BioRhyme", sans-serif;
      font-size: 20px;
      padding: 20px;
      text-decoration: none;
      transition: 0.3s;
  }
  
  a:hover {
    color: #28FFF2;
    font-size: 21px;
  }
`

function NavBar() {

    return (
        <NavBarDiv>
            <a href="about">About</a>
            <a href="experience">Experience</a>
            <a href="projects">Projects</a>
            <a href="resume">Resume</a>
        </NavBarDiv>
    );
}

export default NavBar;
