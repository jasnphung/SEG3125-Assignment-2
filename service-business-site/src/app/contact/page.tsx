"use client";

import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function ContactUsPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <MyNavbar />

            <main className="flex-grow-1">
                <section className="py-5 bg-light">
                    <div className="container">
                        <h1 className="text-center mb-4">Contact Us</h1>
                        <p className="text-center mb-5">
                            Please fill out the form below and we&apos;ll be in touch.
                        </p>

                        {submitted ? (
                            <Alert variant="success" className="text-center mx-auto" style={{ maxWidth: "600px" }}>
                                Thank you! Your message has been received.
                            </Alert>
                        ) : (
                            <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Your email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="Your phone" required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                                </Form.Group>

                                <div className="text-center">
                                    <Button type="submit" variant="primary">
                                        Send Message
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
