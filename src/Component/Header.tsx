import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const [isLazy, setIsLazy] = useState(false);
  const [currentPage, setCurrentPage] = useState('work');

  const seachCurrentPage = () => {
    if (window.location.pathname === '/work') {
      setCurrentPage('work');
    }
    if (window.location.pathname === '/vntrs') {
      setCurrentPage('vntrs');
    }
    if (window.location.pathname === '/content') {
      setCurrentPage('content');
    }
    if (window.location.pathname === '/info') {
      setCurrentPage('info');
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLazy(true);
    }, 100);
    seachCurrentPage();
  }, []);

  return (
    <HeaderWrapperS className={isLazy ? 'active' : ''}>
      <HeaderS>
        <li
          className={currentPage === 'work' ? 'work currentPage' : 'work'}
          onClick={() => {
            navigate('/work');
          }}
        >
          work
        </li>
        <li
          className={currentPage === 'vntrs' ? 'vntrs currentPage' : 'vntrs'}
          onClick={() => {
            navigate('/vntrs');
          }}
        >
          vntrs
        </li>
        <li
          className='url '
          id='header-center'
          onClick={() => {
            navigate('/');
          }}
        >
          willacreative.com
        </li>
        <li className={currentPage === 'content' ? 'content currentPage' : 'content'}>content</li>
        <li className={currentPage === 'info' ? 'info currentPage' : 'info'}>info</li>
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
    width: 0px;
    opacity: 0.5;
  }

  @media screen and (max-width: 767px) {
    padding: 2px 10px 25px;
    height: auto;

    font-size: 16px;

    #header-center {
      width: 100%;
      order: 0;
      font-size: 10.5vw;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1198px) {
    padding: 22.5px 38px;

    font-size: 22px;

    &.active {
      &::after {
        width: 100%;
        transition: width 0.9s ease-in;
      }
    }
  }

  @media screen and (min-width: 1199px) {
    padding: 22.5px 38px;

    font-size: 28px;

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
  text-transform: uppercase;
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

    min-width: 62px;
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
  .currentPage {
    text-decoration: underline;
    text-transform: lowercase;
    &:hover {
      text-transform: uppercase;
    }
  }
`;
