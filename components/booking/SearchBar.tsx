"use client";
import { useState } from "react";
import { MapPin, Calendar, Search } from "lucide-react";

export const SearchBar: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for flights to ${destination} from ${from} to ${to}`
    );
    // Here you can add logic to actually perform the search, such as making an API call
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <MapPin className="text-red-500" />
        <label htmlFor="destination" className="sr-only">
          Destination
        </label>
        <input
          id="destination"
          type="text"
          placeholder="Where are you going?"
          className="p-2 border border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-red-300"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Calendar className="text-red-500" />
        <label htmlFor="from" className="sr-only">
          From
        </label>
        <input
          id="from"
          type="date"
          className="p-2 border border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-red-300"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Calendar className="text-red-500" />
        <label htmlFor="to" className="sr-only">
          To
        </label>
        <input
          id="to"
          type="date"
          className="p-2 border border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-red-300"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <button
        className="flex items-center justify-center bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300"
        onClick={handleSearch}
      >
        <Search className="text-white" />
        <span className="ml-2">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
