import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Footer = () => {
  const [timer, setTimer] = useState(0);

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev + 1) % 6);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const changeProud = () => {
    if (timer < 2) {
      return "latina";
    }
    if (timer < 4) {
      return "founded";
    }
    if (timer < 6) {
      return "female";
    }
  };

  return (
    <Container>
      <FooterWrap>
        <FooterMenu className="menu">
          <li>instagram</li>
          <li>Linkedin</li>
          <li>tik tok</li>
        </FooterMenu>
        <FooterMail className="mail">
          inquiries:
          <div>info@willacreative.com</div>
        </FooterMail>
        <FooterRight className="bottom">
          <li>{`${hours}:${minutes} GMT+9`}</li>
          <li>© since 2012</li>
          <li>
            proudly
            <span className={timer % 2 ? "fade_out" : "fade_in"}>{changeProud()}</span>
          </li>
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
  @media screen and (max-width: 1023px) {
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
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  cursor: pointer;
  li {
    &:hover {
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
`;

const FooterMail = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  width: 100%;
  gap: 20px;
  li {
    display: flex;
    white-space: nowrap;
  }
  span {
    display: flex;
    justify-content: flex-end;
    min-width: 60px;
    margin-left: 5px;
    &.fade_out {
      opacity: 0;
      transition: opacity 0.5s;
    }
    &.fade_in {
      opacity: 1;
      transition: opacity 0.5s;
    }
  }
`;
