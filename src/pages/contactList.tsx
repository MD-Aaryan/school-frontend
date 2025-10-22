import { useEffect, useState } from "react";
import API from "../api/axiosInstance";

interface Contact {
  id: string;
  name: string;
  email: string;
  mobile: string;
  message: string;
  createdAt: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await API.get("/contact"); // backend URL
        setContacts(res.data);
      } catch (err) {
        console.error("Failed to fetch contacts:", err);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Contact Submissions
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Mobile</th>
              <th className="py-2 px-4 border-b text-left">Message</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{c.id}</td>
                <td className="py-2 px-4 border-b">{c.name}</td>
                <td className="py-2 px-4 border-b">{c.email}</td>
                <td className="py-2 px-4 border-b">{c.mobile}</td>
                <td className="py-2 px-4 border-b">{c.message}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(c.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
