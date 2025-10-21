import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import API from "../api/axiosInstance";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [popup, setPopup] = useState<null | {
    type: "success" | "error";
    text: string;
  }>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/contact", formData);
      setPopup({ type: "success", text: "Message sent successfully!" });
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } catch (err) {
      console.error(err);
      setPopup({ type: "error", text: "Failed to send message. Try again." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (popup) {
      const timeout = setTimeout(() => setPopup(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [popup]);

  const getLabelClass = (fieldValue: string) =>
    `absolute left-4 text-gray-400 text-sm transition-all duration-200
    ${
      fieldValue
        ? "top-2 text-purple-500 text-sm"
        : "top-6 text-gray-400 text-base"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        {popup && (
          <div
            className={`absolute top-[-70px] left-0 right-0 mx-auto w-fit px-4 py-2 rounded-xl shadow-md text-white text-sm font-medium transition-transform duration-300 ${
              popup.type === "success"
                ? "bg-green-500"
                : "bg-red-500 animate-shake"
            }`}
          >
            {popup.text}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 space-y-6 transition-transform duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-700 mb-4">
            Contact Us
          </h2>

          {/* Inputs */}
          {["name", "email", "mobile"].map((field) => (
            <div key={field} className="relative w-full">
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "mobile"
                    ? "tel"
                    : "text"
                }
                name={field}
                placeholder=" "
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                required
                className="w-full p-4 pt-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent transition"
              />
              <label
                className={getLabelClass(
                  formData[field as keyof typeof formData]
                )}
              >
                {field === "name"
                  ? "Full Name"
                  : field === "email"
                  ? "Email Address"
                  : "Mobile Number"}
              </label>
            </div>
          ))}

          {/* Textarea */}
          <div className="relative w-full">
            <textarea
              name="message"
              placeholder=" "
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 pt-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent resize-none transition"
            />
            <label className={getLabelClass(formData.message)}>
              Your message...
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 transition flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading && <Loader2 className="animate-spin h-5 w-5" />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
