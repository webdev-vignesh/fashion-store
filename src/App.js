import Layout from './Routes/Layout';
import Route from './Routes/Route';
import Navbar from './components/Navbar';
import HomeCarousel from './components/HomeCarousel';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <Footer />
    </div>

  );
}

export default App;
