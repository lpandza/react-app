export function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="flex justify-center p-6">
        <div className="h-32 w-32 rounded-full bg-slate-300"></div>
      </div>
      <div className="p-4 text-center">
        <div className="mx-auto mb-2 h-4 w-3/4 rounded bg-slate-300"></div>
        <div className="mx-auto h-4 w-1/2 rounded bg-slate-300"></div>
      </div>
    </div>
  );
}
