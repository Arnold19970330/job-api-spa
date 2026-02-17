// src/App.tsx
import { useState } from "react";
import { useJobs } from "./hooks/useJobs";
import { Filters } from "./components/Filters";
import { JobGrid } from "./components/JobGrid";
import { CustomButton } from "./components/CustomButton"; 
import type { Region } from "./constants/jobs";
import type { Industry } from "./constants/jobs";

export default function App() {
  const [geo, setGeo] = useState<Region | "">("");
  const [industry, setIndustry] = useState<Industry | "">("");
  
  const { data, isLoading, isError, refetch } = useJobs(geo, industry);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- TS TESZT OLDAL (Ide tettem a gombjaidat) --- */}
        <section className="mb-12 p-6 bg-white border-2 border-dashed border-gray-200 rounded-3xl">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            TS Component Playground
          </h2>
          <div className="flex flex-wrap gap-4">
            {/* Indigo (Alapértelmezett, mert nincs megadva color) */}
            <CustomButton>Default Indigo</CustomButton>

            {/* Emerald */}
            <CustomButton color="emerald">Success Emerald</CustomButton>

            {/* Red */}
            <CustomButton color="red" onClick={() => alert("Action triggered!")}>
              Danger Red
            </CustomButton>

            {/* Gray */}
            <CustomButton color="gray">Neutral Gray</CustomButton>
          </div>
          <p className="mt-4 text-xs text-gray-400 italic">
            Próbáld meg az App.tsx-ben átírni az egyik színt "yellow"-ra, és nézd a hibát!
          </p>
        </section>

        <hr className="mb-12 border-gray-100" />

        {/* --- EREDETI APP FUNKCIÓK --- */}
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
            refetch={refetch}
          />
        </main>
      </div>
    </div>
  );
}