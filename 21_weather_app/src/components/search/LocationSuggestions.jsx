import React from "react";

function LocationSuggestions({ searchData, setLatitude, setLongitude }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mt-20">
      {searchData.map((data) => (
        <div
          key={`${data.lat}-${data.lon}`}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">{data?.name}</h3>

            <p className="text-sm text-slate-400">
              {data?.state ? `${data.state}, ` : ""}
              {data?.country}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Lat: {data?.lat?.toFixed(2)} | Lon: {data?.lon?.toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => {
              setLatitude(data?.lat);
              setLongitude(data?.lon);
            }}
            className="w-full rounded-xl bg-sky-500 px-4 py-2 font-medium text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:bg-sky-400 hover:scale-105 active:scale-95"
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default LocationSuggestions;
