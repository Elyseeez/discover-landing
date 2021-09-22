import Header from './components/header';
import Info from './components/pages/info-page';
import About from './components/pages/about-page';
import Culture from './components/pages/culture-page';
import Footer from'./components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <About/>
      <Culture/>
      <Footer/>
    </div>
  );
}

export default App;
