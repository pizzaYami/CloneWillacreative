import { useState } from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  const [num, setNum] = useState(0);
  const [pade, setPade] = useState(true);
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  setTimeout(() => {
    setNum((props) => (props + 1) % 2);
  }, 4000);

  setTimeout(() => {
    setPade((props) => !props);
  }, 1000);
  const proudThing = (): string => {
    if (num === 0) {
      return 'latina';
    }
    if (num === 1) {
      return 'founded';
    }
    if (num === 2) {
      return 'female';
    }
    return '';
  };
  return (
    <Container>
      <FooterWrap>
        <FooterMenu className='menu'>
          <li>instagram</li>
          <li>Linkedin</li>
          <li>tik tok</li>
        </FooterMenu>
        <FooterMail className='mail'>
          inquiries:
          <div>info@willacreative.com</div>
        </FooterMail>
        <FooterRight className='bottom'>
          <li>{`${hours}:${minutes} GMT+9`}</li>
          <li>© since 2012</li>
          <li>proudly </li>
          <li className={pade ? 'fade_in' : 'fade_out'}>{proudThing()}</li>
        </FooterRight>
      </FooterWrap>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  font-size: 16px;
  padding: 0 39px;
  display: flex;
  bottom: 0px;
  box-sizing: border-box;
`;

const FooterWrap = styled.div`
  width: 100%;
  padding: 33px 0 42px 0;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  .menu {
    order: 1;
  }
  .mail {
    order: 2;
  }
  .bottom {
    order: 3;
  }
  @media screen and (max-width: 1198px) {
    flex-direction: column;
    align-items: center;
    .mail {
      order: 0;
      margin: 0 0 8px;
      text-transform: uppercase;
    }
    .menu {
      order: 1;
      margin-bottom: 60px;
    }
  }
`;

const FooterMenu = styled.ul`
  display: flex;
  gap: 24px;
  cursor: pointer;
  li {
    &:hover {
      text-transform: uppercase;
    }
  }
`;

const FooterMail = styled.div`
  display: flex;

  div {
    cursor: pointer;
    &:hover {
      text-transform: uppercase;
    }
  }
`;
const FooterRight = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  :nth-child(4) {
    width: 100px;
    transition: 1000ms;
  }
  .fade_out {
    opacity: 0;
  }
  .fade_in {
    opacity: 1;
  }
`;
