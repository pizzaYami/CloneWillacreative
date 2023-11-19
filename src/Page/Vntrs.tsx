import { styled } from 'styled-components';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import NavBar from '../Component/NavBar';

const Vntrs = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <Footer />
    </Container>
  );
};

export default Vntrs;

const Container = styled.div``;
