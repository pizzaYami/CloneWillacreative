/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Header from '../Component/Header';
import NavBar from '../Component/NavBar';

const workData = [
  {
    id: 0,
    image: 'https://willacreative.com/wp-content/uploads/adanola1-1024x758.jpg',
    title: 'adanola',
    content: 'strategy, web, branding',
  },
  {
    id: 1,
    image: 'https://willacreative.com/wp-content/uploads/essio1-1024x758.jpg',
    title: 'essio',
    content: 'web, content, branding, vntrs',
  },
  {
    id: 2,
    image: 'https://willacreative.com/wp-content/uploads/bs-841x1024.jpg',
    title: 'beauty sandwich',
    content: 'web, branding, packaging',
  },
  {
    id: 3,
    image: 'https://willacreative.com/wp-content/uploads/hiskin-1-841x1024.jpg',
    title: 'hi skin',
    content: 'web, content, branding, strategy',
    video:
      'https://player.vimeo.com/progressive_redirect/playback/793720801/rendition/720p/file.mp4?loc=external&signature=abcef5dd0c9b2971d48639fbf26dd6cc232355df65a49ecef569cc504cdb36d5',
  },
  {
    id: 4,
    image: 'https://willacreative.com/wp-content/uploads/ivi-841x1024.jpg',
    title: 'ivi',
    content: 'web',
    video:
      'https://player.vimeo.com/progressive_redirect/playback/850345613/rendition/360p/file.mp4?loc=external&signature=4cb3adb2a1d538101ef09ae7ad43ecc6b82adc8bd36ffd655fdc39a97da7707e',
  },
  {
    id: 5,
    title: 'Olive Ateliers',
    content: 'web',
    video:
      'https://player.vimeo.com/progressive_redirect/playback/830348745/rendition/720p/file.mp4?loc=external&signature=da33dca1e705dfec770ef9439a01c30818431833c1c885c4314d4aeee5a5193c',
  },
];

const Work = () => {
  return (
    <WorkContainer>
      <Header />
      <NavBar />
      <WorkContainerS>
        <WorkItem workData={workData[0]} row={2} />
        <WorkItem workData={workData[1]} row={2} />
        <WorkItem workData={workData[2]} row={4} />
        <WorkItem workData={workData[3]} row={4} />
        <WorkItem workData={workData[4]} row={4} />
        <WorkItem workData={workData[5]} row={4} />
        <WorkDoSection>
          <span>what we do</span>
          <ul>
            <li>
              <a>gtm strategy</a>
            </li>
            <li>
              <a>web design</a>
            </li>
            <li>
              <a className='no-border-top'>branding & packaging</a>
            </li>
            <li>
              <a className='no-border-top'>web development</a>
            </li>
            <li>
              <a className='no-border-top'>content production</a>
            </li>
            <li>
              <a className='no-border-top'>web 3.0 & 3d design</a>
            </li>
          </ul>
        </WorkDoSection>
      </WorkContainerS>
    </WorkContainer>
  );
};

export default Work;

interface WorkItemType {
  workData: {
    image?: string;
    title: string;
    content: string;
    video?: string;
  };
  row: 2 | 4;

  videoFirst?: boolean;
}

const WorkItem = ({ workData, row, videoFirst }: WorkItemType) => {
  const [dataCase, setDataCase] = useState(0);
  const { image, title, content, video } = workData;
  useEffect(() => {
    if (image && !video) setDataCase(1);
    if (image && video) setDataCase(2);
    if (image && video && videoFirst) setDataCase(3);
    if (!image && video) setDataCase(4);
  }, []);

  let videoBox = document.querySelector('.mediaBox');
  const videoBoxHeight = videoBox
    ? row === 2
      ? videoBox.clientWidth / 1.35
      : videoBox.clientWidth / 1.7
    : 'auto';

  return (
    <WorkS row={row} datacase={dataCase}>
      <div
        className='mediaBox'
        style={{
          height: videoBoxHeight,
        }}
      >
        <img src={image} alt={title} />
        <video src={video} muted loop autoPlay className='video' />
      </div>
      <h3>{title}</h3>
      <span>{content}</span>
    </WorkS>
  );
};

const WorkContainer = styled.main`
  width: 100dvw;
  height: 100dvh;
`;

const WorkContainerS = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-bottom: 25px;
  float: left;
  width: 100%;
  position: relative;
`;

const WorkS = styled.div<{ row: 2 | 4; datacase: number }>`
  width: ${(props) => (props.row === 2 ? '50%' : '25%')};
  height: 100%;
  padding: 0 19px;
  position: relative;

  div{
    width: 100%;
    height: 100%;
  }
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img {
    display: ${(props) =>
      props.datacase === 1 || props.datacase === 2
        ? 'block'
        : props.datacase === 3 || props.datacase === 4
        ? 'none'
        : 'block'};
  }

  video {
    display: ${(props) =>
      props.datacase === 1 || props.datacase === 2
        ? 'none'
        : props.datacase === 3 || props.datacase === 4
        ? 'block'
        : 'none'};
    padding-top: {calc(841 / 1024) * 100}
  }

  &:hover {
    cursor: pointer;
    h3 {
      text-transform: lowercase;
    }
    span {
      opacity: 1;
      transition: opacity 0.1s ease-in;
    }
    img {
      display: ${(props) =>
        props.datacase === 2 || props.datacase === 4
          ? 'none'
          : props.datacase === 3 || props.datacase === 1
          ? 'block'
          : 'none'};
    }
    video {
      display: ${(props) =>
        props.datacase === 2 || props.datacase === 4
          ? 'block'
          : props.datacase === 3 || props.datacase === 1
          ? 'none'
          : 'block'};
    }
  }

  h3 {
    float: left;
    width: 100%;
    margin: 5px 0 4px;
    padding: 0;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -0.64px;
    text-transform: uppercase;
  }
  span {
    opacity: 0;
  }
`;

const WorkDoSection = styled.div`
  width: 100%;
  span {
    padding: 0 19px 14px;
    font-size: 14px;
    display: block;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  li {
    width: 50%;
    padding: 0 19px;
    font-size: 32px;
    font-weight: normal;
    line-height: normal;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: -0.64px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
    @media screen and (min-width: 768px) and (max-width: 1198px) {
      font-size: 28px;
    }
    @media screen and (min-width: 1199px) {
      font-size: 32px;
    }
  }
  a {
    position: relative;
    padding: 14px 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    width: 100%;
  }
  .no-border-top {
    border-top: 0px solid black;
  }
`;
