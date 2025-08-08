const { createContext } = require("react");

export const  themeContext = createContext({
    themeMode: "light",
    lightMode: () => { },
    darkMode: () => { },
})

export const themeProvider=themeContext.Provider
