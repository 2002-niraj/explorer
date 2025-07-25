import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationControls = ({ currentPage, handleNext, handlePrevious, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-6 mt-6">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full 
                   border border-gray-300 text-gray-700 bg-white hover:bg-gray-100
                   dark:bg-white dark:text-black dark:hover:bg-gray-200
                   disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ChevronLeft size={18} />
        <span className="font-semibold">Previous</span>
      </button>

      <span className="text-lg font-medium text-gray-800 dark:text-white">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full 
                   border border-gray-300 text-gray-700 bg-white hover:bg-gray-100
                   dark:bg-white dark:text-black dark:hover:bg-gray-200
                   disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <span className="font-semibold">Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default PaginationControls;
