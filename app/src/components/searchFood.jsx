import React from 'react'
import { Search } from 'lucide-react'
function SearchFood({search, setSearch}) {

  return (
    <div>
        <div className="flex gap-3 bg-white rounded-xl p-2 w-220">
        <Search size={16} color="black" strokeWidth={1.5} />
            <input className="w-full outline-none text-gray-600" 
            type="text" 
            placeholder="Search meals, artisanal ingredients, prep styles..." 
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
        </div>
    </div>
  )
}

export default SearchFood
