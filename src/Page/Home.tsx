import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const leftScreenData = [
  'https://willacreative.com/wp-content/uploads/Rectangle-3841-2-819x1024.png',
  'https://willacreative.com/wp-content/uploads/Rectangle-11-4.png',
  'https://willacreative.com/wp-content/uploads/home2h.jpg',
];

const leftVideo =
  'https://download-video.akamaized.net/v2-1/playback/d3b3d719-f04b-466d-b847-ab1861100de4/38abdc0b-0eab056b?__token__=st=1697707848~exp=1697722248~acl=%2Fv2-1%2Fplayback%2Fd3b3d719-f04b-466d-b847-ab1861100de4%2F38abdc0b-0eab056b%2A~hmac=bac0f197d16abf4540078825a3c77b016d99f06e1a54bad0f12b99ff7ff35446&r=dXMtY2VudHJhbDE%3D';

const rightScreenData = [
  'https://willacreative.com/wp-content/uploads/home2-1-819x1024.jpg',
  'https://willacreative.com/wp-content/uploads/home3-819x1024.jpg',
  'https://willacreative.com/wp-content/uploads/Screen-Shot-2021-07-28-at-9.23-1-819x1024.png',
];

const rightVideo =
  'https://player.vimeo.com/progressive_redirect/playback/790304859/rendition/1080p/file.mp4?loc=external&signature=5fcf83fa08820463173a638eff04c5028ac14b09fad588c0aa0f58586403ff6d';

const Home = () => {
  const [leftNum, setLeftNum] = useState(0);
  const [rightNum, setRighttNum] = useState(3);

  const leftPlusNum = () => {
    setLeftNum(leftNum + 1);
  };

  const rightPlusNum = () => {
    setRighttNum(rightNum + 1);
  };

  console.log(rightNum % 4);

  return (
    <ContainerS>
      <LeftScreenS onMouseEnter={leftPlusNum} leftNum={leftNum}>
        <img src={leftScreenData[leftNum % 4]} alt='leftscreen' />
        <video src={leftVideo} muted loop autoPlay />
      </LeftScreenS>
      <RightScreenS onMouseOver={rightPlusNum} rightNum={rightNum}>
        <img src={rightScreenData[rightNum % 4]} alt='rightscreen' />
        <video src={rightVideo} muted loop autoPlay />
      </RightScreenS>
    </ContainerS>
  );
};

export default Home;

const ContainerS = styled.main`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftScreenS = styled.section<{ leftNum: number }>`
  width: 100%;
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
    z-index: ${(props) => (props.leftNum % 4 === 3 ? null : 'none')};
  }
`;

const RightScreenS = styled.section<{ rightNum: number }>`
  width: 100%;
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
    z-index: ${(props) => (props.rightNum % 4 === 3 ? null : 'none')};
  }
`;
