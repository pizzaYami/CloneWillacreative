/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const WorkDoSection = () => {
  const [isLazy, setIsLazy] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIsLazy(1000);
    }, 1000);
    setTimeout(() => {
      setIsLazy(1500);
    }, 1500);
    setTimeout(() => {
      setIsLazy(2000);
    }, 2000);
  }, []);

  return (
    <WorkDoSectionS>
      <span>what we do</span>
      <ul>
        <li>
          <a className={isLazy >= 1000 ? 'active-top active' : ''}>gtm strategy</a>
        </li>
        <li>
          <a className={isLazy >= 1000 ? 'active-top active' : ''}>web design</a>
        </li>
        <li>
          <a className={isLazy >= 1500 ? 'active' : ''}>branding & packaging</a>
        </li>
        <li>
          <a className={isLazy >= 1500 ? 'active' : ''}>web development</a>
        </li>
        <li>
          <a className={isLazy >= 2000 ? 'active' : ''}>content production</a>
        </li>
        <li>
          <a className={isLazy >= 2000 ? 'active' : ''}>web 3.0 & 3d design</a>
        </li>
      </ul>
    </WorkDoSectionS>
  );
};

export default WorkDoSection;

const WorkDoSectionS = styled.div`
  margin: 15px 0 87px 0;
  width: 100%;
  span {
    padding: 0 19px 14px;
    font-size: 14px;
    display: block;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  li {
    width: 50%;
    padding: 0 19px;
    font-size: 32px;
    font-weight: normal;
    line-height: normal;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: -0.64px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
    @media screen and (min-width: 768px) and (max-width: 1198px) {
      font-size: 28px;
    }
    @media screen and (min-width: 1199px) {
      font-size: 32px;
    }
  }
  a {
    position: relative;
    padding: 14px 0;
    display: flex;
    width: 100%;
    transform: translate(0, 30px);
    opacity: 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: currentColor;
      height: 1px;
      width: 0px;
      opacity: 0.5;
    }
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
    &.active {
      transform: translate(0);
      opacity: 1;
      transition: all 0.9s ease-in;
      &::after {
        width: 100%;
        transition: width 0.9s ease-in;
      }
    }
    &.active-top {
      &::before {
        width: 100%;
        transition: width 0.9s ease-in;
      }
    }
  }

  .no-border-top {
    border-top: 0px solid black;
  }
`;
