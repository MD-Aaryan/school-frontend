import { create } from "zustand";

interface AuthState {
  token: string | null;
  role: string | null;
  username: string | null;
  email: string | null;
  setAuth: (
    token: string,
    role: string,
    username: string,
    email: string
  ) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role"),
  username: localStorage.getItem("username"),
  email: localStorage.getItem("email"),

  setAuth: (token, role, username, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    set({ token, role, username, email });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    set({ token: null, role: null, username: null, email: null });
  },
}));
