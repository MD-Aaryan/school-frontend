import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";

interface JwtPayload {
  role: string;
  username: string;
  email: string;
}

const AdminLogin: React.FC = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!emailOrPhone || !password) {
      setError("Please enter email/phone and password");
      return;
    }

    try {
      const res = await API.post("/auth/login", {
        emailOrPhone,
        password,
      });

      const token = res.data.access_token;
      if (!token || typeof token !== "string") {
        throw new Error("Invalid token received from server");
      }

      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.role !== "ADMIN") {
        throw new Error("You are not authorized as admin");
      }

      // ✅ Update Zustand store
      setAuth(token, decoded.role, decoded.username, decoded.email);

      // ✅ Save in localStorage for persistent access
      localStorage.setItem("token", token);
      localStorage.setItem("role", decoded.role);
      localStorage.setItem("username", decoded.username);
      localStorage.setItem("email", decoded.email);

      setIsOpen(false);
      navigate("/"); // redirect to homepage
      return true;
    } catch (err: any) {
      const msg =
        err.response?.data?.message || err.message || "Something went wrong";
      setError("Login failed: " + msg);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-xl font-semibold text-center">Admin Login</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input
          type="text"
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="w-full mt-2 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
