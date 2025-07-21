import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import slide1 from '../assets/slide1.jpg'; 
import slide2 from '../assets/slide2.jpg'; 
import slide3 from '../assets/slide3.jpg'; 

const carouselImages = [slide1, slide2, slide3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const sampleDoctors = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      specialty: 'Cardiology',
      img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      specialty: 'Neurology',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      specialty: 'Orthopedics',
      img: 'https://images.unsplash.com/photo-1631217866816-6e0c1a1f6a98?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <>
      {/* Image Carousel */}
      <section className="relative w-full h-80 md:h-[550px] overflow-hidden">
        {carouselImages.map((img, idx) => (
          <img
            key={idx}
            src={img || 'https://via.placeholder.com/1200x550?text=Image+Not+Found'} // Fallback image
            alt={`Slide ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x550?text=Image+Not+Found'; }} // Error handling
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </section>

      {/* Hero Section */}
      <section className="relative bg-blue-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/z/emergency-room-entrance-hospital-8065934.jpg?ct=jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-60" />
        </div>

        <div className="relative z-10 py-24 px-6 md:px-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Our Trusted Hospital
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Providing compassionate and high-quality healthcare for everyone.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link
                to="/book"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
              >
                Book Appointment
              </Link>
              <Link
                to="/doctors"
                className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
              >
                Meet Our Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">Hospital Highlights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Lab Testing"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600">Advanced Lab Testing</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Full diagnostics using modern equipment and expert technicians.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
                alt="Doctor checkup"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600">Expert Doctor Consultations</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Personalized care and checkups from experienced specialists.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://thumbs.dreamstime.com/z/emergency-room-entrance-hospital-8065934.jpg?ct=jpeg"
                alt="Inpatient care"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600">Comfortable Inpatient Care</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Safe, clean, and caring environment for overnight stays.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://thumbs.dreamstime.com/z/emergency-room-entrance-hospital-8065934.jpg?ct=jpeg"
                alt="Emergency care"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600">24/7 Emergency Services</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Always ready with trained staff and fast response systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">Meet Our Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sampleDoctors.map((doc) => (
              <div key={doc.id} className="bg-gray-50 rounded-lg shadow p-4 hover:shadow-lg transition text-left">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600">{doc.name}</h3>
                <p className="text-gray-600">{doc.specialty}</p>
              </div>
            ))}
          </div>
          <Link
            to="/doctors"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            View All Doctors
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions or want to schedule a visit? Reach out to us!
          </p>
          <p className="text-gray-700">📍 123 Health St, Wellness City, Country</p>
          <p className="text-gray-700">📞 +1 (234) 567-8901</p>
          <p className="text-gray-700">📧 contact@trustedhospital.com</p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Contact Page
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;