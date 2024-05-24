import { useEffect, useState } from "react";
import { styled } from "styled-components";

interface WorkItemType {
  workData: {
    title: string;
    content: string;
    image?: string;
    video?: string;
  };
  row: 2 | 4;
  videoFirst?: boolean;
}

const WorkItem = ({ workData, row, videoFirst }: WorkItemType) => {
  const [mediaDisplayCase, setMediaDisplayCase] = useState<
    "OnlyImage" | "OnlyVideo" | "FirstImage" | "FirstVideo" | undefined
  >();
  const { image, title, content, video } = workData;

  useEffect(() => {
    if (image && !video) setMediaDisplayCase("OnlyImage");
    if (image && video) setMediaDisplayCase("FirstImage");
    if (image && video && videoFirst) setMediaDisplayCase("FirstVideo");
    if (!image && video) setMediaDisplayCase("OnlyVideo");
  }, [image, video, videoFirst]);

  return (
    <WorkS row={row} mediaDisplayCase={mediaDisplayCase}>
      <div className="mediaBox">
        <img src={image} alt={title} />
        <video src={video} muted loop autoPlay className="video" />
      </div>
      <h3>{title}</h3>
      <span>{content}</span>
    </WorkS>
  );
};

export default WorkItem;

const WorkS = styled.div<{
  row: 2 | 4;
  mediaDisplayCase: "OnlyImage" | "OnlyVideo" | "FirstImage" | "FirstVideo" | undefined;
}>`
  width: ${(props) => (props.row === 2 ? "50%" : "25%")};
  @media screen and (max-width: 767px) {
    width: ${(props) => (props.row === 2 ? "100%" : "50%")};
  }
  height: 100%;
  padding: 0 20px 20px;
  position: relative;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img {
    display: ${(props) =>
      props.mediaDisplayCase === "OnlyImage" || props.mediaDisplayCase === "FirstImage"
        ? "block"
        : props.mediaDisplayCase === "FirstVideo" || props.mediaDisplayCase === "OnlyVideo"
        ? "none"
        : "block"};
  }

  video {
    display: ${(props) =>
      props.mediaDisplayCase === "OnlyImage" || props.mediaDisplayCase === "FirstImage"
        ? "none"
        : props.mediaDisplayCase === "FirstVideo" || props.mediaDisplayCase === "OnlyVideo"
        ? "block"
        : "none"};
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
        props.mediaDisplayCase === "FirstImage" || props.mediaDisplayCase === "OnlyVideo"
          ? "none"
          : props.mediaDisplayCase === "FirstVideo" || props.mediaDisplayCase === "OnlyImage"
          ? "block"
          : "none"};
    }
    video {
      display: ${(props) =>
        props.mediaDisplayCase === "FirstImage" || props.mediaDisplayCase === "OnlyVideo"
          ? "block"
          : props.mediaDisplayCase === "FirstVideo" || props.mediaDisplayCase === "OnlyImage"
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
