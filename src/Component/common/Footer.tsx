import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  const [timer, setTimer] = useState(0);

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  useEffect(() => {
    setInterval(() => {
      setTimer((props) => (props + 1) % 3);
    }, 2000);
  }, [timer]);

  const changeProud = (): string => {
    if (timer === 0) {
      return 'latina';
    }
    if (timer === 1) {
      return 'founded';
    }
    if (timer === 2) {
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
          {/* <li>{changeProud()}</li> */}
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
