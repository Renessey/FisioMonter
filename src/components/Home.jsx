import "./css/Home.css";
import Tela1 from "./TelasHome/Tela1.jsx";
import Tela2 from "./TelasHome/Tela2.jsx";
import Tela3 from "./TelasHome/Tela3.jsx";
import Footer from "../components/TelasHome/Footer.jsx"

export default function Home() {
  return (
    <div className="home-container" id="Home">
      <Tela1 />
      <Tela2 />
      <Tela3 />
      <Footer />
    </div>
  );
}
