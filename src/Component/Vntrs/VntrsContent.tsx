import React from "react";
import styled from "styled-components";

function VntrsContent() {
  return (
    <Container>
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/794669238/rendition/1080p/file.mp4?loc=external&signature=5274a5b50d2853953af90c3a4d60b32325f27b4007a4d670d35160068bc88d47"
        muted
        loop
        autoPlay
      />
      <div>
        investing in and incubating <br /> e-commerce products for good.
      </div>
    </Container>
  );
}

export default VntrsContent;

const Container = styled.div`
  video {
    width: 100%;
    object-fit: cover;
  }
  div {
    text-transform: uppercase;
    font-size: 74px;
    line-height: 85px;
    margin: 38px 0 0px;
    padding: 0 32px;
    letter-spacing: -3px;
  }
  @media screen and (max-width: 767px) {
    video {
      height: 240px;
    }
    div {
      font-size: 32px;
      line-height: 41px;
      letter-spacing: -1.28px;
      margin-top: 50px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    div {
      font-size: 42px;
      line-height: 52px;
    }
  }

  @media screen and (min-width: 10224px) {
    div {
      font-size: 74px;
    }
  }
`;
