// src/App.tsx
import { useState } from "react";
import { useJobs } from "./hooks/useJobs";
import { Filters } from "./components/Filters";
import { JobGrid } from "./components/JobGRid";

export default function App() {
  const [geo, setGeo] = useState("");
  const [industry, setIndustry] = useState("");
  
  
  const { data, isLoading, isError } = useJobs(geo, industry);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header>
          <h1 className="text-4xl font-black mb-8 text-gray-900 tracking-tight">
            Remote Job Board
          </h1>
        </header>

        <main>
          <Filters 
            geo={geo} setGeo={setGeo} 
            industry={industry} setIndustry={setIndustry} 
          />

          <JobGrid 
            data={data} 
            isLoading={isLoading} 
            isError={isError} 
          />
        </main>
      </div>
    </div>
  );
}