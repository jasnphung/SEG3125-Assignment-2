"use client";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 m-0">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Rapid AutoCare</p>
        <p className="mb-0">
          75 Laurier Ave E, Ottawa, ON K1N 6N5 <br />
          Phone: (123) 456-7890 | Email: info@rapidautocare.com
        </p>
      </div>
    </footer>
  );
}