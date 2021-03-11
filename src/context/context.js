import React, { createContext, useState } from "react"
// import sublinks from "../constants/links"

const GatsbyContext = createContext()

// Provider, Consumer

const GatsbyProvider = ({ children }) => {
  //   const [links, setLinks] = useState(sublinks)

  return <GatsbyContext.Provider>{children}</GatsbyContext.Provider>
}

export { GatsbyContext, GatsbyProvider }
