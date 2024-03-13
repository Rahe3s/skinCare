import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Product from './Pages/Products/Product';
import Testimonial from './Pages/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Home/>
    <About/>
    <Product/>
    <Contact/>
    <Testimonial/>
      
    </div>
  );
}

export default App;
