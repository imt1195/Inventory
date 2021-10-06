import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import './App.css';
import Tools from "./components/Tools"
import Boards from './components/Boards';
import IO from './components/IO';
import Storage from './components/Storage';
import Misc from './components/Misc';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <div>
        <Router>
          <Navbar bg="dark" expand="lg" >
            <Navbar.Brand href="#home">Biz Wiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav>
                <Nav.Item className="ml-auto" ><Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link></Nav.Item>
                <Nav.Item className="ml-auto"><Nav.Link href="#link"><Link to= "/Storage">Storage</Link></Nav.Link></Nav.Item>
                <Nav.Item className="ml-auto"><Nav.Link href="#link"><Link to= "/Boards">Boards</Link></Nav.Link></Nav.Item>
                <Nav.Item className="ml-auto"><Nav.Link href="#link"><Link to= "/IO">IO</Link></Nav.Link></Nav.Item>
                <Nav.Item className="ml-auto"><Nav.Link href="#link"><Link to= "/Tools">Tools</Link></Nav.Link></Nav.Item>
                <Nav.Item className="ml-auto"><Nav.Link href="#link"><Link to= "/Misc">Misc</Link></Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/Storage">
              <Storage />
            </Route>
            <Route path="/Boards">
              <Boards />
            </Route>
            <Route path="/IO">
              <IO />
            </Route>
            <Route path="/Tools">
              <Tools />
            </Route>
            <Route path="/Misc">
              <Misc />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </Router>
      </div>
  );
}

export default App;
