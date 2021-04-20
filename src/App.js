import './App.css';
import Achievement from './Components/Achievement/Achievement';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header/Header';
import Service from './Components/Service/Service';
import Pricing from './Components/Pricing/Pricing';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <Contact />
      <Achievement />
      <Pricing />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
