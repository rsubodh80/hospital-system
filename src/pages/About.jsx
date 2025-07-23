import { FaHeartbeat, FaStethoscope, FaUserMd, FaHospital } from "react-icons/fa";
import chairmanImg from "../assets/chairman.jpg"; // Adjust path if needed

const About = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-800">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center">About CityCare Hospital</h2>
      <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-600">
        Delivering compassion-driven, cutting-edge healthcare for over a decade.
      </p>

      {/* Mission */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h3>
        <p className="leading-relaxed">
          Our mission is to provide accessible, affordable, and world-class medical care to every patient. We believe in combining
          advanced medical technology with a human touch, ensuring every individual is treated with respect and empathy.
        </p>
      </section>

      {/* Chairman Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">From the Chairman's Desk</h3>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-xl shadow-sm">
          <img
            src={chairmanImg}
            alt="Chairman"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow-md"
          />
          <div>
            <h4 className="text-xl font-bold text-blue-700">Dr. Rajeev Sinha</h4>
            <p className="text-gray-700 font-medium mb-2">Chairman & Founder, CityCare Hospital</p>
            <p className="text-gray-700 leading-relaxed">
              "At CityCare, our vision has always been to create a healthcare environment that not only treats, but also heals
              emotionally. We are proud of our world-class staff and the lives we change every day."
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <FaHeartbeat className="text-blue-600 text-3xl mb-2" />
          <h4 className="text-lg font-semibold">24/7 Emergency</h4>
          <p className="text-sm text-gray-600">Round-the-clock emergency and trauma care.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <FaStethoscope className="text-blue-600 text-3xl mb-2" />
          <h4 className="text-lg font-semibold">Advanced Diagnostics</h4>
          <p className="text-sm text-gray-600">Modern labs & high-precision testing equipment.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <FaUserMd className="text-blue-600 text-3xl mb-2" />
          <h4 className="text-lg font-semibold">Expert Doctors</h4>
          <p className="text-sm text-gray-600">Our specialists lead in every major field of medicine.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <FaHospital className="text-blue-600 text-3xl mb-2" />
          <h4 className="text-lg font-semibold">Modern Facilities</h4>
          <p className="text-sm text-gray-600">Spacious wards, clean rooms, advanced surgical suites.</p>
        </div>
      </section>

      {/* Team Preview */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Meet Our Team</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Meera Sharma", title: "Chief Surgeon" },
            { name: "Dr. Arjun Patel", title: "Cardiologist" },
            { name: "Dr. Neha Verma", title: "Pediatrician" },
          ].map((member, i) => (
            <div key={i} className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mb-2">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-lg mb-4">Want to know more about our services or specialists?</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
