import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../Container/Container";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <Container>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
