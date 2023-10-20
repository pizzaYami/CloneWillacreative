import { styled } from 'styled-components';
import Header from '../Component/Header';

const Work = () => {
  return (
    <WorkContainer>
      <Header></Header>
      <NavBarS>
        <ul>
          <li>all</li>
          <li>web</li>
          <li>content</li>
          <li>branding</li>
        </ul>
        <img
          src='https://willacreative.com/wp-content/themes/twentytwelve/images/circle-animation.png'
          alt='colorCircle'
        />
      </NavBarS>
    </WorkContainer>
  );
};

export default Work;

const WorkContainer = styled.main`
  width: 100dvw;
  height: 100dvh;
`;

const NavBarS = styled.nav`
  padding: 32px 25px;
  margin-top: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    gap: 24px;
  }

  li:hover {
    text-transform: uppercase;
    cursor: pointer;
  }
  img {
    width: 22px;
    height: 22px;
    animation-name: move;
    transition-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes move {
    /* @keyframes 뒤에 애니메이션을 대표하는 임의의 이름 move를 부여 */
    from {
      /* 애니메이션 시작 시점 */
      rotate: 0;
    }
    to {
      /* 애니메이션 종료 시점 */
      rotate: 180;
    }
  }
`;
