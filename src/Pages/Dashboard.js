import React, { useState } from "react";
import "./Dashboard.css";
import { BrowserRouter as Navigate } from "react-router-dom";
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBBtn,
} from "mdb-react-ui-kit";

const Dashboard = ({ user }) => {
  const [showBasic, setShowBasic] = useState(false);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="dashboard">
      <header>
        <MDBNavbar expand="lg" light bgColor="white">
          <MDBContainer fluid>
            <MDBNavbarToggler
              onClick={() => setShowBasic(!showBasic)}
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showBasic ? "true" : undefined}>
              <MDBNavbarNav right className="mb-2 mb-lg-0">
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current="page" href="/login">
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">About</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <div
          className="bg-image"
          style={{
            backgroundImage: "url('/Images/LandingPage.jpg')",
            height: "800px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="" style={{ backgroundColor: "rgba()" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white"></div>
            </div>
          </div>
        </div>
      </header>

      <h1>Welcome, {user.username} find e-scooters nearby</h1>
      <section className="hero">
        <div className="container">
          <form className="booking-form">
            <input type="text" placeholder="Date & Location" />
            <input type="text" placeholder="Scooter" />
            <input type="text" placeholder="Name" />
            <button type="submit" color='dark'>Submit</button>
          </form>
        </div>
      </section>
      <section className="how-to-rent">
        <div className="container">
          <h2>How to rent a scooter?</h2>
          <div className="steps">
            <div className="step">
              <h3>Choose vehicle</h3>
              <p>
                From sleek and stylish models perfect for navigating crowded
                city streets to rugged and durable scooters for off-road
                adventures, we have something for everyone.
              </p>
            </div>
            <div className="step">
              <h3>Order Online</h3>
              <p>
                Order your scooter easily online and get it delivered to your
                doorstep.
              </p>
            </div>
            <div className="step">
              <h3>Easy Payments</h3>
              <p>
                Enjoy easy and secure payment options for a hassle-free rental
                experience.
              </p>
            </div>
            <div className="step">
              <h3>24/7 Returns</h3>
              <p>
                We offer 24/7 returns so you can return the scooter at your
                convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fleet">
        <div className="container">
          <h2>Our Fleet</h2>
          <div className="scooters">
            <div className="scooter">
              <img src="/images/scooter1.jpg" alt="Electric Scooter #1" />
              <h3>Electric Scooter #1</h3>
              <p>$10/hour</p>
            </div>
            <div className="scooter">
              <img src="/images/scooter2.jpg" alt="Electric Scooter #2" />
              <h3>Electric Scooter #2</h3>
              <p>€15/hour</p>
            </div>
            <div className="scooter">
              <img src="/images/scooter3.jpg" alt="Electric Scooter #3" />
              <h3>Electric Scooter #3</h3>
              <p>€20/hour</p>
            </div>
            <div className="scooter">
              <img src="/images/scooter4.jpg" alt="Electric Scooter #4" />
              <h3>Electric Scooter #4</h3>
              <p>€25/hour</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#membership">Membership</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-contacts">
            <p>Contact Us</p>
            <p>Email: info@scooteq.com</p>
            <p>Phone: (49) 456-7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
