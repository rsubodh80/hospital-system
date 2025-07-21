const departments = [
  {
    id: 'general',
    name: 'General Medicine',
    description:
      'Comprehensive primary care for all ages, diagnosing and treating a wide range of health conditions.',
    image:
      'https://images.unsplash.com/photo-1580281658620-8a7cc0b2edab?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description:
      'Specialized heart care, including diagnosis, treatment, and prevention of heart diseases.',
    image:
      'https://images.unsplash.com/photo-1550831107-bb03a2e4f1a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description:
      'Expert diagnosis and treatment of nervous system disorders including brain and spinal cord conditions.',
    image:
      'https://images.unsplash.com/photo-1581093588401-44d68400d7b4?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description:
      'Care for bones, joints, muscles, ligaments, and tendons including surgeries and rehabilitation.',
    image:
      'https://images.unsplash.com/photo-1584036561584-b03c19da874c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description:
      'Dedicated healthcare for infants, children, and adolescents ensuring healthy development.',
    image:
      'https://images.unsplash.com/photo-1507646227507-c6b3a96ecbca?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'radiology',
    name: 'Radiology',
    description:
      'Advanced imaging services like X-rays, MRIs, CT scans, and ultrasounds for precise diagnosis.',
    image:
      'https://images.unsplash.com/photo-1581093588412-cf8a306f37b4?auto=format&fit=crop&w=600&q=80',
  },
];

const Departments = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-12 text-center">Our Departments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {departments.map(({ id, name, description, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={image}
              alt={`${name} department`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">{name}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
