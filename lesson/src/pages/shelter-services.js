import { useState } from "react";
import "./shelter-services.css";

const ShelterServices = () => {
  const [filters, setFilters] = useState({
    government: "",
    city: "",
    shelterType: "",
    freeOnly: false,
  });
  const filterConfig = [
    {
      label: "Government",
      key: "Government",
      options: [
        { label: "Beirut", value: "beirut" },
        { label: "Tripoli", value: "Tripoli" },
        { label: "Akkar", value: "Akar" },
      ],
    },
    {
      label: "City",
      key: "City",
      options: [
        { label: "Beirut", value: "beirut" },
        { label: "Tripoli", value: "Tripoli" },
        { label: "Akkar", value: "Akkar" },
      ],
    },
    {
      label: "Shelter Type",
      key: "Shelter Type",
      options: [
        { label: "Family", value: "family" },
        { label: "Individual", value: "individual" },
        { label: "Emergency", value: "emergency" },
      ],
    },
  ];
  const shelters = [];

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };
  const resetFilter = () => {
    setFilters({
      government: "",
      city: "",
      shelterType: "",
      freeOnly: false,
    });
  };

  const handleBooking = (shelterId) => {
    alert(`Booking shelter with id: ${shelterId}`);
  };

  return (
    <div className="app">
      {/* Hero Section*/}

      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-heading">
                <h1>
                  Find Your Safe <span className="highlight"> Space</span>
                </h1>
                <p>
                  Whether you need a shelter or not it's best to find a safe
                  space
                </p>
              </div>

              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => alert("Book a shelter is clicked")}
                >
                  Book a Shelter
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => alert("Offer a shelter is clicked")}
                >
                  Offer a shelter
                </button>
              </div>

              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Active Shelters</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">People helped</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
              <div className="hero-illustration">

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* available shelter section */}
      <section className="shelters-sections">
        
      </section>
    </div>
  );
};

export default ShelterServices;
