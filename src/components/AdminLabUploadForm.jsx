import { useState, useEffect } from "react";

const AdminLabUploadForm = () => {
  const [patientName, setPatientName] = useState("");
  const [reportFile, setReportFile] = useState(null);
  const [uploadedReports, setUploadedReports] = useState([]);
  const [status, setStatus] = useState("");

  // Load saved reports from localStorage on mount
  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("labReports") || "[]");
    setUploadedReports(savedReports);
  }, []);

  // Save uploaded reports to localStorage when changed
  useEffect(() => {
    localStorage.setItem("labReports", JSON.stringify(uploadedReports));
  }, [uploadedReports]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientName || !reportFile) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Convert file to Base64 URL for preview/storage
    const reader = new FileReader();
    reader.onloadend = () => {
      const newReport = {
        id: Date.now(),
        patientName,
        fileName: reportFile.name,
        fileType: reportFile.type,
        fileData: reader.result, // base64 string
      };

      setUploadedReports((prev) => [newReport, ...prev]);
      setPatientName("");
      setReportFile(null);
      setStatus("Report uploaded locally!");
    };

    reader.readAsDataURL(reportFile);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Upload Lab Report (Local Only)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter patient name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Report File (PDF/Image)</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setReportFile(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload Report
        </button>
      </form>
      {status && <p className="mt-4 text-gray-700">{status}</p>}

      <h3 className="mt-8 text-xl font-semibold">Uploaded Reports</h3>
      {uploadedReports.length === 0 && <p>No reports uploaded yet.</p>}
      <ul className="mt-4 space-y-3">
        {uploadedReports.map((report) => (
          <li key={report.id} className="border p-3 rounded shadow">
            <p><strong>Patient:</strong> {report.patientName}</p>
            <p><strong>File:</strong> {report.fileName}</p>
            {report.fileType.startsWith("image/") && (
              <img src={report.fileData} alt={report.fileName} className="mt-2 max-w-full rounded" />
            )}
            {report.fileType === "application/pdf" && (
              <a
                href={report.fileData}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 inline-block"
              >
                View PDF Report
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminLabUploadForm;
