import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [concerts, setConcerts] = useState([]);
  const [myBookings, setMyBookings] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

  const [selectedConcert, setSelectedConcert] = useState(null);
  const [tickets, setTickets] = useState(1);

  useEffect(() => {
    if (token) {

      axios.get("http://127.0.0.1:8000/concerts/")
        .then(res => {
          console.log("Concerts:", res.data);
          setConcerts(res.data.results || res.data);
        })
        .catch(err => console.log(err));

      axios.get("http://127.0.0.1:8000/my-bookings/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        console.log("Bookings:", res.data);
        setMyBookings(res.data.results || res.data);
      })
      .catch(err => console.log(err));
    }
  }, [token]);

  const confirmBooking = () => {

    axios.post("http://127.0.0.1:8000/book/", {
      concert: selectedConcert,
      tickets: tickets
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      alert("Booked Successfully 🎉");
      setSelectedConcert(null);

      axios.get("http://127.0.0.1:8000/concerts/")
        .then(res => setConcerts(res.data.results || res.data));

      axios.get("http://127.0.0.1:8000/my-bookings/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setMyBookings(res.data.results || res.data));
    })
    .catch(err => {
      console.log(err.response);
      alert(err.response?.data?.error || "Booking failed");
    });
  };

  if (!token) {
    return (
      <div className="auth-bg">
        <div className="overlay d-flex justify-content-center align-items-center">

          {showRegister ? (
            <div>
              <Register setShowRegister={setShowRegister} />
              <p className="text-white text-center mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setShowRegister(false)}>
                Already have account? Login
              </p>
            </div>
          ) : (
            <div>
              <Login setToken={setToken} />
              <p className="text-white text-center mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setShowRegister(true)}>
                Create new account
              </p>
            </div>
          )}

        </div>
      </div>
    );
  }

  return (
    <div className="home-bg">
      <div className="overlay">

        <div className="container mt-3">

          <nav className="navbar navbar-dark bg-dark mb-4 rounded">
            <div className="container-fluid">
              <span className="navbar-brand">🎵 Concert App</span>

              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.removeItem("token");
                  setToken(null);
                }}
              >
                Logout
              </button>
            </div>
          </nav>

          <div className="text-center text-white mb-4">
            <h2>Welcome to Concert Booking 🎶</h2>
            <p>Book your favorite concerts easily!</p>
          </div>

          <h3 className="text-white">Available Concerts</h3>

          <div className="row">
            {concerts.length === 0 ? (
              <p className="text-white">No concerts available</p>
            ) : (
              concerts.map(c => (
                <div key={c.id} className="col-md-4">
                  <div className="card shadow-sm mb-4">

                    <div className="card-body">
                      <h5>{c.name}</h5>
                      <p>{c.venue}</p>
                      <p>{new Date(c.date_time).toLocaleString()}</p>
                      <p>₹{c.ticket_price}</p>
                      <p>Available: {c.available_tickets}</p>

                      <button
                        className="btn btn-primary w-100"
                        onClick={() => setSelectedConcert(c.id)}
                      >
                        Book Ticket
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {selectedConcert && (
            <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4 text-center">

                  <h5 className="mb-3">Select Tickets 🎟</h5>

                  <div className="d-flex justify-content-center gap-4 mb-3">

                    {[1,2,3].map(n => (
                      <div className="form-check" key={n}>
                        <input
                          className="form-check-input"
                          type="radio"
                          checked={tickets === n}
                          onChange={() => setTickets(n)}
                        />
                        <label className="form-check-label">{n}</label>
                      </div>
                    ))}

                  </div>

                  <div className="d-flex justify-content-center gap-3">

                    <button className="btn btn-success px-4" onClick={confirmBooking}>
                      Confirm
                    </button>

                    <button
                      className="btn btn-secondary px-4"
                      onClick={() => setSelectedConcert(null)}
                    >
                      Cancel
                    </button>

                  </div>

                </div>
              </div>
            </div>
          )}

          <h3 className="text-white mt-5">My Bookings</h3>

          <div className="row">
            {myBookings.length === 0 ? (
              <p className="text-white">No bookings yet</p>
            ) : (
              myBookings.map((b, index) => (
                <div key={index} className="col-md-4">
                  <div className="card border-success mb-3">
                    <div className="card-body">
                      <h5>{b.concert}</h5>
                      <p>Tickets: {b.tickets}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;