import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { useLocation ,Link} from "react-router-dom";

export default function CertificateGenerator() {
    const certificateRef = useRef();
  
    
  const { state } = useLocation();
  const courseTitle = state?.courseTitle || "Course Certificate";

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (name.trim() && date) {
      setSubmitted(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  
    const handleDownloadPDF = () => {
      const element = certificateRef.current;
  
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5], // in inches: top, left, bottom, right
        filename: `${name.replace(/\s+/g, "_")}_Drone_Certificate.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          scrollY: 0,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      };
  
      html2pdf().set(opt).from(element).save();
    };
  
  return (
    <section className="bg-[#0f172a] text-white min-h-screen py-16 px-6 font-sans">
       <div className="mb-6">
                <Link
                  to="/training"
                  className="text-blue-400 hover:underline text-sm"
                >
                  ← Back to Courses
                </Link>
              </div>
      <div className="max-w-3xl mx-auto">
        {!submitted ? (
          <form
            onSubmit={handleGenerate}
            className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm mb-2 font-semibold">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 text-white rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-semibold">
                Date of Completion <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 text-white rounded-md 
             [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
             

            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
            >
              Generate Certificate
            </button>
          </form>
        ) : (
<div
              ref={certificateRef}
              className="bg-white text-black rounded-xl shadow-xl border text-center max-w-3xl mx-auto"
              style={{
                padding: "2rem",
                marginTop: "2rem",
                minHeight: "10in",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Certificate of Completion
            </h2>
            <p className="text-gray-700 mb-6">This is to certify that</p>
            <h1 className="text-3xl font-bold text-blue-800">{name}</h1>
            <p className="text-gray-700 mt-4 mb-6">has successfully completed the course:</p>

            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {courseTitle}
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Including all modules and practical assessments.
            </p>

            <p className="text-gray-700 mt-6 mb-2">Date of Completion</p>
              <p className="text-md font-semibold">{date}</p>

              <div className="flex justify-between items-center mt-12 px-10">
                <div>
                  <p className="text-sm font-semibold">Instructor Signature</p>
                  <div className="w-24 h-8 border-t-2 border-gray-600 mx-auto mt-2"></div>
                </div>

                <div>
                  <p className="text-sm font-semibold">Verified</p>
                  <div className="w-24 h-8 border-t-2 border-gray-600 mx-auto mt-2"></div>
                </div>
              </div>

            <div className="text-center mt-6">
              <button
                onClick={handleDownloadPDF}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
              >
                Download Certificate (PDF)
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
