export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="loading"
      />
    </div>
  );
}
