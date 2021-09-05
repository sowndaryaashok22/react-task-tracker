import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from "./components/Contact";


function App() {

  
  
  return (
    <Router>
      <div className="container">
        <Switch >
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route path = '/about'>
            <About />
          </Route>
          <Route path = '/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
