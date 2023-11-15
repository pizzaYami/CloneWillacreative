/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Header from '../../Component/Header';
import NavBar from '../../Component/NavBar';
import { workData } from '../../Data/workData';
import WorkItem from './WorkItem';
const Work = () => {
  return (
    <WorkContainer>
      <Header />
      <NavBar />
      <WorkContainerS>
        <WorkItem workData={workData[0]} row={2} />
        <WorkItem workData={workData[1]} row={2} />
        <WorkItem workData={workData[2]} row={4} />
        <WorkItem workData={workData[3]} row={4} />
        <WorkItem workData={workData[4]} row={4} />
        <WorkItem workData={workData[5]} row={4} />
        <WorkDoSection>
          <span>what we do</span>
          <ul>
            <li>
              <a>gtm strategy</a>
            </li>
            <li>
              <a>web design</a>
            </li>
            <li>
              <a className='no-border-top'>branding & packaging</a>
            </li>
            <li>
              <a className='no-border-top'>web development</a>
            </li>
            <li>
              <a className='no-border-top'>content production</a>
            </li>
            <li>
              <a className='no-border-top'>web 3.0 & 3d design</a>
            </li>
          </ul>
        </WorkDoSection>
        <WorkItem workData={workData[6]} row={2} />
        <WorkItem workData={workData[7]} row={2} />
        <WorkItem workData={workData[8]} row={4} />
        <WorkItem workData={workData[9]} row={4} />
        <WorkItem workData={workData[10]} row={4} />
        <WorkItem workData={workData[11]} row={4} />
        <WorkSlide></WorkSlide>
      </WorkContainerS>
    </WorkContainer>
  );
};

export default Work;

const WorkContainer = styled.main`
  width: 100dvw;
  height: 100dvh;
`;

const WorkContainerS = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-bottom: 25px;
  float: left;
  width: 100%;
  position: relative;
`;

const WorkDoSection = styled.div`
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
  }
  &::after {
    width: 100%;
    transition: width 0.9s ease-in;
  }
  .no-border-top {
    border-top: 0px solid black;
  }
`;

const WorkSlide = styled.div``;
