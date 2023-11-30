import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const leftScreenData = [
  'https://willacreative.com/wp-content/uploads/Rectangle-3841-2-819x1024.png',
  'https://willacreative.com/wp-content/uploads/Rectangle-11-4.png',
  'https://willacreative.com/wp-content/uploads/home2h.jpg',
];

const leftVideo =
  'https://player.vimeo.com/progressive_redirect/playback/790130112/rendition/1080p/file.mp4?loc=external&signature=5c93f76c51d11bfb23a3fcebb111838fc29683c664715e4008dab67b967aa2dd';

const rightScreenData = [
  'https://willacreative.com/wp-content/uploads/home2-1-819x1024.jpg',
  'https://willacreative.com/wp-content/uploads/home3-819x1024.jpg',
  'https://willacreative.com/wp-content/uploads/Screen-Shot-2021-07-28-at-9.23-1-819x1024.png',
];

const rightVideo =
  'https://player.vimeo.com/progressive_redirect/playback/790304859/rendition/1080p/file.mp4?loc=external&signature=5fcf83fa08820463173a638eff04c5028ac14b09fad588c0aa0f58586403ff6d';

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
        <LeftScreenS onMouseEnter={leftPlusNum} leftNum={leftNum}>
          <img src={leftScreenData[leftNum % 4]} alt='leftscreen' />
          <video src={leftVideo} muted loop autoPlay />
        </LeftScreenS>
        <CenterTextS>willacreatvie.com</CenterTextS>
        <RightScreenS onMouseEnter={rightPlusNum} rightNum={rightNum}>
          <img src={rightScreenData[rightNum % 4]} alt='lefrightscreentscreen' />
          <video src={rightVideo} muted loop autoPlay />
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

const LeftScreenS = styled.article<{ leftNum: number }>`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
  width: 50%;
  height: 100%;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    display: ${(props) => (props.leftNum % 4 === 3 ? 'none' : null)};
  }
  video {
    display: ${(props) => (props.leftNum % 4 === 3 ? null : 'none')};
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

const RightScreenS = styled.article<{ rightNum: number }>`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
  object-fit: cover;
  width: 50%;
  height: 100%;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    display: ${(props) => (props.rightNum % 4 === 3 ? 'none' : null)};
  }
  video {
    display: ${(props) => (props.rightNum % 4 === 3 ? null : 'none')};
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
