import { styled } from 'styled-components';
import awwords from '../../img/awwords.svg';
import byrdie from '../../img/byrdie.svg';
import cut from '../../img/cut.svg';
import digiday from '../../img/digiday.svg';
import forbes from '../../img/forbes.svg';
import mindsParkls from '../../img/mindsParkls.svg';

const WorkSlideData = [
  {
    index: 0,
    img: awwords,
  },
  {
    index: 1,
    img: byrdie,
  },
  {
    index: 2,
    img: cut,
  },
  {
    index: 3,
    img: digiday,
  },
  {
    index: 4,
    img: forbes,
  },
  {
    index: 5,
    img: mindsParkls,
  },
];
const WorkSlide = () => {
  return (
    <Container>
      <img src={WorkSlideData[0].img} alt='awwords' />
      <img src={byrdie} alt='byrdie' />
      <img src={cut} alt='cut' />
      <img src={digiday} alt='digiday' />
      <img src={forbes} alt='forbes' />
      <img src={mindsParkls} alt='mindsParkls' />
    </Container>
  );
};

export default WorkSlide;

const Container = styled.div`
  width: 100%;
`;
