// src/components/JobGrid.tsx
import { JobCard } from "./JobCard";
import { SkeletonCard } from "./SkeletonCard";
import type { Job } from "../types/job";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"

interface JobGridProps {
  data: Job[] | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants : Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function JobGrid({ data, isLoading, isError, refetch }: JobGridProps) {
  // 1. Hibaállapot
  if (isError) {
   return (
      <div className="flex flex-col items-center justify-center p-12 bg-red-50 border-2 border-red-100 rounded-3xl text-center mb-8">
        <div className="text-5xl mb-4">📡</div>
        <h2 className="text-xl font-bold text-red-800 mb-2">Hálózati hiba történt</h2>
        <p className="text-red-600 mb-6 font-medium">
          Nem sikerült betölteni az állásokat. Ellenőrizd az internetkapcsolatod!
        </p>
        
        {/* ÍME A REFECTH GOMB: */}
        <button 
          onClick={() => refetch()} 
          className="px-8 py-3 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-200 active:scale-95"
        >
          Próbálja újra
        </button>
      </div>
    );
  }

  // 2. Betöltési állapot
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  // 3. Üres állapot (nincs találat)
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-24 bg-white rounded-4xl border-2 border-dashed border-gray-200 text-gray-400">
        <div className="text-6xl mb-4">🕵️‍♂️</div>
        <p className="text-xl font-bold text-gray-500">No jobs found for this combination.</p>
        <p className="text-sm">Try broader search terms or different region.</p>
      </div>
    );
  }

  // 4. Sikeres adatmegjelenítés
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {data.map((job) => (
        <motion.div key={job.id} variants={itemVariants}>
          <JobCard job={job} />
        </motion.div>
      ))}
    </motion.div>
  );
}