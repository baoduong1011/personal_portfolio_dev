import Container from './components/Container/Container';
import Header from './components/Header/Header';
import logo from './logo.svg';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Home from './pages/Home';
import Service from './pages/Service';
import ThemeToggle from './pages/ThemeToggle';
import './sass/main.scss';

function App() {
  return (
    <div className='body'>
      <Header />
      <div className='container'>
        <Home />
        <About />
        <Service/>
        <Education/>
        <Contact/>
      </div>
      <ThemeToggle/>
    </div>
  );
}

export default App;
