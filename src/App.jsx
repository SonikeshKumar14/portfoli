import Footer from "./components/Footer/Footer";
import Experties from "./components/Header/Experties/Experties";
import Header from "./components/Header/Header";
import Hero from "./components/Header/hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import css from './styles/app.module.scss';
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Works/>
      <Portfolio/>
      <People/>
      <Footer/>
  </div>
};

export default App;
