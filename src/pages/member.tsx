import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import API from "../api/axiosInstance";

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  url: string;
}

const LIMIT = 6;

const Member: React.FC = () => {
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
        `/images?folder=staff&limit=${LIMIT}&page=${pageNumber}`,
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
        if (entries[0].isIntersecting) setPage((prev) => prev + 1);
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
          Our Family
          {error && (
            <p className="text-red-500 text-sm mt-2 font-normal">{error}</p>
          )}
        </h2>

        <div className="max-w-6xl mx-auto grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {/* 🔹 Skeleton Loader */}
          {loading && images.length === 0
            ? Array.from({ length: LIMIT }).map((_, i) => (
                <div
                  key={i}
                  className="relative bg-gray-100 rounded-2xl shadow-md animate-pulse flex flex-col items-center text-center w-full max-w-sm h-[450px] overflow-hidden"
                >
                  <div className="w-full h-80 bg-gray-300" />
                  <div className="py-6 px-4 w-full">
                    <div className="w-3/4 h-5 bg-gray-300 rounded mb-3 mx-auto"></div>
                    <div className="w-5/6 h-4 bg-gray-300 rounded mx-auto"></div>
                  </div>
                </div>
              ))
            : images.map((item, idx) => (
                <motion.div
                  key={item.id}
                  ref={idx === images.length - 1 ? lastImageRef : null}
                  className="relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center w-full max-w-sm"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* Delete Button */}
                  {isAdmin && (
                    <motion.button
                      onClick={() => deleteImage(item.id)}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded-full shadow-md z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      Delete
                    </motion.button>
                  )}

                  {/* Image with fade-in and zoom effect */}
                  <motion.div
                    className="w-full bg-gray-50"
                    initial={{ opacity: 0.8, scale: 1 }}
                    whileHover={{ opacity: 1, scale: 1.07 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </motion.div>

                  {/* Info Section with slide-up effect */}
                  <motion.div
                    className="py-6 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <h3 className="text-xl font-semibold text-[#0c81ca] mb-2 font-[poppins]">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-700 text-base leading-relaxed font-[poppins]">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
        </div>

        {/* 🔹 Infinite scroll loading (bottom loader) */}
        {loading && images.length > 0 && (
          <div className="flex justify-center mt-8">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Member;
