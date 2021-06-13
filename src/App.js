import "./styles.css";
import City from "./City";
import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {

  return (
    <div className="App">
      <Header />
      <City />
      <Forecast />
      <Footer />
    </div>
  );
}
