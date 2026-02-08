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

export interface JobResponse {
  apiVersion: string;
  data: Job[];
}