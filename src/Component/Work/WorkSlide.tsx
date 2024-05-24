import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { WorkSlideData } from "../../constants/workConstant";

const WorkSlide = () => {
  const [isActive, setIsActive] = useState(false);
  const [translateX, setTranslateX] = useState(-200);
  const [slideNum, setSlideNum] = useState(0);

  useEffect(() => {
    const lazyTimeout = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(lazyTimeout);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setTranslateX((prev) => prev - 80);
      setSlideNum((prev) => prev + 1);
      WorkSlideData.push(WorkSlideData[slideNum % 6]);
    }, 2000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slideNum]);

  return (
    <Container className={isActive ? "active" : ""}>
      <ItemContainer>
        <ItemS translateX={translateX}>
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
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 50px 0 85px 0;
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
  margin: 25px -40px;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    width: 50px;
    height: 50px;
    margin: 10px 25px 6px 0;
    background-image: linear-gradient(to right, white 0%, white 50%, rgba(255, 255, 255, 0) 100%);
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
    background-image: linear-gradient(to left, white 0%, white 50%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    right: 0;
    top: -24px;
    z-index: 99;
  }
`;

const ItemS = styled.div<{ translateX: Number }>`
  transform: ${(props) => `translate(${props.translateX}px, 0px)`};
  transition: transform 2s linear 0s;
  display: flex;
  img {
    float: left;
    width: 100%;
    height: 24px;
    padding: 0 35px;
    align-items: center;
    justify-content: center;
  }
`;
