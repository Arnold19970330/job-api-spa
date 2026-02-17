import type { Job } from "../types/job";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const decodeText = <T extends string | string[]>(input: T): T => {
  
  const cleaner = (str: string): string => {
    if (!str) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    
    const decodedOnce = txt.value;
    txt.innerHTML = decodedOnce;
    return txt.value;
  };

  if (Array.isArray(input)) {
    return input.map((item) => cleaner(item)) as T;
  }

  return cleaner(input as string) as T;
};

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 border rounded-lg overflow-hidden bg-gray-50 p-2">
          <img
            src={job.companyLogo}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase">
          {job.jobGeo}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 min-h-14">
        {decodeText(job.jobTitle)}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
       
        <div className="flex flex-wrap gap-2 mb-4">
          
          {job.jobIndustry &&
            decodeText(job.jobIndustry).map((ind: string) => (
              <span
                key={ind}
                className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100"
              >
                {ind}
              </span>
            ))}

         
          {job.jobType &&
            decodeText(job.jobType).map((type: string) => (
              <span
                key={type}
                className="text-xs font-bold text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-100"
              >
                {type}
              </span>
            ))}
        </div>
      </div>

      <div
        className="text-gray-600 text-sm mb-6 line-clamp-3 grow"
        dangerouslySetInnerHTML={{ __html: job.jobExcerpt }}
      />

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center py-2.5 px-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors mt-auto"
      >
        Apply Now
      </a>
    </div>
  );
};
