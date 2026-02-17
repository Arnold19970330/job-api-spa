// src/types.ts
export interface Job {
  id: number;
  url: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  jobType: string[];
  jobLevel: string;
  jobExcerpt: string;
  jobGeo: string;
  jobIndustry: string[];
}

export type JobInput = Omit<Job, "id" | "url">;

// 2. Pick - "Válogasd ki, ami kell"
// Ha csak egy listát akarsz mutatni a cégek logóival és neveivel:
export type CompanyBaseInfo = Pick<Job, "companyName" | "companyLogo">;

// 3. Partial - "Minden legyen opcionális"
// Ez akkor jó, ha egy állást akarsz szerkeszteni (Update), 
// és nem biztos, hogy minden mezőt egyszerre akarsz módosítani:
export type JobUpdate = Partial<Job>;