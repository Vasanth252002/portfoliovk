import React from 'react'
import {useState,useEffect} from "react"
import './Banner.css'
import 'atropos/css'
import Atropos from 'atropos/react';

function Banner() {
  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(600 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "World!", "Programmers!", "Coders" , "Hackers!" , "Developers!"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return(
    <div id="banner" className="banner-parent">
        <div className="banner-innerparent">
          <h1 className="hello">Hello</h1>
          <h1 className="dynamic"><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "World!", "Programmers!", "Coders!" , "Hackers!","Developers!"]'><span className="wrap">{text}</span></span></h1>
        </div>
      
    </div>
  )
}

export default Banner