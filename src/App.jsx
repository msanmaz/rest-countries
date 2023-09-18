import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import DropDown from "./components/DropDown/DropDown";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <div className={`bebas`}>
        <div className="w-full md:px-[3.5rem] m-auto py-[3rem] flex md:flex-row justify-between items-start md:items-center gap-5 md:gap-0">
          <Input />
          <DropDown />
        </div>

        <div className="w-11/12 m-auto md:grid mt-10 gap-10 md:grid-cols-4 flex flex-col">
          {loading ? (
           <div className="flex justify-center h-[25rem]"> <p className="font-bold text xl">Fetching Data....</p> </div>
          ) : (
            countries.map((country, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-md overflow-hidden h-[25rem] cursor-pointer"
              >
                <img
                  src={country.flags.png}
                  alt="Country card"
                  className="h-56 w-full object-cover"
                />
                <span className="px-3 py-2 block font-bold text-xl">
                  {country.name.common}
                </span>
                <span className="px-3 py-2 block">
                  <span className="font-bold">Popoulation:</span>{" "}
                  <span className="font-light">{country.population}</span>
                </span>
                <span className="px-3 py-2 block">
                  <span className="font-bold">Region:</span>{" "}
                  <span className="font-light">{country.region}</span>
                </span>
                <span className="px-3 py-2 block">
                  <span className="font-bold">Capital:</span>{" "}
                  <span className="font-light">{country.capital}</span>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
