import { styled } from 'styled-components';
import Header from '../Component/Header';

const Work = () => {
  return (
    <WorkContainer>
      <Header />
      <NavBarS>
        <ul>
          <li>all</li>
          <li>web</li>
          <li>content</li>
          <li>branding</li>
        </ul>
        <ChangeColorCircleS>
          <span>we don't do color but you can</span>
          <img
            src='https://willacreative.com/wp-content/themes/twentytwelve/images/circle-animation.png'
            alt='colorCircle'
          />
        </ChangeColorCircleS>
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
  padding: 32px 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  ul {
    display: flex;
    gap: 24px;
  }

  li:hover {
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const ChangeColorCircleS = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
  }
  img {
    width: 31px;
    height: 31px;
    animation: spin 5s linear infinite;
  }

  img:hover {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
