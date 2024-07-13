import React, { useState,useEffect } from "react";
import axios from 'axios';
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
} from "mdb-react-ui-kit";

const Dashboard = ({ user }) => {
    const [showBasic, setShowBasic] = useState(false);
    const [scooters, setScooters] = useState([]);
    const [selectedScooter, setSelectedScooter] = useState(null);
    const [duration, setDuration] = useState('');
    const [fare, setFare] = useState(null);
  
    // Fetch scooters data when the component mounts
    useEffect(() => {
      const fetchScooters = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/scooters');  // Ensure this URL is correct
          setScooters(response.data);
        } catch (error) {
          console.error("Error fetching scooters:", error);
        }
      };
      fetchScooters();
    }, []);
  
    // Function to handle renting a scooter
    const handleRentScooter = async () => {
      if (!selectedScooter) { // Check if a scooter is selected
        alert('Please select a scooter to rent.');
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:5000/api/rent-scooter', {  // Ensure this URL is correct
          user_id: user.id,
          scooter_id: selectedScooter.id,
          start_time: new Date().toISOString()
        });
        alert(response.data.message);
      } catch (error) {
        console.error("Error renting scooter:", error);
      }
    };
  
    // Function to handle fare calculation
    const handleCalculateFare = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/calculate-fare', { duration });  // Ensure this URL is correct
        setFare(response.data.fare);
      } catch (error) {
        console.error("Error calculating fare:", error);
      }
    };
  
    // Redirect to login if user is not authenticated
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
                <MDBNavbarLink href="/fare-calculator">Calculate Fare</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href={`/user-profile/${user.id}`}>Profile</MDBNavbarLink>
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

      <div className="container mt-5">
        <h2>Rent a Scooter</h2>
        <select onChange={(e) => setSelectedScooter(scooters.find(s => s.id === e.target.value))}>
          <option value="">Select a scooter</option>
          {scooters.map(scooter => (
            <option key={scooter.id} value={scooter.id}>{scooter.model} - {scooter.location} ({scooter.status})</option>
          ))}
        </select>
        <button onClick={handleRentScooter}>Rent Scooter</button>

        <h2>Calculate Fare</h2>
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button onClick={handleCalculateFare}>Calculate</button>
        {fare !== null && <p>Fare: ${fare}</p>}
      </div>

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
