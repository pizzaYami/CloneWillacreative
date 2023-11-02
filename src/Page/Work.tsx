/* eslint-disable jsx-a11y/anchor-is-valid */
import { styled } from 'styled-components';
import Header from '../Component/Header';
import NavBar from '../Component/NavBar';

const workData = [
  {
    id: 0,
    url: 'https://willacreative.com/wp-content/uploads/adanola1-1024x758.jpg',
    title: 'adanola',
    content: 'strategy, web, branding',
  },
  {
    id: 1,
    url: 'https://willacreative.com/wp-content/uploads/essio1-1024x758.jpg',
    title: 'essio',
    content: 'web, content, branding, vntrs',
  },
  {
    id: 2,
    url: 'https://willacreative.com/wp-content/uploads/bs-841x1024.jpg',
    title: 'beauty sandwich',
    content: 'web, branding, packaging',
  },
  {
    id: 3,
    url: 'https://willacreative.com/wp-content/uploads/hiskin-1-841x1024.jpg',
    title: 'hi skin',
    content: 'web, content, branding, strategy',
    video:
      'https://player.vimeo.com/progressive_redirect/playback/793720801/rendition/720p/file.mp4?loc=external&signature=abcef5dd0c9b2971d48639fbf26dd6cc232355df65a49ecef569cc504cdb36d5',
  },
  {
    id: 4,
    url: 'https://willacreative.com/wp-content/uploads/ivi-841x1024.jpg',
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
        <WorkItem workData={workData[5]} row={4} videoFirst={true} />
      </WorkContainerS>
    </WorkContainer>
  );
};

export default Work;

interface WorkItemType {
  workData: {
    url?: string;
    title: string;
    content: string;
    video?: string;
  };
  row: 2 | 4;

  videoFirst?: boolean;
}

const WorkItem = ({ workData, row, videoFirst }: WorkItemType) => {
  return (
    <WorkS row={row} videoFirst={videoFirst}>
      <img src={workData.url} alt={workData.title} />
      <video src={workData.video} muted loop autoPlay />
      <h3>{workData.title}</h3>
      <span>{workData.content}</span>
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

const WorkS = styled.div<{ row: 2 | 4; videoFirst: boolean | undefined }>`
  width: ${(props) => (props.row === 2 ? '50%' : '25%')};
  height: 100%;
  padding: 0 19px;
  position: relative;

  img,
  video {
    float: left;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img {
    display: ${(props) => (props.videoFirst ? 'none' : 'block')};
  }

  video {
    display: ${(props) => (props.videoFirst ? 'block' : 'none')};
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
      display: none;
    }
    video {
      display: block;
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
