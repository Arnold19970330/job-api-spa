// src/hooks/useJobs.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Job } from "../types/job";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export function useJobs(geo: string, industry: string) {
  return useQuery<Job[]>({
    queryKey: ["jobs", geo, industry],
    queryFn: async () => {
      if (!API_URL) throw new Error("API URL is missing");

      const res = await axios.get(API_URL, {
        params: {
          count: 21,
          geo: geo || undefined,
          industry: industry || undefined,
        },
      });
      return res.data.jobs || [];
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}