import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import InfoSlide from './InfoSlide';

const Info = () => {
  const [isLazy, setIsLazy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLazy(true);
    }, 100);
  }, []);

  return (
    <Container>
      <Header />
      <InfoHeaderS>
        <h3 className={isLazy ? 'active' : ''}>
          WILLA is a creative company driven by purpose and built on collaboration. We partner with
          intentional brands to build scalable solutions through strategy, art direction, technology
          and design.
        </h3>
      </InfoHeaderS>
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
          <a href='mailto:info@willacreative.com'>CONTACT US</a>
        </div>
      </InfoClient>
      <InfoSlide></InfoSlide>
      <Footer />
    </Container>
  );
};

export default Info;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
`;

const InfoHeaderS = styled.div`
  padding: 63px 39px 0;
  float: left;
  width: 100%;
  h3 {
    font-size: 74px;
    letter-spacing: -2.96px;
    color: #fff;
    float: left;
    width: 100%;
    padding: 0 0 86px;
    margin: 0;
    position: relative;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      background: #fff;
      content: '';
      width: 0px;
      transition: width 0.9s ease-in;
    }
    &.active {
      &::after {
        width: 100%;
      }
    }
  }
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
