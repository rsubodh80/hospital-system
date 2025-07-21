// src/pages/AdminUploadPage.jsx
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import AdminLabUploadFormLocal from '../components/AdminLabUploadFormLocal';

const AdminUploadPage = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    // Redirect non-admin users to login
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Lab Report Upload</h1>
      <AdminLabUploadFormLocal />
    </div>
  );
};

export default AdminUploadPage;
