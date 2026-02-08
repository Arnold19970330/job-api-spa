
export const SkeletonCard = () => (
  <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-xl animate-pulse" />
        <div className="w-16 h-6 bg-gray-50 rounded-lg animate-pulse" />
      </div>
      <div className="h-6 bg-gray-100 rounded-lg w-3/4 mb-3 animate-pulse" />
      <div className="h-4 bg-gray-50 rounded-lg w-1/2 mb-6 animate-pulse" />
      <div className="space-y-2">
        <div className="h-3 bg-gray-50 rounded w-full animate-pulse" />
        <div className="h-3 bg-gray-50 rounded w-full animate-pulse" />
        <div className="h-3 bg-gray-50 rounded w-2/3 animate-pulse" />
      </div>
    </div>
    <div className="h-12 bg-gray-100 rounded-2xl w-full mt-6 animate-pulse" />
  </div>
);