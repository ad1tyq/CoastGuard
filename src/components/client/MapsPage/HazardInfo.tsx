"use client"
import { useState, useMemo } from "react"
import { hazardInfo } from "../../../../data/hazardInfo"

// Card component
interface Types {
  location: string
  currenthazard: string
  alertlevel: string
}
function InfoCard({ location, currenthazard, alertlevel }: Types) {
  return (
    <div className="bg-white w-[17vw] flex flex-col px-5 py-2 rounded-2xl shadow-lg">
      <p className="font-semibold text-lg">{location}</p>
      <p>Current Hazard: {currenthazard}</p>
      <p>Alert Level: {alertlevel}</p>
    </div>
  )
}

// Map priority into rank numbers for sorting
const priorityRank: Record<string, number> = {
  High: 1,
  Mild: 2,
  Low: 3,
}

export default function HazardInfo() {
  const [priorityFilter, setPriorityFilter] = useState("All")
  const [sortOption, setSortOption] = useState("severity")

  // Filter + sort data
  const filteredData = useMemo(() => {
    let data = hazardInfo

    // Apply priority filter
    if (priorityFilter !== "All") {
      data = data.filter((info) => info.alertLevel === priorityFilter)
    }

    // Apply sorting
    if (sortOption === "severity") {
      data = [...data].sort(
        (a, b) => priorityRank[a.alertLevel] - priorityRank[b.alertLevel]
      )
    } else if (sortOption === "location") {
      data = [...data].sort((a, b) => a.location.localeCompare(b.location))
    }

    return data
  }, [priorityFilter, sortOption])

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="font-semibold text-xl">Hazard Information</h1>

      {/* Filter + Sort controls */}
      <div className="flex flex-col gap-4">
        {/* Priority Filter */}
        <select
          className="border p-2 bg-white rounded-md"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Mild">Mild</option>
          <option value="Low">Low</option>
        </select>

        {/* Sort Option */}
        <select
          className="border p-2 bg-white rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="severity">Sort by Severity</option>
          <option value="location">Sort by Location</option>
        </select>
      </div>

      {/* List */}
      <div
        className="flex flex-col gap-2 items-center h-[38rem] overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {filteredData.map((info, index) => (
          <InfoCard
            key={index}
            location={info.location}
            currenthazard={info.currentHazard}
            alertlevel={info.alertLevel}
          />
        ))}
      </div>
    </div>
  )
}
