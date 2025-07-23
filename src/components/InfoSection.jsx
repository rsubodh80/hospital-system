import { useNavigate } from "react-router-dom";
import { useState } from "react";

const InfoSection = () => {
  const navigate = useNavigate();
  // Simulate admin state manually — set to true to see admin button
  const [isAdmin] = useState(true); // Change to false to hide admin button

  const handleClick = (section) => {
    if (section === "Lab Reports") {
      navigate("/lab-reports");
    } else {
      alert(`You clicked on ${section}! More details coming soon.`);
    }
  };

  return (
    <section className="bg-gray-50 py-0 px-0">
      <div className="container mx-auto flex justify-between items-center overflow-x-auto">

        {/* Hospital Image Button - Left */}
        <button
          onClick={() => handleClick('Hospital Image')}
          className="bg-white rounded-lg shadow flex-shrink-0 p-1 w-20 h-20 hover:shadow-lg transition"
          aria-label="Hospital Image"
        >
          <img
            src="https://thumbs.dreamstime.com/z/emergency-room-entrance-hospital-8065934.jpg?ct=jpeg"
            alt="Hospital building"
            className="rounded-lg object-cover w-full h-full"
          />
        </button>

        {/* Right Side Buttons Container */}
        <div className="flex space-x-3 flex-shrink-0">

          {/* Latest News Button */}
          {/* <button
            onClick={() => handleClick('Latest News')}
            className="bg-white rounded-lg shadow p-2 min-w-[100px] max-w-[120px] text-center hover:shadow-lg transition"
          >
            <h3 className="text-sm font-semibold text-blue-700 mb-1">Latest News</h3>
            <p className="text-gray-600 text-[10px] leading-tight">
              Stay updated with the latest happenings.
            </p>
          </button> */}

          {/* Lab Reports Button */}
          <button
            onClick={() => handleClick('Lab Reports')}
            className="bg-white rounded-lg shadow p-2 min-w-[100px] max-w-[120px] text-center hover:shadow-lg transition"
          >
            <h3 className="text-sm font-semibold text-blue-700 mb-1">Lab Reports</h3>
            <p className="text-gray-600 text-[10px] leading-tight">
              Access your medical reports securely.
            </p>
          </button>

          {/* Admin-only Upload Lab Report Button */}
          {isAdmin && (
            <button
              onClick={() => navigate('/admin/lab-upload')}
              className="bg-white rounded-lg shadow p-2 min-w-[100px] max-w-[140px] text-center hover:shadow-lg transition"
            >
              <h3 className="text-sm font-semibold text-red-600 mb-1">Upload Lab Report</h3>
              <p className="text-gray-600 text-[10px] leading-tight">
                Admin: upload new reports
              </p>
            </button>
          )}

          {/* Notices Button */}
          <button
            onClick={() => handleClick('Notices')}
            className="bg-white rounded-lg shadow p-2 min-w-[100px] max-w-[120px] text-center hover:shadow-lg transition"
          >
            <h3 className="text-sm font-semibold text-blue-700 mb-1">Notices</h3>
            <p className="text-gray-600 text-[10px] leading-tight">
              Important announcements and alerts.
            </p>
          </button>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
