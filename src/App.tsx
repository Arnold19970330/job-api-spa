import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { JobCard } from "./components/JobCard";
import { SkeletonCard } from "./components/SkeletonCard"; 
import type { Job } from "./types/job"

const REGIONS = [
  "apac", "emea", "latam", "europe", "argentina", "australia", "austria", "belgium", "brazil", "bulgaria", 
  "canada", "china", "costa-rica", "croatia", "cyprus", "czechia", "denmark", "estonia", "finland", "france", 
  "germany", "greece", "hong-kong", "hungary", "ireland", "israel", "italy", "japan", "latvia", "lithuania", 
  "mexico", "netherlands", "new-zealand", "norway", "philippines", "poland", "portugal", "romania", "serbia", 
  "singapore", "slovakia", "slovenia", "south-korea", "spain", "sweden", "switzerland", "thailand", "turkiye", 
  "united-arab-emirates", "uk", "ukraine", "usa", "vietnam"
].sort();

const CATEGORIES = [
  "accounting-finance", "admin", "admin-support", "business", "copywriting", "data-science", "design-multimedia", 
  "dev", "education", "engineering", "healthcare", "hr", "legal", "management", "marketing", "seller", "seo", 
  "smm", "supporting", "technical-support", "web-app-design"
].sort();

export default function App() {
  const [geo, setGeo] = useState("");
  const [industry, setIndustry] = useState("");

  const { data, isLoading, isError } = useQuery<Job[]>({
    queryKey: ["jobs", geo, industry],
    queryFn: async () => {
      const res = await axios.get(`https://jobicy.com/api/v2/remote-jobs`, {
        params: {
          count: 21, 
          geo: geo || undefined,
          industry: industry || undefined,
        },
      });
      return res.data.jobs || [];
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-gray-900 tracking-tight">Remote Job Board</h1>

        {/* --- FILTERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Region */}
          <div className="relative group">
            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest ml-1">Region</label>
            <div className="relative">
              <select
                value={geo}
                onChange={(e) => setGeo(e.target.value)}
                className="w-full p-4 pr-10 bg-white border-2 border-gray-100 rounded-2xl shadow-sm outline-none text-gray-700 font-medium transition-all cursor-pointer appearance-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 group-hover:border-indigo-200"
              >
                <option value="">🌍 All Regions (Worldwide)</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>{r.toUpperCase()}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400 group-hover:text-indigo-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="relative group">
            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest ml-1">Category</label>
            <div className="relative">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-4 pr-10 bg-white border-2 border-gray-100 rounded-2xl shadow-sm outline-none text-gray-700 font-medium transition-all cursor-pointer appearance-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 group-hover:border-emerald-200"
              >
                <option value="">🚀 All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c.replace("-", " ").toUpperCase()}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400 group-hover:text-emerald-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {isError && (
          <div className="bg-red-50 border-2 border-red-100 text-red-700 p-5 rounded-3xl text-center mb-8 font-semibold animate-pulse">
            Hoppá! Valami hiba történt. Kérlek próbáld újra később!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeletonok rácsa
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            // Valódi kártyák
            data?.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>

        {!isLoading && !isError && data?.length === 0 && (
          <div className="text-center py-24 bg-white rounded-4xl border-2 border-dashed border-gray-200 text-gray-400">
            <div className="text-6xl mb-4">🕵️‍♂️</div>
            <p className="text-xl font-bold text-gray-500">No jobs found for this combination.</p>
            <p className="text-sm">Try broader search terms or different region.</p>
          </div>
        )}
      </div>
    </div>
  );
}