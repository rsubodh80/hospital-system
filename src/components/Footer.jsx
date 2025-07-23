const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-lg font-semibold">🏥 Hospital Management System</p>
        <p className="text-sm">Providing healthcare with compassion and excellence.</p>
        <p className="text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
