import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  

  return (
    <FilterContext.Provider value={{ filteredItems, setFilteredItems }}>
      {children}
    </FilterContext.Provider>
  );
};