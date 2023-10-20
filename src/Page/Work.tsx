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
      </NavBarS>
    </WorkContainer>
  );
};

export default Work;

const WorkContainer = styled.main`
  background-color: black;
`;

const NavBarS = styled.nav`
  margin-top: 73px;
  padding: 32px 25px;
  ul {
    display: flex;
    gap: 24px;
  }

  li:hover {
    text-transform: uppercase;
    cursor: pointer;
  }
`;
