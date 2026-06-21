import { useState, useEffect } from "react";
import SearchMenu from "../search/SearchMenu";
import LocationWeather from "./LocationWeather";
import LocationSuggestions from "../search/LocationSuggestions";

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
        `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
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

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 flex flex-col items-center justify-center px-6 py-10 text-white">
      <SearchMenu
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
        <LocationSuggestions
          searchData={searchData}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
      )}

      {!loading && weatherData !== null ? (
        <LocationWeather weatherData={weatherData} />
      ) : null}
    </div>
  );
}
