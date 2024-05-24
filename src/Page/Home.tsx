import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { leftScreenData, leftVideo, rightScreenData, rightVideo } from "../constants/homeConstant";
import Screen from "../Component/Home/Screen";

const Home = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <ContainerS onMouseMove={handleMouseMove} onClick={() => navigate("/work")}>
      <ScreenContainerS>
        <Screen imgData={leftScreenData} VideoData={leftVideo} />
        <CenterTextS>willacreatvie.com</CenterTextS>
        <Screen imgData={rightScreenData} VideoData={rightVideo} videoFirstOption />
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
