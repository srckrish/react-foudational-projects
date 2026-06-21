export default function Search({
  search,
  setSearch,
  handleSearch,
  weatherData,
  setWeatherData,
}) {
  function handleClearSearch() {
    setSearch("");
    setWeatherData(null);
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Enter city name..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={weatherData !== null}
          className="
        flex-1
        rounded-2xl
        border border-white/10
        bg-white/10
        px-5 py-3
        text-white
        placeholder:text-slate-400
        backdrop-blur-md
        outline-none
        transition-all
        duration-300
        focus:border-sky-500
        focus:ring-2
        focus:ring-sky-500/40
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
        />

        {weatherData ? (
          <button
            onClick={handleClearSearch}
            className="
              rounded-2xl
              bg-red-500
              px-6 py-3
              font-semibold
              text-white
              shadow-lg
              shadow-red-500/30
              transition-all
              duration-300
              hover:bg-red-600
              hover:scale-105
              active:scale-95
            "
          >
            X
          </button>
        ) : (
          <button
            onClick={handleSearch}
            className="
          rounded-2xl
          bg-sky-500
          px-6 py-3
          font-semibold
          text-white
          shadow-lg
          shadow-sky-500/30
          transition-all
          duration-300
          hover:bg-sky-600
          hover:scale-105
          active:scale-95
        "
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
}
