
import React from "react";

type FilterOptions = {
  skills: string[];
  locations: string[];
  interests: string[];
};

interface FilterBarProps {
  filters: { skill: string; location: string; interest: string };
  setFilters: (filters: { skill: string; location: string; interest: string }) => void;
  options: FilterOptions;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters, options }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center bg-white p-4 rounded-xl shadow border border-gray-100 mb-5">
      <select
        className="border rounded p-2 text-sm"
        value={filters.skill}
        onChange={(e) => setFilters({ ...filters, skill: e.target.value })}
      >
        <option value="">All Skills</option>
        {options.skills.map((skill) => (
          <option key={skill}>{skill}</option>
        ))}
      </select>
      <select
        className="border rounded p-2 text-sm"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      >
        <option value="">All Locations</option>
        {options.locations.map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
      </select>
      <select
        className="border rounded p-2 text-sm"
        value={filters.interest}
        onChange={(e) => setFilters({ ...filters, interest: e.target.value })}
      >
        <option value="">All Interests</option>
        {options.interests.map((interest) => (
          <option key={interest}>{interest}</option>
        ))}
      </select>
    </div>
  );
};
