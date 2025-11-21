import './App.css'; // Assuming we'll update App.css later or remove unused styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RoboCorp Innovations</h1>
        <p>
          Pioneering the future of robotics.
        </p>
        <nav>
          <a
            className="App-link"
            href="#about"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            className="App-link"
            href="#products"
            rel="noopener noreferrer"
          >
            Our Robots
          </a>
          <a
            className="App-link"
            href="#contact"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About RoboCorp</h2>
          <p>We are a leading company in robotics, dedicated to developing cutting-edge solutions for various industries. Our mission is to integrate advanced AI and mechanical engineering to create intelligent autonomous systems that enhance human capabilities and improve quality of life.</p>
        </section>
        <section id="products">
          <h2>Our Robots</h2>
          <div className="robot-showcase">
            <div className="robot-item">
              <h3>Industrial Automation Bot</h3>
              <p>Designed for precision manufacturing and assembly lines.</p>
            </div>
            <div className="robot-item">
              <h3>Service & Logistics Drone</h3>
              <p>Efficiently handles delivery and inventory management.</p>
            </div>
            <div className="robot-item">
              <h3>Exploration Rover</h3>
              <p>Built for extreme environments and data collection.</p>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Get in Touch</h2>
          <p>Have a project in mind or want to learn more? Reach out to us!</p>
          <p>Email: info@robocorp.com</p>
          <p>Phone: +1 (555) 123-ROBO</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 RoboCorp Innovations. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
