import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Home from "./home/Home.js";
import Events from "./events/Events.js";
import Contact from "./contact/Contact.js";
import Logo from "./assets/capture-it-logo.png"

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
            <img
              alt="CaptureIT logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CaptureIT
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/events">Events</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
