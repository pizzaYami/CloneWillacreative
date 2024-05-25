import { styled } from "styled-components";
import Footer from "../Component/common/Footer";
import Header from "../Component/common/Header";
import NavBar from "../Component/common/NavBar";

const Vntrs = () => {
  return (
    <Container>
      <Header />
      <NavBar bgBtn={false} navBarList={["about", "portfolio", "contact"]} />
      <ContentWrapper>
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/794669238/rendition/1080p/file.mp4?loc=external&signature=5274a5b50d2853953af90c3a4d60b32325f27b4007a4d670d35160068bc88d47"
          muted
          loop
          autoPlay
        />
        <div>
          investing in and incubating
          <br /> e-commerce products for good.
        </div>
      </ContentWrapper>

      <Footer />
    </Container>
  );
};

export default Vntrs;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  width: 100%;
  video {
    height: 650px;
    width: 100%;
    object-fit: cover;
  }
  div {
    text-transform: uppercase;
    font-size: 74px;
    line-height: 85px;
    margin: 38px 0 0px;
    padding: 0 32px;
    letter-spacing: -2.96px;
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
  @media screen and (min-width: 768px) and (max-width: 1198px) {
    div {
      font-size: 42px;
      line-height: 52px;
    }
  }

  @media screen and (min-width: 1199px) {
    div {
      font-size: 74px;
    }
  }
`;
