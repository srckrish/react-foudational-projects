import React from "react";

function LocationWeather({ weatherData }) {
  function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString("en-us", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <>
      <div className="mt-8 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md">
        {getCurrentDate()}
      </div>

      <div className="mt-6 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-bold tracking-wide">
            {weatherData?.name}
          </h1>

          <span className="rounded-full bg-sky-500/20 px-4 py-1 text-sm font-medium text-sky-300">
            {weatherData?.sys?.country}
          </span>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="rounded-lg bg-slate-800 px-3 py-2">
              Latitude: {weatherData?.coord?.lat?.toFixed(2)}
            </span>

            <span className="rounded-lg bg-slate-800 px-3 py-2">
              Longitude: {weatherData?.coord?.lon?.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-sky-500/10 p-5 text-center shadow-lg">
            <p className="text-sm text-slate-400">Temperature</p>
            <h2 className="mt-2 text-3xl font-bold text-sky-400">
              {(weatherData?.main?.temp - 273.15).toFixed(2)}°C
            </h2>
          </div>

          <div className="rounded-2xl bg-emerald-500/10 p-5 text-center shadow-lg">
            <p className="text-sm text-slate-400">Pressure</p>
            <h2 className="mt-2 text-3xl font-bold text-emerald-400">
              {weatherData?.main?.pressure} hPa
            </h2>
          </div>

          <div className="rounded-2xl bg-violet-500/10 p-5 text-center shadow-lg">
            <p className="text-sm text-slate-400">Humidity</p>
            <h2 className="mt-2 text-3xl font-bold text-violet-400">
              {weatherData?.main?.humidity}%
            </h2>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white/5 p-5 text-center">
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Weather Description
          </p>
          <h3 className="mt-2 text-xl font-semibold capitalize text-amber-300">
            {weatherData?.weather[0]?.description}
          </h3>
        </div>

        <div className="mt-4 rounded-2xl bg-white/5 p-5 text-center">
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Wind Speed
          </p>
          <h3 className="mt-2 text-xl font-semibold text-cyan-300">
            {(weatherData?.wind?.speed).toFixed(2)} m/s
          </h3>
        </div>
      </div>
    </>
  );
}

export default LocationWeather;
