import Header from './components/header';
import {Info, About, Culture} from './components/pages';
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
