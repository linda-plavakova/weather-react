import "./styles.css";
import City from "./City";
import Header from "./Header";
import Photo from "./Photo";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <City />
      <Photo />
      <Search />
      <Current />
      <Forecast />
      <Footer />
    </div>
  );
}
