import { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import doctors from "../data/doctorsData";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const specialties = ["All", ...new Set(doctors.map((doc) => doc.specialty))];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || doctor.specialty === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600 text-center">Our Doctors</h2>
      <p className="mt-2 text-gray-700 text-center mb-6">
        Browse our medical specialists by department.
      </p>

      {/* Search + Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {specialties.map((spec, i) => (
            <option key={i} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      {/* Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No doctors found.</p>
      )}
    </div>
  );
};

export default Doctors;
