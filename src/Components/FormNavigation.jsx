export default function FormNavigation({ previous, formNumber, next, isDisabled }) {
  return (
    <>
      <div className="px-7 py-4 h-15 flex relative items-center justify-between bg-white w-90 rounded-lg border border-gray-300">
        {formNumber > 1 && (
          <button
            className="w-20 left-4 py-1 absolute rounded-lg bg-blue-600 font-medium text-white cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={previous}
          >
            Previous
          </button>
        )}
        {formNumber < 3 && (
          <button
            className={`w-20 right-4 py-1 absolute rounded-lg  font-medium text-white     ${
              isDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:scale-105 active:scale-95 cursor-pointer "
            }  transition-transform duration-300`}
            onClick={next}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
