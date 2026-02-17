// src/components/Filters.tsx
import { REGIONS, CATEGORIES } from "../constants/jobs";
import type { Region } from "../constants/jobs";
import type { Industry } from "../constants/jobs";

interface FiltersProps {
  geo: Region | "";
  setGeo: (val: Region) => void;
  industry: Industry | "";
  setIndustry: (val: Industry) => void;
}

export function Filters({ geo , setGeo, industry, setIndustry }: FiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* Region Select */}
      <div className="relative group">
        <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest ml-1">Region</label>
        <div className="relative">
          <select
            value={geo}
            onChange={(e) => setGeo(e.target.value as Region)}
            className="w-full p-4 pr-10 bg-white border-2 border-gray-100 rounded-2xl shadow-sm outline-none text-gray-700 font-medium transition-all cursor-pointer appearance-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 group-hover:border-indigo-200"
          >
            <option value="">🌍 All Regions (Worldwide)</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>{r.toUpperCase()}</option>
            ))}
          </select>
          {/* ... ide jöhet az az SVG ikon, ami az eredeti kódban is volt ... */}
        </div>
      </div>

      {/* Category Select */}
      <div className="relative group">
        <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest ml-1">Category</label>
        <div className="relative">
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value as Industry)}
            className="w-full p-4 pr-10 bg-white border-2 border-gray-100 rounded-2xl shadow-sm outline-none text-gray-700 font-medium transition-all cursor-pointer appearance-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 group-hover:border-emerald-200"
          >
            <option value="">🚀 All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c.replace("-", " ").toUpperCase()}</option>
            ))}
          </select>
          {/* ... ide is az eredeti SVG ikon ... */}
        </div>
      </div>
    </div>
  );
}