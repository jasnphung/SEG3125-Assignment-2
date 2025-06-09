import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <MyNavbar />

            <section className="bg-light py-5">
                <div className="container">
                    <h1 className="text-center mb-4">About Us</h1>
                    <p className="lead text-center">
                        At Precision Auto Repair, we&apos;re passionate about keeping you safe and your vehicle running smoothly.
                    </p>
                    <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                            <h4>Our Mission</h4>
                            <p>
                                We aim to deliver reliable, honest, and top-quality automotive repair services at fair prices.
                                Your satisfaction and safety are always our top priorities.
                            </p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h4>Our History</h4>
                            <p>
                                Since opening our garage in 2010, we&apos;ve built a loyal customer base through our dedication to excellence and transparency.
                                From engine diagnostics to tire services, we treat every car like it&apos;s our own.
                            </p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h4>Why Choose Us?</h4>
                            <ul>
                                <li>Certified, experienced technicians</li>
                                <li>State-of-the-art diagnostic equipment</li>
                                <li>Fast turnaround times</li>
                                <li>Friendly, honest service</li>
                            </ul>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h4>Our Team</h4>
                            <p>
                                Our skilled team of mechanics and service advisors bring years of hands-on expertise and customer-first attitudes to every job.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}