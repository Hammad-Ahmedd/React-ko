const { createContext } = require("react");

export default  themeContext = createContext({
    themeMode: "light",
    lightMode: () => { },
    darkMode: () => { },
})

