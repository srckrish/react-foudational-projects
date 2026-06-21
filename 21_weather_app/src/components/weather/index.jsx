import { useState, useEffect } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [showSearchData, setShowSearchData] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  async function fetchSearchData(query) {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=3&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      );

      if (!response.ok) setErrorMessage(response.statusText);

      const data = await response.json();

      if (data && data.length > 0) {
        setShowSearchData(true);
        setSearchData(data);
      }

      if (data && data.length === 0) {
        setErrorMessage("No Location Found...");
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchWeatherData(lat, lon) {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      );
      if (!response.ok) setErrorMessage(response.statusText);

      const data = await response.json();

      console.log(data);

      setWeatherData(data);
      setShowSearchData(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    if (search !== "") fetchSearchData(search);
  }

  useEffect(() => {
    if (latitude !== null && longitude !== null)
      fetchWeatherData(latitude, longitude);
  }, [latitude, longitude]);

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
    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 flex flex-col items-center justify-center px-6 py-10 text-white">
      <Search
        search={search}
        setSearch={setSearch}
        weatherData={weatherData}
        handleClick={handleClick}
        setWeatherData={setWeatherData}
      />

      {loading ? (
        <div className="mt-8 animate-pulse text-lg font-semibold text-sky-400">
          Loading...
        </div>
      ) : null}

      {errorMessage ? (
        <div className="mt-8 animate-pulse text-lg font-semibold text-red-400">
          {errorMessage} <br />
          Please try again.....
        </div>
      ) : null}

      {searchData !== null && showSearchData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mt-20">
          {searchData.map((data) => (
            <div
              key={`${data.lat}-${data.lon}`}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {data?.name}
                </h3>

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
      )}

      {!loading && weatherData !== null ? (
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
                  {weatherData?.main?.temp}°C
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
                {weatherData?.wind?.speed} m/s
              </h3>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
