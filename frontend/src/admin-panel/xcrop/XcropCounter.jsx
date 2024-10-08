import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "../components/Alert";
import { identifyError } from "../../utils/identify.error";
import { messages } from "../../constants/messages";
import { useDarkMode } from "../../DarkModeContext";

function XcropCounter() {
  const [formData, setFormData] = useState({
    experiences: "",
    projects: "",
    experts: "",
    clients: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { isDarkMode } = useDarkMode();

  // Fetch current counter data by ID when the component mounts
  useEffect(() => {
    const fetchCounterData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/counter/66d76d7834028264faf6acaf`
        );
        setFormData(response.data);
      } catch (error) {
        setAlertMessage(identifyError(error.response?.data?.code));
        setShowAlert(true);
      }
    };

    fetchCounterData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${process.env.REACT_APP_BASE_URL}/counter/66d76d7834028264faf6acaf`, formData);
      setAlertMessage(messages.counterUpdated);
      setShowAlert(true);
    } catch (error) {
      setAlertMessage(identifyError(error.response?.data?.code));
      setShowAlert(true);
    }
  };

  // Handle form clearing
  const handleClear = () => {
    setFormData({
      experiences: "",
      projects: "",
      experts: "",
      clients: "",
    });
  };

  // Handle alert close
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"}`}>
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}

      <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto border border-gray-500 rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Update Counter</h1>
        <div>
          <label htmlFor="experiences" className="block text-sm font-medium">
            Experiences
          </label>
          <input
            type="number"
            id="experiences"
            name="experiences"
            required
            value={formData.experiences}
            onChange={handleChange}
            className={`p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
          />
        </div>
        <div>
          <label htmlFor="projects" className="block text-sm font-medium">
            Projects
          </label>
          <input
            type="number"
            id="projects"
            name="projects"
            required
            value={formData.projects}
            onChange={handleChange}
            className={`p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
          />
        </div>
        <div>
          <label htmlFor="experts" className="block text-sm font-medium">
            Experts
          </label>
          <input
            type="number"
            id="experts"
            name="experts"
            required
            value={formData.experts}
            onChange={handleChange}
            className={`p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
          />
        </div>
        <div>
          <label htmlFor="clients" className="block text-sm font-medium">
            Clients
          </label>
          <input
            type="number"
            id="clients"
            name="clients"
            required
            value={formData.clients}
            onChange={handleChange}
            className={`p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default XcropCounter;
