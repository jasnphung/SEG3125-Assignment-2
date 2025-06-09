"use client";

import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <MyNavbar />

      <section className="py-5 bg-light d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div className="container">
          <h1 className="text-center mb-4">Book an Appointment</h1>
          <p className="text-center mb-5">
            Fill out the form below to request a service appointment.
          </p>

          {submitted ? (
            <div className="alert alert-success text-center" role="alert">
              Thank you! Your appointment request has been received.
            </div>
          ) : (
            <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
              <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Your phone" required pattern="\d{3}[\-]?\d{3}[\-]?\d{4}" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Vehicle Year</Form.Label>
                <Form.Control type="text" placeholder="Vehicle year" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Vehicle Make</Form.Label>
                <Form.Control type="text" placeholder="Vehicle make" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Vehicle Model</Form.Label>
                <Form.Control type="text" placeholder="Vehicle model" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookService">
                <Form.Label>Service</Form.Label>
                <Form.Select required>
                  <option value="">Select a service</option>
                  <option>Engine Diagnostics</option>
                  <option>Brake Services</option>
                  <option>Oil & Filter Changes</option>
                  <option>Transmission Repair</option>
                  <option>Wheel Alignment</option>
                  <option>Battery Replacement</option>
                  <option>AC & Heating Repair</option>
                  <option>Suspension & Steering</option>
                  <option>Tire Rotation & Balancing</option>
                  <option>Exhaust System Repair</option>
                  <option>Check Light Service</option>
                  <option>Pre-Purchase Inspections</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookDate">
                <Form.Label>Preferred Date and Time</Form.Label>
                <Form.Control type="datetime-local" required />
              </Form.Group>

              <Form.Group className="mb-4" controlId="bookMessage">
                <Form.Label>Additional Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Optional" />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit Request
                </Button>
              </div>
            </Form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
