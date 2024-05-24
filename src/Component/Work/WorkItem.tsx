import { useEffect, useState } from "react";
import { styled } from "styled-components";

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

  // 이미지만 있으면 1
  // 이미지와 비디오 있으며 이미지 먼저 보여주면 2
  // 이미지와 비디오 있으며 비디오 먼저 보여주면 3
  // 비디오만 있으면 4

  useEffect(() => {
    if (image && !video) setDataCase(1);
    if (image && video) setDataCase(2);
    if (image && video && videoFirst) setDataCase(3);
    if (!image && video) setDataCase(4);
  }, []);

  let videoBox = document.querySelector(".mediaBox");
  const videoBoxHeight = videoBox
    ? row === 2
      ? videoBox.clientWidth / 1.35
      : videoBox.clientWidth / 1.7
    : "auto";

  return (
    <WorkS row={row} datacase={dataCase}>
      <div
        className="mediaBox"
        style={{
          height: videoBoxHeight,
        }}
      >
        <img src={image} alt={title} />
        <video src={video} muted loop autoPlay className="video" />
      </div>
      <h3>{title}</h3>
      <span>{content}</span>
    </WorkS>
  );
};

export default WorkItem;

const WorkS = styled.div<{ row: 2 | 4; datacase: number }>`
  width: ${(props) => (props.row === 2 ? "50%" : "25%")};
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
        ? "block"
        : props.datacase === 3 || props.datacase === 4
        ? "none"
        : "block"};
  }

  video {
    display: ${(props) =>
      props.datacase === 1 || props.datacase === 2
        ? "none"
        : props.datacase === 3 || props.datacase === 4
        ? "block"
        : "none"};
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
          ? "none"
          : props.datacase === 3 || props.datacase === 1
          ? "block"
          : "none"};
    }
    video {
      display: ${(props) =>
        props.datacase === 2 || props.datacase === 4
          ? "block"
          : props.datacase === 3 || props.datacase === 1
          ? "none"
          : "block"};
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
