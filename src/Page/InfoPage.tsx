import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Footer from "../Component/common/Footer";
import Header from "../Component/common/Header";
import Capabilite from "../Component/Info/Capabilites";
import InfoSlide from "../Component/Info/InfoSlide";
import InfoBanner from "../Component/Info/InfoBanner";

const InfoPage = () => {
  const [isLazy, setIsLazy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLazy(true);
    }, 100);
  }, []);

  return (
    <Container>
      <Header />
      <InfoBanner isLazy={isLazy} />
      <InfoClient>
        <h4>Clients</h4>
        <div>
          <p>
            Paired with our dedication to intelligent and insightful design, we believe a shared
            mission is an essential element in meaningful partnership. We’ve made it our goal to
            work with brands we believe in, who we align with creatively and that we would support
            whether they were a client or not. Above all, you’ll find us profoundly passionate about
            functional design. It’s this passion that inspired us to form WILLA in 2012 and
            continues to inspire us today.
          </p>
          <p>
            We deliberately foster a diverse blend of clients, from start ups to global brands. In
            addition to diversity in size, our clients are based all over the world and in a variety
            of sectors, including fashion, luxury goods, art, publishing, beauty, media, retail and
            technology.
          </p>
          <a href="mailto:info@willacreative.com">CONTACT US</a>
        </div>
      </InfoClient>
      <InfoSlide />
      <Capabilite />
      <Careers />
      <Footer />
    </Container>
  );
};

export default InfoPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const InfoClient = styled.div`
  color: white;
  padding: 33px 39px 55px;
  float: left;
  width: 100%;
  display: flex;

  div,
  h4 {
    width: 50%;
  }
  p {
    margin: 0 0 25px;
  }
  a {
    color: white;
  }
`;

const Careers = styled.div``;
