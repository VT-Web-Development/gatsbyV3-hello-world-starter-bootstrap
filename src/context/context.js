import React, { createContext, useState } from "react"
import navLinks from "../constants/links"

const GatsbyContext = createContext()

// Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [links, setLinks] = useState(navLinks)

  return (
    <GatsbyContext.Provider value={{ links }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
