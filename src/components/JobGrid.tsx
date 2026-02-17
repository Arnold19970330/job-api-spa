// src/components/JobGrid.tsx
import { JobCard } from "./JobCard";
import { SkeletonCard } from "./SkeletonCard";
import type { Job } from "../types/job";

interface JobGridProps {
  data: Job[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function JobGrid({ data, isLoading, isError }: JobGridProps) {
  // 1. Hibaállapot
  if (isError) {
    return (
      <div className="bg-red-50 border-2 border-red-100 text-red-700 p-5 rounded-3xl text-center mb-8 font-semibold animate-pulse">
        Hoppá! Valami hiba történt. Kérlek próbáld újra később!
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}