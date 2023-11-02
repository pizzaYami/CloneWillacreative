import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const [isLazy, setIsLazy] = useState(false);
  setInterval(() => {
    setIsLazy(true);
  }, 100);
  return (
    <HeaderWrapperS className={isLazy ? 'active' : ''}>
      <HeaderS>
        <li
          className='work header'
          onClick={() => {
            navigate('/work');
          }}
        >
          work
        </li>
        <li className='vntrs header'>VNTRS</li>
        <li
          className='url header '
          id='header-center'
          onClick={() => {
            navigate('/');
          }}
        >
          WILLACREATIVE.COM
        </li>
        <li className='content header'>CONTENT</li>
        <li className='info header'>INFO</li>
      </HeaderS>
    </HeaderWrapperS>
  );
};

export default Header;

const HeaderWrapperS = styled.header`
  width: 100%;
  top: 0px;
  left: 0px;
  letter-spacing: -0.64px;
  background-color: white;
  z-index: 100;
  transition: top 0.2s ease-in-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: currentColor;
    height: 1px;
    width: 1px;
    opacity: 0.5;
  }

  @media screen and (max-width: 767px) {
    padding: 2px 10px 25px;
    height: auto;
    .header {
      font-size: 16px;
    }
    #header-center {
      width: 100%;
      order: 0;
      font-size: 10.5vw;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1198px) {
    padding: 22.5px 38px;
    .header {
      font-size: 22px;
    }
    &.active {
      &::after {
        width: 100%;
        transition: width 0.9s ease-in;
      }
    }
  }

  @media screen and (min-width: 1199px) {
    padding: 22.5px 38px;
    .header {
      font-size: 28px;
    }
    &.active {
      &::after {
        width: 100%;
        transition: width 0.9s ease-in;
      }
    }
  }
`;

const HeaderS = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  li {
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      text-transform: lowercase;
    }
  }
  .work {
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    min-width: 62px;
    &:hover {
      text-transform: uppercase;
    }
  }
  .vntrs {
    order: 2;
    min-width: 67px;
  }
  .url {
    order: 3;
    min-width: 211px;
  }
  .content {
    order: 4;
    min-width: 98px;
  }
  .info {
    order: 5;
    min-width: 48px;
  }
`;
