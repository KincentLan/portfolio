import React, {useEffect, useState}from 'react';
import styled from 'styled-components';
import myselfPic from '../myself.JPG';

const AboutContainer = styled.div`
    overflow: hidden;
`

const AboutRectangle = styled.section`
  background: #323031;
  width: 85%;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.25);
  font-family: "BioRhyme", sans-serif;
  border-radius: 50px;
  margin: auto;
  position: relative;
  
  .dot {
      height: 20px;
      width: 20px;
      background-color: #C4C4C4;
      border-radius: 50%;
      position: absolute;
  }
  
  #lefttop {
    top: 25px;
    left: 40px;
  }
  
  #righttop {
    top: 25px;
    right: 40px;
  }
  
  #leftbottom {
    bottom: 25px;
    left: 40px;
  }
  
  #rightbottom {
    bottom: 25px;
    right: 40px;
  }
`

const AboutContentContainer = styled.section`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const AboutContent = styled.section`
  margin: auto;
  width: 90%;
  color: #FFFFFF;
  font-family: "BioRhyme", sans-serif;
  padding: 0px 0px 10px 0px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center; 
  padding-top: 50px;
  padding-bottom: 50px;
  
  @media only screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
  
  h1 {
    font-family: BioRhyme;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: #FFC857;
    text-shadow: 3px 3px 0px #8D6E00;
    margin: 0;
    padding: 0;
  }
  
  h2 {
   font-family: BioRhyme;
   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 31px;
   padding: 10px;
  }
  
  img {
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 50px;
  }
`

function Experience() {
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
        <AboutContainer>
            <AboutRectangle>
                <span id="lefttop" className="dot"></span>
                <span id="righttop" className="dot"></span>
                <span id="leftbottom" className="dot"></span>
                <span id="rightbottom" className="dot"></span>
                <AboutContentContainer>
                    <AboutContent>
                        <div>
                            <h1>About Moi</h1>
                            <h2>Hello! Hola! <span style={{fontFamily: "Noto Sans JP"}}> 你好! こんにちは！</span> </h2>
                            <h2>I’m Kincent, a sophomore studying computer science at <span style={{color: '#FFC857'}}>Northeastern University. </span>
                                I am based in the <span style={{fontWeight: 'bold'}}>New York and Boston area.</span></h2>
                            <h2>I absolutely love solving problems by building web applications!
                                Currently, I am looking for a <span style={{color: '#FFC857'}}>Software Engineering Co-op/Internship.</span></h2>
                        </div>
                        <div>
                            <img src={myselfPic} />
                        </div>
                    </AboutContent>
                </AboutContentContainer>
            </AboutRectangle>
        </AboutContainer>
    );
}

export default Experience;
