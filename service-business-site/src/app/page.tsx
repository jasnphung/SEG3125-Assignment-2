import MyNavbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MyNavbar />

      <section className="bg-dark text-white text-center py-5 m-0">
        <div className="container">
          <h1 className="display-4">Reliable Auto Repair Services</h1>
          <p className="lead">Quality work. Honest pricing. Fast turnaround.</p>
        </div>
      </section>

      <section className="text-center m-0">
        <div className="container-fluid p-0">
          <Image
            src="/engine-repair.jpg"
            alt="Auto repair garage interior"
            width={1920}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      <section id="services" className="bg-light py-5 m-0">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Engine Diagnostics"
                description="We use the latest tools to identify engine problems quickly and accurately."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Brake Services"
                description="From pad replacements to full brake repairs, we keep you safe on the road."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Oil & Filter Changes"
                description="Fast, affordable oil changes using top-grade lubricants for every engine type."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Transmission Repair"
                description="Smooth out gear shifting with complete transmission diagnostics and repairs."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Wheel Alignment"
                description="Correct misaligned wheels to improve handling and extend tire life."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Battery Replacement"
                description="Quick testing and high-quality replacements to keep your car starting strong."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="AC & Heating Repair"
                description="Stay comfortable in all seasons with expert HVAC system services."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Suspension & Steering"
                description="Fix bumpy rides and shaky steering with precision suspension work."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Tire Rotation & Balancing"
                description="Maintain even wear and safe driving with routine tire care."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Exhaust System Repair"
                description="Restore performance and reduce noise with expert exhaust service."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Check Light Service"
                description="Diagnose warning lights and fix issues before they escalate."
              />
            </div>
            <div className="col-md-4 mb-4">
              <ServiceCard
                title="Pre-Purchase Inspections"
                description="Know exactly what you&apos;re buying with a thorough vehicle inspection."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 m-0">
        <div className="container">
          <h2 className="text-center mb-4">Find Us</h2>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.468519370546!2d-75.69735281764814!3d45.410694996063285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1749425883699!5m2!1sen!2sca"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rapid AutoCare Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}