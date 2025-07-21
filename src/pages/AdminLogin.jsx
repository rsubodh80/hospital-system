// src/pages/AdminLogin.jsx
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const { loginAsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginAsAdmin();
    navigate('/admin/upload'); // Redirect to admin upload page
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Login as Admin
      </button>
    </div>
  );
};

export default AdminLogin;
