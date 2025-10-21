import { useState, useEffect } from "react";
import axios from "axios";

interface SyllabusItem {
  id: number;
  title: string;
  Url: string;
}
const LIMIT = 10;
const classes = ["9", "10", "11", "12"];

const Syllabus: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState("9");
  const [syllabusList, setSyllabusList] = useState<SyllabusItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSyllabus = async (pageNumber: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/images?folder=syllabus&limit=${LIMIT}&page=${pageNumber}`
      );
      setSyllabusList(response.data);
    } catch (error) {
      console.error("Error fetching syllabus:", error);
      setSyllabusList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSyllabus(selectedClass);
  }, [selectedClass]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Class Syllabus
      </h1>

      {/* Class Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`px-6 py-2 rounded-lg border text-lg font-medium transition 
              ${
                selectedClass === cls
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      {/* Syllabus List */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading syllabus...</p>
        ) : syllabusList.length > 0 ? (
          <ul className="space-y-4">
            {syllabusList.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-2 last:border-none"
              >
                <span className="text-gray-800 font-medium">{item.title}</span>
                <a
                  href={item.Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            No syllabus found for Class {selectedClass}
          </p>
        )}
      </div>
    </div>
  );
};

export default Syllabus;
