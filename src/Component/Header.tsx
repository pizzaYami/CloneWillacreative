import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapperS>
      <HeaderS>
        <li
          className='work'
          onClick={() => {
            navigate('/work');
          }}
        >
          work
        </li>
        <li className='vntrs'>VNTRS</li>
        <li
          className='url'
          onClick={() => {
            navigate('/');
          }}
        >
          WILLACREATIVE.COM
        </li>
        <li className='content'>CONTENT</li>
        <li className='info'>INFO</li>
      </HeaderS>
    </HeaderWrapperS>
  );
};

export default Header;

const HeaderWrapperS = styled.header`
  width: 100%;
  height: 74px;
  top: 0px;
  position: fixed;
  padding: 22.5px 28px;
  border-bottom: 1px solid black;
`;

const HeaderS = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  letter-spacing: -0.64px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      text-transform: lowercase;
    }
  }
  .work {
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
    min-width: 67px;
  }
  .url {
    min-width: 211px;
  }
  .content {
    min-width: 98px;
  }
  .info {
    min-width: 48px;
  }
`;
