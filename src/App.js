import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Info } from "./components/Info/Info";
import { Delivery } from "./components/Delivery/Delivery";
import { Custom } from "./components/Custom/Custom";
import { AffordableDelivery } from "./components/AffordableDelivery/AffordableDelivery";
import { Map } from "./components/Map/Map";
import { Question } from "./components/Question/Question";
import { GetStarted } from "./components/GetStarted/GetStarted";
import { Footer } from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Main />
        <Info />
        <Delivery />
        <Custom />
        <AffordableDelivery />
        <Map/>
        <Question/>
        <GetStarted/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
