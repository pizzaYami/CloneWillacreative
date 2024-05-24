import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { WorkSlideData } from "../../constants/workConstant";

const WorkSlide = () => {
  const [isLazy, setIsLazy] = useState(false);
  const [interval, setInterval] = useState(-200);
  const [slideNum, setSlideNum] = useState(0);

  useEffect(() => {
    const lazyTimeout = setTimeout(() => setIsLazy(true), 500);
    return () => clearTimeout(lazyTimeout);
  }, []);

  setTimeout(() => {
    setInterval((prev) => {
      return prev - 80;
    });
    setSlideNum((prev) => {
      return prev + 1;
    });
    WorkSlideData.push(WorkSlideData[slideNum % 6]);
  }, 2000);
  return (
    <Container className={isLazy ? "active" : ""}>
      <ItemContainer>
        <ItemS interval={interval}>
          {WorkSlideData.map((data, index) => (
            <img key={index} src={data.img} alt={String(data.img)} />
          ))}
        </ItemS>
      </ItemContainer>
    </Container>
  );
};

export default WorkSlide;

const Container = styled.div`
  margin: 50px 0 85px 0;
  width: 100%;
  padding: 0 10px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: currentColor;
    height: 1px;
    width: 0px;
    opacity: 0.5;
  }
  &::after {
    content: "";
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
    &::before {
      width: 100%;
      transition: width 0.9s ease-in;
    }
  }
`;

const ItemContainer = styled.div`
  margin: 23px -39px;
  position: relative;
  &::before {
    content: "";
    width: 50px;
    height: 50px;
    margin: 10px 25px 6px 0;
    background-image: linear-gradient(to right, #fff 0%, #fff 50%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    left: 0;
    top: -24px;
    z-index: 99;
  }
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    margin: 10px 0 6px 25px;
    background-image: linear-gradient(to left, #fff 0%, #fff 50%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    right: 0;
    top: -24px;
    z-index: 99;
  }
`;

const ItemS = styled.div<{ interval: number }>`
  transform: ${(props) => `translate3d(${props.interval}px, 0px, 0px)`};
  transition: transform 2000ms linear 0s;
  display: flex;
  img {
    float: left;
    width: 100%;
    height: 24px;
    align-items: center;
    justify-content: center;
    padding: 0 35px;
  }
`;
