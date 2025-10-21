import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Footer from "./footer";
import API from "../api/axiosInstance";

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  url: string;
}
const LIMIT = 6;

const GallerySection: React.FC = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const observer = useRef<IntersectionObserver | null>(null);
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role") === "ADMIN";

  const fetchImages = async (pageNumber: number) => {
    setLoading(true);
    setError("");
    try {
      const res = await API.get(
        `/images?folder=gallery&limit=${LIMIT}&page=${pageNumber}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const newImages: GalleryItem[] = res.data;
      setImages((prev) => {
        const existingIds = new Set(prev.map((img) => img.id));
        const filtered = newImages.filter((img) => !existingIds.has(img.id));
        return [...prev, ...filtered];
      });
      if (newImages.length < LIMIT) setHasMore(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch gallery images");
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id: string) => {
    if (!isAdmin) return;
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      await API.delete(`/images/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete image");
    }
  };
  const lastImageRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    fetchImages(page);
  }, [page]);
  return (
    <>
      <section className="px-6 md:px-14 py-10 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Our Gallery
          {error && (
            <p className="text-red-500 text-sm mt-2 font-normal">{error}</p>
          )}
        </h2>

        <div className="max-w-7xl mx-auto grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, idx) => (
            <motion.div
              key={item.id}
              ref={idx === images.length - 1 ? lastImageRef : null}
              className="relative overflow-hidden rounded-2xl shadow-md group"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              {/* Image with fade-in and zoom effect */}
              <motion.img
                src={item.url}
                alt={item.title}
                className="w-full h-72 object-cover rounded-2xl"
                initial={{ scale: 1, opacity: 0.8 }}
                whileHover={{ scale: 1.07, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Overlay with animated gradient fade */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />

              {/* Title with slide-up effect */}
              <motion.div
                className="absolute bottom-5 left-4 right-4 text-center text-white px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-lg md:text-xl font-medium leading-snug drop-shadow-md font-[poppins]">
                  {item.title}
                </p>
              </motion.div>
              {isAdmin && (
                <motion.button
                  onClick={() => deleteImage(item.id)}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded-full shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  Delete
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GallerySection;
