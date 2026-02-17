// src/constants/jobs.ts

export const REGIONS = [
  "apac", "emea", "latam", "europe", "argentina", "australia", "belgium", "brazil", "bulgaria", 
  "canada", "china", "costa-rica", "croatia", "cyprus", "czechia", "denmark", "estonia", "finland", "france", 
  "germany", "greece", "hong-kong", "hungary", "ireland", "israel", "italy", "japan", "latvia", "lithuania", 
  "mexico", "netherlands", "new-zealand", "norway", "philippines", "poland", "portugal", "romania", "serbia", 
  "singapore", "slovakia", "slovenia", "south-korea", "spain", "sweden", "switzerland", "thailand", "turkiye", 
  "united-arab-emirates", "uk", "ukraine", "usa", "vietnam"
] as const

export type Region = typeof REGIONS[number];

export const CATEGORIES = [
  "accounting-finance", "admin", "admin-support", "business", "copywriting", "data-science", "design-multimedia", 
  "dev", "education", "engineering", "healthcare", "hr", "legal", "management", "marketing", "seller", "seo", 
  "smm", "supporting", "technical-support", "web-app-design"
] as const

export type Industry = typeof CATEGORIES[number];