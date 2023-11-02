import { styled } from 'styled-components';

const NavBar = () => {
  return (
    <NavBarS>
      <ul>
        <li>all</li>
        <li>web</li>
        <li>content</li>
        <li>branding</li>
      </ul>
      <BGcolorBtn>
        <span className=''>we don't do color but you can</span>
        <img
          src='https://willacreative.com/wp-content/themes/twentytwelve/images/circle-animation.png'
          alt='colorCircle'
        />
      </BGcolorBtn>
    </NavBarS>
  );
};

export default NavBar;

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

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const BGcolorBtn = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
    display: none;
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

  @media screen and (min-width: 768px) and (max-width: 1198px) {
    img {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (min-width: 1199px) {
    &:hover {
      span {
        display: block;
      }
    }
  }
`;
