import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { leftScreenData, leftVideo, rightScreenData, rightVideo } from '../constants/homeConstant';

const Home = () => {
  const navigate = useNavigate();
  const [leftNum, setLeftNum] = useState(0);
  const [rightNum, setRighttNum] = useState(3);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const leftPlusNum = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTimeout(function () {
      setLeftNum(leftNum + 1);
    }, 100);
  };

  const rightPlusNum = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTimeout(function () {
      setRighttNum(rightNum + 1);
    }, 100);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleNavigate = () => {
    navigate('/work');
  };

  return (
    <ContainerS onMouseMove={handleMouseMove} onClick={handleNavigate}>
      <ScreenContainerS>
        <LeftScreenS onMouseEnter={leftPlusNum}>
          {leftScreenData.map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt='leftScreen'
              className={leftNum % 4 === index ? 'visible' : 'hidden'}
            />
          ))}
          <video
            src={leftVideo}
            muted
            loop
            autoPlay
            className={leftNum % 4 === 3 ? 'visible' : 'hidden'}
          />
        </LeftScreenS>
        <CenterTextS>willacreatvie.com</CenterTextS>
        <RightScreenS onMouseEnter={rightPlusNum}>
          {rightScreenData.map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt='rightScreen'
              className={rightNum % 4 === index ? 'visible' : 'hidden'}
            />
          ))}
          <video
            src={rightVideo}
            muted
            loop
            autoPlay
            className={rightNum % 4 === 3 ? 'visible' : 'hidden'}
          />
        </RightScreenS>
      </ScreenContainerS>
      <HomeCursor mousePosition={mousePosition}>willacreative.com</HomeCursor>
    </ContainerS>
  );
};

export default Home;

const ContainerS = styled.main`
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
  cursor: none;
  @media screen and (max-width: 768px) {
    cursor: pointer;
  }
`;

const ScreenContainerS = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftScreenS = styled.article`
  transition: all 1s;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
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

const CenterTextS = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    clear: both;
    height: 60px;
    position: absolute;
    width: 100%;
    top: 50%;
    z-index: 99;
    background: white;
    font-weight: 500;
    font-size: 10.5vw;
    line-height: 60px;
    letter-spacing: -0.76px;
    text-align: center;
    text-transform: uppercase;
    padding: 5px;
  }
`;

const RightScreenS = styled.article`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
  object-fit: cover;
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
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

const HomeCursor = styled.div<{ mousePosition: { x: number; y: number } }>`
  @media screen and (min-width: 768px) {
    position: absolute;
    left: ${(props) => `${props.mousePosition.x - 141}px`};
    top: ${(props) => `${props.mousePosition.y}px`};
    opacity: 1;
    white-space: nowrap;
    text-transform: uppercase;
    mix-blend-mode: difference;
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: -0.64px;
    color: #fff;
    z-index: 999;
    pointer-events: none;
  }
  @media screen and (min-width: 990px) {
    font-size: 32px;
  }
`;
