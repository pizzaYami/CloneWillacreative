import { styled } from 'styled-components';
import Header from '../../Component/Header';
import NavBar from '../../Component/NavBar';
import { workData } from '../../Data/workData';
import WorkDoSection from './WorkDoSection';
import WorkItem from './WorkItem';
import WorkSlide from './WorkSlide';

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
        <WorkDoSection />
        <WorkItem workData={workData[6]} row={2} />
        <WorkItem workData={workData[7]} row={2} />
        <WorkItem workData={workData[8]} row={4} />
        <WorkItem workData={workData[9]} row={4} />
        <WorkItem workData={workData[10]} row={4} />
        <WorkItem workData={workData[11]} row={4} />
        <WorkSlide />
        <WorkItem workData={workData[12]} row={4} />
        <WorkItem workData={workData[13]} row={4} />
        <WorkItem workData={workData[14]} row={4} />
        <WorkItem workData={workData[15]} row={4} />
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
