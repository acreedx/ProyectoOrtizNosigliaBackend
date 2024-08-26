import "../../assets/css/bootstrap.css";
import "../../assets/css/animate.css";
import "../../assets/css/LineIcons.css";
import "../../assets/css/main.css";
import "../../assets/css/tiny-slider.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Main from "@/app/components/Main";
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <a href="#" className="scroll-top">
        <i className="lni lni-arrow-up"></i>
      </a>
    </>
  );
}
