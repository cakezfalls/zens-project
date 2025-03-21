export default function YearSlide({ years }) {
    const progressWidth = `${(years / 10) * 100}%`;
  
    return (
      <div className="bg-indigo-100 p-4 rounded-xl w-full max-w-lg">
        <div className="flex justify-between text-sm font-bold text-gray-900 mb-2">
          <span>1 year</span>
          <span>5 years</span>
          <span>10 years</span>
        </div>
        <div className="relative w-full h-4 bg-gray-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-4 bg-indigo-600 rounded-full transition-all"
            style={{ width: progressWidth }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>73% gas</span>
          <span>40% gas</span>
          <span>21% gas</span>
        </div>
      </div>
    );
  }
  