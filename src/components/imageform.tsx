import React, { useState } from "react";
import API from "../api/axiosInstance";

type FolderType = "syllabus" | "gallery" | "staff";

const UploadFile: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [folder, setFolder] = useState<FolderType>("gallery");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Get token from localStorage
  const token = localStorage.getItem("token") || "";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !title) {
      setMessage("Please select a file and enter title.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("folder", folder);

    try {
      setUploading(true);
      setMessage("");

      const res = await API.post("/images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(
        `Upload successful! File stored in folder: ${res.data.folder}`
      );
      setFile(null);
      setTitle("");
      setDescription("");
    } catch (err: any) {
      console.error(err);
      setMessage(err.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Upload File</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />

      <select
        value={folder}
        onChange={(e) => setFolder(e.target.value as FolderType)}
        className="w-full border p-2 mb-2 rounded"
      >
        <option value="syllabus">Syllabus (PDF)</option>
        <option value="gallery">Gallery (Image)</option>
        <option value="staff">Staff (Image)</option>
      </select>

      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={handleFileChange}
        className="w-full mb-2"
      />

      <button
        onClick={handleUpload}
        disabled={uploading || !token}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
};

export default UploadFile;
