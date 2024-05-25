import VntrsContent from "../Component/Vntrs/VntrsContent";
import Footer from "../Component/common/Footer";
import Header from "../Component/common/Header";
import NavBar from "../Component/common/NavBar";

const VntrsPage = () => {
  return (
    <>
      <Header />
      <NavBar bgBtn={false} navBarList={["about", "portfolio", "contact"]} />
      <VntrsContent />
      <Footer />
    </>
  );
};

export default VntrsPage;
