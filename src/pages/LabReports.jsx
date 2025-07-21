import { useEffect, useState } from "react";

const mockReports = [
  {
    id: 1,
    patientName: "John Doe",
    test: "Blood Test",
    result: "Normal",
    date: "2025-07-10",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    test: "X-Ray",
    result: "Fracture",
    date: "2025-07-08",
  },
];

const LabReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Replace this with actual fetch from backend later
    setReports(mockReports);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Lab Reports</h2>
      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-semibold">{report.test}</h3>
              <p className="text-sm text-gray-700">Patient: {report.patientName}</p>
              <p className="text-sm text-gray-700">Result: {report.result}</p>
              <p className="text-sm text-gray-500">Date: {report.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LabReports;
