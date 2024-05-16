import React, { useState } from "react";
import styled from "styled-components";

interface ScreenType {
  imgData: string[];
  VideoData: string;
  videoFirstOption?: boolean;
}

function Screen({ imgData, VideoData, videoFirstOption = false }: ScreenType) {
  const [num, setNum] = useState<number>(videoFirstOption ? 3 : 0);

  const increaseNum = () => {
    setTimeout(() => {
      setNum((prevNum) => prevNum + 1);
    }, 100);
  };

  return (
    <Container onMouseEnter={increaseNum}>
      {imgData.map((imageUrl, index) => (
        <img src={imageUrl} alt="screen" className={num % 4 === index ? "visible" : "hidden"} />
      ))}
      <video src={VideoData} muted loop autoPlay className={num % 4 === 3 ? "visible" : "hidden"} />
    </Container>
  );
}

export default Screen;

const Container = styled.div`
  width: 50%;
  height: 100%;
  transition: opacity 1s;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50vh;
  }

  img,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1s;
    object-fit: cover;
  }

  .visible {
    opacity: 1;
  }

  .hidden {
    opacity: 0;
  }
`;
