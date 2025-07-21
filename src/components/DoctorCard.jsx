const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-700">{doctor.name}</h3>
      <p className="text-sm text-gray-600">{doctor.specialty}</p>
      <p className="text-xs text-gray-500 mt-1">{doctor.experience} experience</p>
    </div>
  );
};

export default DoctorCard;
