import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import {Info, About, Culture} from './components/pages';
import Footer from'./components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

function App() {
  return (
    <Router>
         <div className="App">
         <Header/>
         <div>
         <Route patch="/info" component={Info}/>
           <Route patch="/about" component={About}/>
           <Route patch="/culture" component={Culture}/>
         </div>
           
            
           
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
