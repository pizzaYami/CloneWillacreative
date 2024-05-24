import Header from "../Component/common/Header";
import NavBar from "../Component/common/NavBar";
import WorkContents from "../Component/Work/WorkContents";
import Footer from "../Component/common/Footer";

function WorkPage() {
  return (
    <>
      <Header />
      <NavBar bgBtn={true} list={["all", "web", "content", "branding"]} />
      <WorkContents />
      <Footer />
    </>
  );
}

export default WorkPage;
