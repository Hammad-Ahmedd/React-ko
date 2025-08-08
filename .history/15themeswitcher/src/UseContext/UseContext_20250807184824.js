const { createContext, useContext } = fr("react");

export const  themeContext = createContext({
    themeMode: "light",
    lightMode: () => { },
    darkMode: () => { },
})

export const themeProvider=themeContext.Provider;

export default function theme(){
    return useContext(themeContext)
}
