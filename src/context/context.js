import React, { createContext, useState } from "react"
import navLinks from "../constants/links"
import headerUpperLinks from "../constants/headerUpperLinks"

const GatsbyContext = createContext()

// Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [links, setLinks] = useState(navLinks)

  return (
    <GatsbyContext.Provider value={{ links, headerUpperLinks }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
